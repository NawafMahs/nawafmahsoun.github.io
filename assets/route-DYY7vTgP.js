const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cb5csYQG.js","assets/jsx-runtime-e9svsKL-.js","assets/image-CyAsWJ2Q.js","assets/heading-CC3zBnSN.js","assets/components-DYXJCFuo.js","assets/heading-C5dfv3B4.css","assets/image-wAiq2qtr.css","assets/three-DoHZmhMI.js","assets/throttle-BgiUmwhn.js","assets/use-spring-C3qV9qVq.js","assets/index-CmfjIxA9.js","assets/animate-QxQwXxDt.js","assets/slice-app-C7u_2Rr3.js","assets/meta-1DdlTqBX.js","assets/config-B1ThRYLq.js","assets/meta-Dd3xeam3.css","assets/decoder-text-BtVp3XXn.js","assets/visually-hidden-DWETt_x6.js","assets/visually-hidden-D_nB2OOm.css","assets/decoder-text-CjkT0xC2.css","assets/useScrollToHash-DJGQhTvy.js","assets/useWindowSize-BaU--EEd.js","assets/divider-CvNaYF5j.js","assets/divider-95tbulif.css","assets/preload-helper-D7HrI6pR.js","assets/index-BS0AcBqW.css"])))=>i.map(i=>d[i]);
import{r as n,j as e}from"./jsx-runtime-e9svsKL-.js";import{s as ce,a as le,b as de}from"./slice-app-C7u_2Rr3.js";import{S as $,F as pe,b as ue}from"./meta-1DdlTqBX.js";import{D as Q}from"./decoder-text-BtVp3XXn.js";import{u as me,g as N,T as L,H as F,c as C,t as G,B as ee,b as R,L as W}from"./heading-CC3zBnSN.js";import{a as H,u as ge,I as fe}from"./image-CyAsWJ2Q.js";import{V as T}from"./visually-hidden-DWETt_x6.js";import{u as ve}from"./useScrollToHash-DJGQhTvy.js";import{c as I}from"./config-B1ThRYLq.js";import{u as ne}from"./useWindowSize-BaU--EEd.js";import{p as xe,W as he,L as _e,f as ye,S as ze,X as we,Y as be,Z as Pe,M as je,c as Se,a as Ne,D as Ie,A as Le,r as Re}from"./three-DoHZmhMI.js";import{t as Te}from"./throttle-BgiUmwhn.js";import{u as U}from"./use-spring-C3qV9qVq.js";import{L as K}from"./components-DYXJCFuo.js";import{D as re}from"./divider-CvNaYF5j.js";import{_ as ke}from"./preload-helper-D7HrI6pR.js";function De(r,l,y){const u=n.useRef();n.useEffect(()=>{u.current=r}),n.useEffect(()=>{function d(){u.current()}{let i=setInterval(d,l);return()=>clearInterval(i)}},[l,y])}function Ee(r){const l=n.useRef();return n.useEffect(()=>{l.current=r},[r]),l.current}const k="/assets/karman-platform-MHQTIKNv.jpg",D="/assets/sela-platform-C9M9JuXw.jpg";function Me(){return()=>{}}function te(){return n.useSyncExternalStore(Me,()=>!0,()=>!1)}const Ce=`#define PHONG\r
\r
uniform vec3 diffuse;\r
uniform vec3 emissive;\r
uniform vec3 specular;\r
uniform float shininess;\r
uniform float opacity;\r
\r
uniform float time;\r
varying vec2 vUv;\r
varying vec3 newPosition;\r
varying float noise;\r
\r
#include <common>\r
#include <packing>\r
#include <dithering_pars_fragment>\r
#include <color_pars_fragment>\r
#include <uv_pars_fragment>\r
#include <map_pars_fragment>\r
#include <alphamap_pars_fragment>\r
#include <alphatest_pars_fragment>\r
#include <alphahash_pars_fragment>\r
#include <aomap_pars_fragment>\r
#include <lightmap_pars_fragment>\r
#include <emissivemap_pars_fragment>\r
#include <envmap_common_pars_fragment>\r
#include <envmap_pars_fragment>\r
#include <fog_pars_fragment>\r
#include <bsdfs>\r
#include <lights_pars_begin>\r
#include <normal_pars_fragment>\r
#include <lights_phong_pars_fragment>\r
#include <shadowmap_pars_fragment>\r
#include <bumpmap_pars_fragment>\r
#include <normalmap_pars_fragment>\r
#include <specularmap_pars_fragment>\r
#include <logdepthbuf_pars_fragment>\r
#include <clipping_planes_pars_fragment>\r
\r
void main() {\r
\r
	#include <clipping_planes_fragment>\r
\r
  vec3 color = vec3(vUv * (0.2 - 2.0 * noise), 1.0);\r
  vec3 finalColors = vec3(color.b * 1.5, color.r, color.r);\r
  vec4 diffuseColor = vec4(cos(finalColors * noise * 3.0), 1.0);\r
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\r
  vec3 totalEmissiveRadiance = emissive;\r
\r
	#include <logdepthbuf_fragment>\r
	#include <map_fragment>\r
	#include <color_fragment>\r
	#include <alphamap_fragment>\r
	#include <alphatest_fragment>\r
	#include <alphahash_fragment>\r
	#include <specularmap_fragment>\r
	#include <normal_fragment_begin>\r
	#include <normal_fragment_maps>\r
	#include <emissivemap_fragment>\r
\r
	// accumulation\r
	#include <lights_phong_fragment>\r
	#include <lights_fragment_begin>\r
	#include <lights_fragment_maps>\r
	#include <lights_fragment_end>\r
\r
	// modulation\r
	#include <aomap_fragment>\r
\r
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\r
\r
	#include <envmap_fragment>\r
	#include <opaque_fragment>\r
	#include <tonemapping_fragment>\r
	#include <colorspace_fragment>\r
	#include <fog_fragment>\r
	#include <premultiplied_alpha_fragment>\r
	#include <dithering_fragment>\r
\r
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);\r
}\r
`,$e=`#define PHONG\r
\r
//\r
// GLSL textureless classic 3D noise "cnoise",\r
// with an RSL-style periodic variant "pnoise".\r
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\r
// Version: 2011-10-11\r
//\r
// Many thanks to Ian McEwan of Ashima Arts for the\r
// ideas for permutation and gradient selection.\r
//\r
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\r
// Distributed under the MIT license. See LICENSE file.\r
// https://github.com/ashima/webgl-noise\r
//\r
vec3 mod289(vec3 x)\r
{\r
  return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}\r
\r
vec4 mod289(vec4 x)\r
{\r
  return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}\r
\r
vec4 permute(vec4 x)\r
{\r
  return mod289(((x*34.0)+1.0)*x);\r
}\r
\r
vec4 taylorInvSqrt(vec4 r)\r
{\r
  return 1.79284291400159 - 0.85373472095314 * r;\r
}\r
\r
vec3 fade(vec3 t) {\r
  return t*t*t*(t*(t*6.0-15.0)+10.0);\r
}\r
\r
// Classic Perlin noise\r
float cnoise(vec3 P)\r
{\r
  vec3 Pi0 = floor(P); // Integer part for indexing\r
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\r
  Pi0 = mod289(Pi0);\r
  Pi1 = mod289(Pi1);\r
  vec3 Pf0 = fract(P); // Fractional part for interpolation\r
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\r
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
  vec4 iz0 = Pi0.zzzz;\r
  vec4 iz1 = Pi1.zzzz;\r
\r
  vec4 ixy = permute(permute(ix) + iy);\r
  vec4 ixy0 = permute(ixy + iz0);\r
  vec4 ixy1 = permute(ixy + iz1);\r
\r
  vec4 gx0 = ixy0 * (1.0 / 7.0);\r
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\r
  gx0 = fract(gx0);\r
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
  vec4 sz0 = step(gz0, vec4(0.0));\r
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\r
\r
  vec4 gx1 = ixy1 * (1.0 / 7.0);\r
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\r
  gx1 = fract(gx1);\r
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
  vec4 sz1 = step(gz1, vec4(0.0));\r
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\r
\r
  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\r
\r
  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
  g000 *= norm0.x;\r
  g010 *= norm0.y;\r
  g100 *= norm0.z;\r
  g110 *= norm0.w;\r
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
  g001 *= norm1.x;\r
  g011 *= norm1.y;\r
  g101 *= norm1.z;\r
  g111 *= norm1.w;\r
\r
  float n000 = dot(g000, Pf0);\r
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
  float n111 = dot(g111, Pf1);\r
\r
  vec3 fade_xyz = fade(Pf0);\r
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\r
  return 2.2 * n_xyz;\r
}\r
\r
// Classic Perlin noise, periodic variant\r
float pnoise(vec3 P, vec3 rep)\r
{\r
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\r
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\r
  Pi0 = mod289(Pi0);\r
  Pi1 = mod289(Pi1);\r
  vec3 Pf0 = fract(P); // Fractional part for interpolation\r
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\r
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
  vec4 iz0 = Pi0.zzzz;\r
  vec4 iz1 = Pi1.zzzz;\r
\r
  vec4 ixy = permute(permute(ix) + iy);\r
  vec4 ixy0 = permute(ixy + iz0);\r
  vec4 ixy1 = permute(ixy + iz1);\r
\r
  vec4 gx0 = ixy0 * (1.0 / 7.0);\r
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\r
  gx0 = fract(gx0);\r
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
  vec4 sz0 = step(gz0, vec4(0.0));\r
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\r
\r
  vec4 gx1 = ixy1 * (1.0 / 7.0);\r
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\r
  gx1 = fract(gx1);\r
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
  vec4 sz1 = step(gz1, vec4(0.0));\r
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\r
\r
  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\r
\r
  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
  g000 *= norm0.x;\r
  g010 *= norm0.y;\r
  g100 *= norm0.z;\r
  g110 *= norm0.w;\r
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
  g001 *= norm1.x;\r
  g011 *= norm1.y;\r
  g101 *= norm1.z;\r
  g111 *= norm1.w;\r
\r
  float n000 = dot(g000, Pf0);\r
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
  float n111 = dot(g111, Pf1);\r
\r
  vec3 fade_xyz = fade(Pf0);\r
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\r
  return 2.2 * n_xyz;\r
}\r
\r
float turbulence(vec3 p) {\r
  float w = 100.0;\r
  float t = -.5;\r
  for (float f = 1.0 ; f <= 10.0 ; f++) {\r
    float power = pow(2.0, f);\r
    t += abs(pnoise(vec3(power * p), vec3(10.0, 10.0, 10.0)) / power);\r
  }\r
  return t;\r
}\r
\r
// START\r
uniform float time;\r
varying vec2 vUv;\r
varying float noise;\r
\r
varying vec3 vViewPosition;\r
\r
#include <common>\r
#include <batching_pars_vertex>\r
#include <uv_pars_vertex>\r
#include <displacementmap_pars_vertex>\r
#include <envmap_pars_vertex>\r
#include <color_pars_vertex>\r
#include <fog_pars_vertex>\r
#include <normal_pars_vertex>\r
#include <morphtarget_pars_vertex>\r
#include <skinning_pars_vertex>\r
#include <shadowmap_pars_vertex>\r
#include <logdepthbuf_pars_vertex>\r
#include <clipping_planes_pars_vertex>\r
\r
void main() {\r
\r
	#include <uv_vertex>\r
	#include <color_vertex>\r
	#include <morphcolor_vertex>\r
	#include <batching_vertex>\r
\r
	#include <beginnormal_vertex>\r
	#include <morphnormal_vertex>\r
	#include <skinbase_vertex>\r
	#include <skinnormal_vertex>\r
	#include <defaultnormal_vertex>\r
	#include <normal_vertex>\r
\r
	#include <begin_vertex>\r
	#include <morphtarget_vertex>\r
	#include <skinning_vertex>\r
	#include <displacementmap_vertex>\r
	#include <project_vertex>\r
	#include <logdepthbuf_vertex>\r
	#include <clipping_planes_vertex>\r
\r
	vViewPosition = - mvPosition.xyz;\r
\r
	#include <worldpos_vertex>\r
	#include <envmap_vertex>\r
	#include <shadowmap_vertex>\r
	#include <fog_vertex>\r
\r
  vUv = uv;\r
\r
  noise = turbulence(0.01 * position + normal + time * 0.8);\r
  vec3 displacement = vec3((position.x) * noise, position.y * noise, position.z * noise);\r
  gl_Position = projectionMatrix * modelViewMatrix * vec4((position + normal) + displacement, 1.0);\r
}\r
`,Fe="_canvas_1pqfq_1",He={canvas:Fe},X={stiffness:30,damping:20,mass:2},Ae=r=>{const{theme:l}=H(),y=n.useRef(Date.now()),u=n.useRef(),d=n.useRef(),i=n.useRef(),t=n.useRef(),p=n.useRef(),h=n.useRef(),z=n.useRef(),j=n.useRef(),S=n.useRef(),o=n.useRef(),f=me(),w=ge(u),m=ne(),g=U(0,X),P=U(0,X);return n.useEffect(()=>{const{innerWidth:a,innerHeight:c}=window;return d.current=new xe(.8,.5),i.current=new he({canvas:u.current,antialias:!1,alpha:!0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),i.current.setSize(a,c),i.current.setPixelRatio(1),i.current.outputColorSpace=_e,t.current=new ye(54,a/c,.1,100),t.current.position.z=52,p.current=new ze,j.current=new we,j.current.onBeforeCompile=v=>{z.current=be.merge([v.uniforms,{time:{type:"f",value:0}}]),v.uniforms=z.current,v.vertexShader=$e,v.fragmentShader=Ce},n.startTransition(()=>{S.current=new Pe(32,128,128),o.current=new je(S.current,j.current),o.current.position.z=0,o.current.modifier=Math.random(),p.current.add(o.current)}),()=>{Se(p.current),Ne(i.current)}},[]),n.useEffect(()=>{const a=new Ie(16777215,l==="light"?1.8:2),c=new Le(16777215,l==="light"?2.7:.4);return a.position.z=200,a.position.x=100,a.position.y=100,h.current=[a,c],h.current.forEach(v=>p.current.add(v)),()=>{Re(h.current)}},[l]),n.useEffect(()=>{const{width:a,height:c}=m,v=c+c*.3;i.current.setSize(a,v),t.current.aspect=a/v,t.current.updateProjectionMatrix(),f&&i.current.render(p.current,t.current),a<=N.mobile?(o.current.position.x=14,o.current.position.y=10):a<=N.tablet?(o.current.position.x=18,o.current.position.y=14):(o.current.position.x=22,o.current.position.y=16)},[f,m]),n.useEffect(()=>{const a=Te(c=>{const v={x:c.clientX/window.innerWidth,y:c.clientY/window.innerHeight};g.set(v.y/2),P.set(v.x/2)},100);return!f&&w&&window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}},[w,f,g,P]),n.useEffect(()=>{let a;const c=()=>{a=requestAnimationFrame(c),z.current!==void 0&&(z.current.time.value=5e-5*(Date.now()-y.current)),o.current.rotation.z+=.001,o.current.rotation.x=g.get(),o.current.rotation.y=P.get(),i.current.render(p.current,t.current)};return!f&&w?c():i.current.render(p.current,t.current),()=>{cancelAnimationFrame(a)}},[w,f,g,P]),e.jsx(L,{in:!0,timeout:3e3,nodeRef:u,children:({visible:a,nodeRef:c})=>e.jsx("canvas",{"aria-hidden":!0,className:He.canvas,"data-visible":a,ref:c,...r})})},Ve="_intro_vzhcp_1",Be="_text_vzhcp_17",Oe="_name_vzhcp_71",qe="_title_vzhcp_147",Ge="_row_vzhcp_155",We="_word_vzhcp_213",Ue="_line_vzhcp_365",Ke="_scrollIndicator_vzhcp_463",Xe="_mobileScrollIndicator_vzhcp_597",b={intro:Ve,text:Be,name:Oe,title:qe,row:Ge,word:We,line:Ue,scrollIndicator:Ke,mobileScrollIndicator:Xe};function Ye({id:r,sectionRef:l,scrollIndicatorHidden:y,...u}){const{theme:d}=H(),{disciplines:i}=I,[t,p]=n.useState(0),h=Ee(d),z=[i.slice(0,-1).join(", "),i.slice(-1)[0]].join(", and "),j=i.find((m,g)=>g===t),S=`${r}-title`,o=ve(),f=te();De(()=>{const m=(t+1)%i.length;p(m)},5e3,d),n.useEffect(()=>{h&&h!==d&&p(0)},[d,h]);const w=m=>{m.preventDefault(),o(m.currentTarget.href)};return e.jsx($,{className:b.intro,as:"section",ref:l,id:r,"aria-labelledby":S,tabIndex:-1,...u,children:e.jsx(L,{in:!0,timeout:3e3,children:({visible:m,status:g})=>e.jsxs(e.Fragment,{children:[f&&e.jsx(n.Suspense,{children:e.jsx(Ae,{})}),e.jsxs("header",{className:b.text,children:[e.jsx("h1",{className:b.name,"data-visible":m,id:S,children:e.jsx(Q,{text:I.name,delay:500})}),e.jsxs(F,{level:0,as:"h2",className:b.title,children:[e.jsx(T,{className:b.label,children:`${I.role} + ${z}`}),e.jsxs("span",{"aria-hidden":!0,className:b.row,children:[e.jsx("span",{className:b.word,"data-status":g,style:C({delay:G.base.durationXS}),children:I.role}),e.jsx("span",{className:b.line,"data-status":g})]}),e.jsx("div",{className:b.row,children:i.map(P=>e.jsx(L,{unmount:!0,in:P===j,timeout:{enter:3e3,exit:2e3},children:({status:a,nodeRef:c})=>e.jsx("span",{"aria-hidden":!0,ref:c,className:b.word,"data-plus":!0,"data-status":a,style:C({delay:G.base.durationL}),children:P})},P))})]})]}),e.jsx(K,{to:"/#project-1",className:b.scrollIndicator,"data-status":g,"data-hidden":y,onClick:w,children:e.jsx(T,{children:"Scroll to projects"})}),e.jsxs(K,{to:"/#project-1",className:b.mobileScrollIndicator,"data-status":g,"data-hidden":y,onClick:w,children:[e.jsx(T,{children:"Scroll to projects"}),e.jsx("svg",{"aria-hidden":!0,stroke:"currentColor",width:"43",height:"15",viewBox:"0 0 43 15",children:e.jsx("path",{d:"M1 1l20.5 12L42 1",strokeWidth:"2",fill:"none"})})]})]})},d)})}const Je="/assets/profile-placeholder-DOgU6wR2.jpg",Y="/assets/new-profile-TjPvo9z6.jpg",ie="/assets/katakana-CPFTGsJ1.svg",Ze="_profile_1pmvm_1",Qe="_content_1pmvm_73",en="_column_1pmvm_99",nn="_title_1pmvm_117",rn="_description_1pmvm_139",tn="_tag_1pmvm_159",an="_tagText_1pmvm_185",on="_image_1pmvm_227",sn="_svg_1pmvm_237",cn="_button_1pmvm_269",_={profile:Ze,content:Qe,column:en,title:nn,description:rn,tag:tn,tagText:an,image:on,svg:sn,button:cn},ln=({visible:r,titleId:l})=>e.jsxs(n.Fragment,{children:[e.jsx(F,{className:_.title,"data-visible":r,level:3,id:l,children:e.jsx(Q,{text:"Hi there",start:r,delay:500})}),e.jsx(R,{className:_.description,"data-visible":r,size:"l",as:"p",children:"I'm Nawaf, a .NET Developer based in Syria with a passion for building robust and scalable applications. My expertise lies in ASP.NET Core, Blazor, and Clean Architecture, where I focus on creating efficient solutions that drive business growth."}),e.jsx(R,{className:_.description,"data-visible":r,size:"l",as:"p",children:"With over two years of experience, I specialize in developing high-performance web applications using modern .NET technologies. I'm Microsoft-certified in C# and experienced in full-stack development, always striving to deliver clean, maintainable code following SOLID principles."}),e.jsx(R,{className:_.description,"data-visible":r,size:"l",as:"p",children:"When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects. Feel free to reach out if you'd like to discuss potential collaborations or opportunities."})]}),dn=({id:r,visible:l,sectionRef:y})=>{const[u,d]=n.useState(!1),i=`${r}-title`;return e.jsx($,{className:_.profile,onFocus:()=>d(!0),onBlur:()=>d(!1),as:"section",id:r,ref:y,"aria-labelledby":i,tabIndex:-1,children:e.jsx(L,{in:l||u,timeout:0,children:({visible:t,nodeRef:p})=>e.jsxs("div",{className:_.content,ref:p,children:[e.jsxs("div",{className:_.column,children:[e.jsx(ln,{visible:t,titleId:i}),e.jsx(ee,{secondary:!0,className:_.button,"data-visible":t,href:"/contact",icon:"send",children:"Send me a message"})]}),e.jsxs("div",{className:_.column,children:[e.jsxs("div",{className:_.tag,"aria-hidden":!0,children:[e.jsx(re,{notchWidth:"64px",notchHeight:"8px",collapsed:!t,collapseDelay:1e3}),e.jsx("div",{className:_.tagText,"data-visible":t,children:"About me"})]}),e.jsxs("div",{className:_.image,children:[e.jsx(fe,{reveal:!0,delay:100,placeholder:Je,srcSet:`${Y} 480w, ${Y} 960w`,width:960,height:1280,sizes:`(max-width: ${N.mobile}px) 100vw, 480px`,alt:"Profile picture of Nawaf Mahsoun"}),e.jsx("svg",{className:_.svg,"data-visible":t,viewBox:"0 0 136 766",children:e.jsx("use",{href:`${ie}#katakana-profile`})})]})]})]})})})},pn="/assets/iphone-11-DGIHa_Ph.glb",un="/assets/macbook-pro-DZn-FKKF.glb",J={SpringUp:"spring-up",LaptopOpen:"laptop-open"},E={phone:{url:pn,width:374,height:512,position:{x:0,y:0,z:0},animation:J.SpringUp},laptop:{url:un,width:1280,height:800,position:{x:0,y:0,z:0},animation:J.LaptopOpen}},mn="_summary_4rpvx_1",gn="_content_4rpvx_69",fn="_details_4rpvx_129",vn="_preview_4rpvx_155",xn="_model_4rpvx_175",hn="_loader_4rpvx_283",_n="_svg_4rpvx_301",yn="_index_4rpvx_383",zn="_indexNumber_4rpvx_401",wn="_title_4rpvx_443",bn="_description_4rpvx_481",Pn="_button_4rpvx_519",x={summary:mn,content:gn,details:fn,preview:vn,model:xn,loader:hn,svg:_n,index:yn,indexNumber:zn,title:wn,description:bn,button:Pn},Z=n.lazy(()=>ke(()=>import("./index-Cb5csYQG.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])).then(r=>({default:r.Model})));function M({id:r,visible:l,sectionRef:y,index:u,title:d,description:i,model:t,buttonText:p,buttonLink:h,alternate:z,...j}){const[S,o]=n.useState(!1),[f,w]=n.useState(!1),{theme:m}=H(),{width:g}=ne(),P=te(),a=`${r}-title`,c=g<=N.tablet,v=m==="light"?.7:1,ae=u<10?`0${u}`:u,A=`(max-width: ${N.tablet}px) 30vw, 20vw`,oe=`(max-width: ${N.tablet}px) 80vw, 40vw`;function V(){w(!0)}function B(s,se){return e.jsx("svg",{type:"project","data-visible":se&&f,"data-light":m==="light",style:C({opacity:v}),className:x.svg,"data-device":s,viewBox:"0 0 751 136",children:e.jsx("use",{href:`${ie}#katakana-project`})})}function O(s){return e.jsxs("div",{className:x.details,children:[e.jsxs("div",{"aria-hidden":!0,className:x.index,children:[e.jsx(re,{notchWidth:"64px",notchHeight:"8px",collapsed:!s,collapseDelay:1e3}),e.jsx("span",{className:x.indexNumber,"data-visible":s,children:ae})]}),e.jsx(F,{level:3,as:"h2",className:x.title,"data-visible":s,id:a,children:d}),e.jsx(R,{className:x.description,"data-visible":s,as:"p",children:i}),e.jsx("div",{className:x.button,"data-visible":s,children:e.jsx(ee,{iconHoverShift:!0,href:h,iconEnd:"arrow-right",children:p})})]})}function q(s){return e.jsxs("div",{className:x.preview,children:[t.type==="laptop"&&e.jsxs(e.Fragment,{children:[B("laptop",s),e.jsxs("div",{className:x.model,"data-device":"laptop",children:[!f&&e.jsx(W,{center:!0,className:x.loader,"data-visible":s}),P&&s&&e.jsx(n.Suspense,{children:e.jsx(Z,{alt:t.alt,cameraPosition:{x:0,y:0,z:8},showDelay:700,onLoad:V,show:s,models:[{...E.laptop,texture:{...t.textures[0],sizes:oe}}]})})]})]}),t.type==="phone"&&e.jsxs(e.Fragment,{children:[B("phone",s),e.jsxs("div",{className:x.model,"data-device":"phone",children:[!f&&e.jsx(W,{center:!0,className:x.loader,"data-visible":s}),P&&s&&e.jsx(n.Suspense,{children:e.jsx(Z,{alt:t.alt,cameraPosition:{x:0,y:0,z:11.5},showDelay:300,onLoad:V,show:s,models:[{...E.phone,position:{x:-.6,y:1.1,z:0},texture:{...t.textures[0],sizes:A}},{...E.phone,position:{x:.6,y:-.5,z:.3},texture:{...t.textures[1],sizes:A}}]})})]})]})]})}return e.jsx($,{className:x.summary,"data-alternate":z,"data-first":u===1,onFocus:()=>o(!0),onBlur:()=>o(!1),as:"section","aria-labelledby":a,ref:y,id:r,tabIndex:-1,...j,children:e.jsx("div",{className:x.content,children:e.jsx(L,{in:l||S,children:({visible:s})=>e.jsxs(e.Fragment,{children:[!z&&!c&&e.jsxs(e.Fragment,{children:[O(s),q(s)]}),(z||c)&&e.jsxs(e.Fragment,{children:[q(s),O(s)]})]})})})})}const jn="_home_pb8qs_1",Sn={home:jn},On=()=>[{rel:"prefetch",href:"/draco/draco_wasm_wrapper.js",as:"script",type:"text/javascript",importance:"low"},{rel:"prefetch",href:"/draco/draco_decoder.wasm",as:"fetch",type:"application/wasm",importance:"low"}],qn=()=>ue({title:"Designer + Developer",description:`Portfolio of ${I.name} — a .NET Developer specializing in ASP.NET Core, Blazor, and Clean Architecture, with expertise in building scalable web applications and robust software solutions.`}),Gn=()=>{const[r,l]=n.useState([]),[y,u]=n.useState(!1),d=n.useRef(),i=n.useRef(),t=n.useRef(),p=n.useRef(),h=n.useRef();return n.useEffect(()=>{const z=[d,i,t,p,h],j=new IntersectionObserver((o,f)=>{o.forEach(w=>{if(w.isIntersecting){const m=w.target;if(f.unobserve(m),r.includes(m))return;l(g=>[...g,m])}})},{rootMargin:"0px 0px -10% 0px",threshold:.1}),S=new IntersectionObserver(([o])=>{u(!o.isIntersecting)},{rootMargin:"-100% 0px 0px 0px"});return z.forEach(o=>{j.observe(o.current)}),S.observe(d.current),()=>{j.disconnect(),S.disconnect()}},[r]),e.jsxs("div",{className:Sn.home,children:[e.jsx(Ye,{id:"intro",sectionRef:d,scrollIndicatorHidden:y}),e.jsx(M,{id:"project-1",sectionRef:i,visible:r.includes(i.current),index:1,title:"Developed a comprehensive web platform for Karman Trading Company",description:"Developed a comprehensive web platform for Karman Trading Company, a leading enterprise in Korea and Dubai specializing in cars, spare parts, half cuts, and more.",buttonText:"View project",buttonLink:"http://karmanttrading.runasp.net/",model:{type:"laptop",alt:"Karman Trading Company platform",textures:[{srcSet:`${k} 1280w, ${k} 2560w`,placeholder:k}]}}),e.jsx(M,{id:"project-2",alternate:!0,sectionRef:t,visible:r.includes(t.current),index:2,title:"Developed a comprehensive web platform for Real Estate",description:"Design and development for a Real Estate website built in Blazor, enhancing property management and client engagement with modern web technologies.",buttonText:"View project",buttonLink:"http://sela.runasp.net/",model:{type:"laptop",alt:"Real Estate platform",textures:[{srcSet:`${D} 375w, ${D} 750w`,placeholder:D}]}}),e.jsx(M,{id:"project-3",sectionRef:p,visible:r.includes(p.current),index:3,title:"Biomedical image collaboration",description:"Increasing the amount of collaboration in Slice, an app for biomedical imaging",buttonText:"View project",buttonLink:"/projects/slice",model:{type:"laptop",alt:"Annotating a biomedical image in the Slice app",textures:[{srcSet:`${le} 800w, ${de} 1920w`,placeholder:ce}]}}),e.jsx(dn,{sectionRef:h,visible:r.includes(h.current),id:"details"}),e.jsx(pe,{})]})};export{Gn as H,J as M,On as l,qn as m};
