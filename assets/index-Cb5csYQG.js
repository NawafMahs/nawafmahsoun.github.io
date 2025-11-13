import{r as e,j as V}from"./jsx-runtime-e9svsKL-.js";import{u as he,r as ge}from"./image-CyAsWJ2Q.js";import{W as xe,e as oe,f as ye,S as De,G as J,A as we,D as $,g as q,P as Ue,h as K,M as H,O as Me,i as Se,d as Q,r as Re,c as be,a as Te,t as ee,m as Ce,C as te,V as B,j as Pe}from"./three-DoHZmhMI.js";import{u as ie,c as Ae,a as ze,n as Le}from"./heading-CC3zBnSN.js";import{M as re}from"./route-DYY7vTgP.js";import{t as ke}from"./throttle-BgiUmwhn.js";import{u as ne}from"./use-spring-C3qV9qVq.js";import{a as X}from"./animate-QxQwXxDt.js";import"./components-DYXJCFuo.js";import"./slice-app-C7u_2Rr3.js";import"./meta-1DdlTqBX.js";import"./config-B1ThRYLq.js";import"./decoder-text-BtVp3XXn.js";import"./visually-hidden-DWETt_x6.js";import"./useScrollToHash-DJGQhTvy.js";import"./useWindowSize-BaU--EEd.js";import"./divider-CvNaYF5j.js";import"./preload-helper-D7HrI6pR.js";import"./index-CmfjIxA9.js";const Ee={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},_e={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},je="_model_9lrnh_3",Be="_canvas_9lrnh_21",ae={model:je,canvas:Be},se={Frame:"Frame",Screen:"Screen"},ce={stiffness:40,damping:20,mass:1.4,restSpeed:.001},at=({models:A,show:w=!0,showDelay:z=0,cameraPosition:h={x:0,y:0,z:8},style:L,className:k,onLoad:G,alt:U,...E})=>{const[M,F]=e.useState(!1),p=e.useRef(),l=e.useRef(),o=e.useRef(),g=e.useRef(),r=e.useRef(),t=e.useRef(),v=e.useRef(),f=e.useRef(),d=e.useRef(),x=e.useRef(),c=e.useRef(),u=e.useRef(),n=e.useRef(),m=e.useRef(),y=e.useRef(),a=e.useRef(),_=e.useRef(),O=he(p,!1,{threshold:.2}),N=ie(),S=ne(0,ce),R=ne(0,ce);e.useEffect(()=>{const{clientWidth:s,clientHeight:i}=p.current;t.current=new xe({canvas:l.current,alpha:!0,antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),t.current.setPixelRatio(2),t.current.setSize(s,i),t.current.outputColorSpace=oe,o.current=new ye(36,s/i,.1,100),o.current.position.set(h.x,h.y,h.z),r.current=new De,g.current=new J,r.current.add(g.current);const D=new we(16777215,1.2),T=new $(16777215,1.1),C=new $(16777215,.8);C.position.set(-6,2,2),T.position.set(.5,0,.866),y.current=[D,T,C],y.current.forEach(P=>r.current.add(P)),v.current=new J,r.current.add(v.current),v.current.position.set(0,0,-.8),v.current.rotateX(Math.PI/2);const j=512,Y=8,Z=8,ue=1.5,le=.8,ve=3;f.current=new q(j,j),f.current.texture.generateMipmaps=!1,d.current=new q(j,j),d.current.texture.generateMipmaps=!1;const I=new Ue(Y,Z).rotateX(Math.PI/2),fe=new K({map:f.current.texture,opacity:le,transparent:!0});m.current=new H(I,fe),m.current.scale.y=-1,v.current.add(m.current),a.current=new H(I),a.current.visible=!1,v.current.add(a.current);const me=new K({color:16777215,opacity:0,transparent:!0});_.current=new H(I,me),_.current.rotateX(Math.PI),_.current.position.y-=1e-5,v.current.add(_.current),x.current=new Me(-8/2,Y/2,Z/2,-8/2,0,ue),x.current.rotation.x=Math.PI/2,v.current.add(x.current),c.current=new Se,c.current.userData.darkness={value:ve},c.current.onBeforeCompile=P=>{P.uniforms.darkness=c.current.userData.darkness,P.fragmentShader=`
        uniform float darkness;
        ${P.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );")}
      `},c.current.depthTest=!1,c.current.depthWrite=!1,u.current=new Q(Ee),u.current.depthTest=!1,n.current=new Q(_e),n.current.depthTest=!1;const pe=S.on("change",b),de=R.on("change",b);return()=>{f.current.dispose(),d.current.dispose(),Re(y.current),be(r.current),Te(t.current),pe(),de()}},[]);const W=e.useCallback(s=>{a.current.visible=!0,a.current.material=u.current,a.current.material.uniforms.tDiffuse.value=f.current.texture,u.current.uniforms.h.value=s*(1/256),t.current.setRenderTarget(d.current),t.current.render(a.current,x.current),a.current.material=n.current,a.current.material.uniforms.tDiffuse.value=d.current.texture,n.current.uniforms.v.value=s*(1/256),t.current.setRenderTarget(f.current),t.current.render(a.current,x.current),a.current.visible=!1},[]),b=e.useCallback(()=>{const i=r.current.background;r.current.background=null,r.current.overrideMaterial=c.current,t.current.setRenderTarget(f.current),t.current.render(r.current,x.current),r.current.overrideMaterial=null,W(5),W(5*.4),t.current.setRenderTarget(null),r.current.background=i,g.current.rotation.x=S.get(),g.current.rotation.y=R.get(),t.current.render(r.current,o.current)},[W,S,R]);return e.useEffect(()=>{const s=ke(i=>{const{innerWidth:D,innerHeight:T}=window,C={x:(i.clientX-D/2)/D,y:(i.clientY-T/2)/T};R.set(C.x/2),S.set(C.y/2)},100);return O&&!N&&window.addEventListener("mousemove",s),()=>{window.removeEventListener("mousemove",s)}},[O,N,S,R]),e.useEffect(()=>{const s=()=>{if(!p.current)return;const{clientWidth:i,clientHeight:D}=p.current;t.current.setSize(i,D),o.current.aspect=i/D,o.current.updateProjectionMatrix(),b()};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[b]),V.jsxs("div",{className:ze(ae.model,k),"data-loaded":M,style:Ae({delay:Le(z)},L),ref:p,role:"img","aria-label":U,...E,children:[V.jsx("canvas",{className:ae.canvas,ref:l}),A.map((s,i)=>V.jsx(Ge,{renderer:t,modelGroup:g,show:w,showDelay:z,renderFrame:b,index:i,setLoaded:F,onLoad:G,model:s},JSON.stringify(s.position)))]})},Ge=({renderer:A,model:w,modelGroup:z,renderFrame:h,index:L,showDelay:k,setLoaded:G,onLoad:U,show:E})=>{const[M,F]=e.useState(),p=ie(),l=e.createRef();e.useEffect(()=>{const o=async(r,t)=>{r.colorSpace=oe,r.flipY=!1,r.anisotropy=A.current.capabilities.getMaxAnisotropy(),r.generateMipmaps=!1,await A.current.initTexture(r),t.material.color=new te(16777215),t.material.transparent=!0,t.material.map=r};F({start:async()=>{const{texture:r,position:t,url:v}=w;let f,d;const[x,c]=await Promise.all([await ee.loadAsync(r.placeholder),await Ce.loadAsync(v)]);z.current.add(c.scene),c.scene.traverse(async n=>{n.material&&(n.material.color=new te(2039845)),n.name===se.Screen&&(l.current=n.clone(),l.current.material=n.material.clone(),n.parent.add(l.current),l.current.material.opacity=1,l.current.position.z+=.001,o(x,l.current),f=async()=>{const m=await ge(r),y=await ee.loadAsync(m);await o(y,n),X(1,0,{onUpdate:a=>{l.current.material.opacity=a,h()}})})});const u=new B(t.x,t.y,t.z);return p&&c.scene.position.set(...u.toArray()),w.animation===re.SpringUp&&(d=()=>{const n=new B(u.x,u.y-1,u.z);c.scene.position.set(...n.toArray()),X(n.y,u.y,{type:"spring",delay:(300*L+k)/1e3,stiffness:60,damping:20,mass:1,restSpeed:1e-4,restDelta:1e-4,onUpdate:m=>{c.scene.position.y=m,h()}})}),w.animation===re.LaptopOpen&&(d=()=>{const n=c.scene.children.find(a=>a.name===se.Frame),m=new B(Pe.degToRad(90),0,0),y=new B(0,0,0);return c.scene.position.set(...u.toArray()),n.rotation.set(...m.toArray()),X(m.x,y.x,{type:"spring",delay:(300*L+k+300)/1e3,stiffness:80,damping:20,restSpeed:1e-4,restDelta:1e-4,onUpdate:a=>{n.rotation.x=a,h()}})}),{loadFullResTexture:f,playAnimation:d}}})},[]),e.useEffect(()=>{if(!M||!E)return;let o;const g=async()=>{const{loadFullResTexture:r,playAnimation:t}=await M.start();G(!0),U==null||U(),p||(o=t()),await r(),p&&h()};return e.startTransition(()=>{g()}),()=>{o==null||o.stop()}},[M,E])};export{at as Model};
