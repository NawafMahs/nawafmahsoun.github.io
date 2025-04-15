import { jsxs, jsx } from "react/jsx-runtime";
import { u as useInViewport, a as classes, T as Transition, m as msToNum, L as Loader, t as tokens, c as cssProps, n as numToMs } from "./server-build-DgqSKXzK.js";
import { useReducedMotion, useSpring } from "framer-motion";
import { useState, useRef, useEffect, startTransition, useCallback } from "react";
import { WebGLRenderer, SRGBColorSpace, ACESFilmicToneMapping, PerspectiveCamera, Scene, CubeTextureLoader, Group, PMREMGenerator, DirectionalLight, MathUtils } from "three";
import { r as removeLights, c as cleanScene, a as cleanRenderer, m as modelLoader } from "./three-CWl8dl3P.js";
import { t as throttle } from "./throttle-DfCjgS7U.js";
import "@remix-run/react";
import "isbot";
import "react-dom/server";
import "@remix-run/cloudflare";
import "@mdx-js/react";
import "@aws-sdk/client-ses";
import "three-stdlib";
const vknx = "/assets/volkihar-cube-nx-B7Zjde9E.jpg";
const vkny = "/assets/volkihar-cube-ny-K8Ej-0KC.jpg";
const vknz = "/assets/volkihar-cube-nz-CwSlGC5m.jpg";
const vkpx = "/assets/volkihar-cube-px-B6VuHL6s.jpg";
const vkpy = "/assets/volkihar-cube-py-nbSfCjcD.jpg";
const vkpz = "/assets/volkihar-cube-pz-Bzqv8d-T.jpg";
const armor$1 = "/assets/volkihar-knight-BtFNLzdG.glb";
const armor = "_armor_1r5zf_1";
const loader = "_loader_1r5zf_7";
const canvas = "_canvas_1r5zf_16";
const styles = {
  armor,
  loader,
  canvas
};
const rotationSpringConfig = {
  stiffness: 40,
  damping: 20,
  mass: 1.5
};
const Armor = ({
  showDelay = 0,
  cameraPosition = { x: 0, y: 0, z: 6 },
  className,
  alt,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loaderVisible, setLoaderVisible] = useState(false);
  const container = useRef();
  const canvas2 = useRef();
  const camera = useRef();
  const modelGroup = useRef();
  const scene = useRef();
  const renderer = useRef();
  const lights = useRef();
  const isInViewport = useInViewport(container, false, { threshold: 0.4 });
  const reduceMotion = useReducedMotion();
  const rotationX = useSpring(0, rotationSpringConfig);
  const rotationY = useSpring(0, rotationSpringConfig);
  useEffect(() => {
    const { clientWidth, clientHeight } = container.current;
    renderer.current = new WebGLRenderer({
      canvas: canvas2.current,
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
      failIfMajorPerformanceCaveat: true
    });
    renderer.current.setPixelRatio(2);
    renderer.current.setSize(clientWidth, clientHeight);
    renderer.current.outputColorSpace = SRGBColorSpace;
    renderer.current.toneMapping = ACESFilmicToneMapping;
    camera.current = new PerspectiveCamera(36, clientWidth / clientHeight, 0.1, 100);
    camera.current.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    scene.current = new Scene();
    const cubeTextureLoader = new CubeTextureLoader();
    modelGroup.current = new Group();
    scene.current.add(modelGroup.current);
    const pmremGenerator = new PMREMGenerator(renderer.current);
    pmremGenerator.compileCubemapShader();
    const keyLight = new DirectionalLight(16777215, 2.6);
    const fillLight = new DirectionalLight(16777215, 1);
    const backLight = new DirectionalLight(16777215, 1.3);
    keyLight.position.set(1, 0.1, 2);
    fillLight.position.set(-1, 0.1, 8);
    backLight.position.set(-2, 2, -3);
    lights.current = [backLight, keyLight, fillLight];
    lights.current.forEach((light) => scene.current.add(light));
    const load = async () => {
      const loadGltf = modelLoader.loadAsync(armor$1);
      const loadEnv = cubeTextureLoader.loadAsync([vknx, vkny, vknz, vkpx, vkpy, vkpz]);
      const [gltf, envTexture] = await Promise.all([loadGltf, loadEnv]);
      modelGroup.current.add(gltf.scene);
      gltf.scene.rotation.y = MathUtils.degToRad(180);
      gltf.scene.position.y = -1.6;
      const { texture } = pmremGenerator.fromCubemap(envTexture);
      scene.current.environment = texture;
      pmremGenerator.dispose();
      await renderer.current.initTexture(scene.current.environment);
      modelGroup.current.traverse(async (node) => {
        if (node.material) {
          await renderer.current.initTexture(node.material);
        }
      });
      setLoaded(true);
      renderFrame();
    };
    startTransition(() => {
      load();
      setTimeout(() => {
        setLoaderVisible(true);
      }, 1e3);
    });
    const unsubscribeX = rotationX.on("change", (value) => {
      modelGroup.current.rotation.x = value;
      renderFrame();
    });
    const unsubscribeY = rotationY.on("change", (value) => {
      modelGroup.current.rotation.y = value;
      renderFrame();
    });
    return () => {
      removeLights(lights.current);
      cleanScene(scene.current);
      cleanRenderer(renderer.current);
      unsubscribeX();
      unsubscribeY();
    };
  }, []);
  const renderFrame = useCallback(() => {
    renderer.current.render(scene.current, camera.current);
  }, []);
  useEffect(() => {
    const onMouseMove = throttle((event) => {
      const { innerWidth, innerHeight } = window;
      const position = {
        x: (event.clientX - innerWidth / 2) / innerWidth,
        y: (event.clientY - innerHeight / 2) / innerHeight
      };
      rotationX.set(position.y / 2);
      rotationY.set(position.x / 2);
    }, 100);
    if (isInViewport) {
      setVisible(true);
    }
    if (isInViewport && !reduceMotion) {
      window.addEventListener("mousemove", onMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY]);
  useEffect(() => {
    const handleResize = () => {
      if (!container.current) return;
      const { clientWidth, clientHeight } = container.current;
      renderer.current.setSize(clientWidth, clientHeight);
      camera.current.aspect = clientWidth / clientHeight;
      camera.current.updateProjectionMatrix();
      renderFrame();
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [renderFrame]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: classes(styles.armor, className),
      ref: container,
      role: "img",
      "aria-label": alt,
      ...rest,
      children: [
        /* @__PURE__ */ jsx(
          Transition,
          {
            unmount: true,
            in: !loaded && loaderVisible,
            timeout: msToNum(tokens.base.durationL),
            children: ({ visible: visible2 }) => /* @__PURE__ */ jsx(Loader, { className: styles.loader, "data-visible": visible2 })
          }
        ),
        /* @__PURE__ */ jsx(
          "canvas",
          {
            className: styles.canvas,
            ref: canvas2,
            "data-loaded": loaded && visible,
            style: cssProps({ delay: numToMs(showDelay) })
          }
        )
      ]
    }
  );
};
export {
  Armor
};
