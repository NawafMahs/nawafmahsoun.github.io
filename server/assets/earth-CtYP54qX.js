import { jsx, jsxs } from "react/jsx-runtime";
import { u as useInViewport, b as useWindowSize, d as numToPx, e as media, a as classes, T as Transition, m as msToNum, S as Section, L as Loader, t as tokens, f as clamp } from "./server-build-BcyPTUiv.js";
import { useReducedMotion, useSpring } from "framer-motion";
import { memo, useState, useRef, useCallback, useEffect, startTransition, createContext, useContext } from "react";
import { OrbitControls, HDRCubeTextureLoader } from "three-stdlib";
import { Vector3, WebGLRenderer, SRGBColorSpace, ACESFilmicToneMapping, PerspectiveCamera, Scene, Clock, Raycaster, AmbientLight, DirectionalLight, PMREMGenerator, Sprite, Vector2, LoopOnce, EquirectangularReflectionMapping, LinearFilter, AnimationMixer } from "three";
import { r as removeLights, c as cleanScene, a as cleanRenderer, g as getChild, t as textureLoader, m as modelLoader } from "./three-CWl8dl3P.js";
import { t as throttle } from "./throttle-DfCjgS7U.js";
import "@remix-run/react";
import "isbot";
import "react-dom/server";
import "@remix-run/cloudflare";
import "@mdx-js/react";
import "@aws-sdk/client-ses";
const earthModel = "/assets/earth-DvZudj9K.glb";
const mwnx = "/assets/milkyway-nx-Ds_hwpSC.hdr";
const mwny = "/assets/milkyway-ny-BqhFvupA.hdr";
const mwnz = "/assets/milkyway-nz-D6l6T-pv.hdr";
const mwpx = "/assets/milkyway-px-BjIdbMt0.hdr";
const mwpy = "/assets/milkyway-py-BD6pEbZF.hdr";
const mwpz = "/assets/milkyway-pz-Bx3WFS88.hdr";
const milkywayBg = "/assets/milkyway-Vkpv7LbT.jpg";
const earth = "_earth_1awhs_1";
const loader = "_loader_1awhs_8";
const viewport = "_viewport_1awhs_22";
const canvas = "_canvas_1awhs_33";
const labels = "_labels_1awhs_52";
const label = "_label_1awhs_52";
const vignette = "_vignette_1awhs_82";
const sections = "_sections_1awhs_94";
const section = "_section_1awhs_94";
const styles = {
  earth,
  loader,
  viewport,
  canvas,
  labels,
  label,
  vignette,
  sections,
  section
};
const nullTarget = { x: 0, y: 0, z: 2 };
const interpolatePosition = (value, nextValue, percent) => value + percent * (nextValue - value);
const positionToString = (value) => Object.keys(value).map((key) => parseFloat(Math.round(value[key] * 100) / 100).toFixed(2)).join(", ");
const getPositionValues = (section2) => {
  if (!section2 || !section2.camera) return nullTarget;
  return {
    x: section2.camera[0],
    y: section2.camera[1],
    z: section2.camera[2]
  };
};
const isEqualPosition = (position1, position2) => {
  const round = (num = 0) => Math.round((num + Number.EPSILON) * 100) / 100;
  return round(position1 == null ? void 0 : position1.x) === round(position2 == null ? void 0 : position2.x) && round(position1 == null ? void 0 : position1.y) === round(position2 == null ? void 0 : position2.y) && round(position1 == null ? void 0 : position1.z) === round(position2 == null ? void 0 : position2.z);
};
const cameraSpringConfig = {
  stiffness: 80,
  damping: 40,
  mass: 2,
  restSpeed: 1e-3,
  restDelta: 1e-3
};
const chunkSpringConfig = {
  stiffness: 40,
  damping: 30,
  mass: 2,
  restSpeed: 1e-3,
  restDelta: 1e-3
};
const opacitySpringConfig = {
  stiffness: 40,
  damping: 30
};
const EarthContext = createContext({});
const Earth = ({
  position = [0, 0, 0],
  scale = 1,
  hideMeshes = [],
  labels: labels2 = [],
  className,
  children
}) => {
  const [loaded, setLoaded] = useState(false);
  const [grabbing, setGrabbing] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loaderVisible, setLoaderVisible] = useState(false);
  const sectionRefs = useRef([]);
  const container = useRef();
  const labelContainer = useRef();
  const canvas2 = useRef();
  const scene = useRef();
  const renderer = useRef();
  const camera = useRef();
  const clock = useRef();
  const mouse = useRef();
  const raycaster = useRef();
  const sceneModel = useRef();
  const animations = useRef();
  const mixer = useRef();
  const inViewport = useInViewport(canvas2);
  const animationFrame = useRef();
  const initCameraPosition = useRef(getPositionValues(sectionRefs.current[0]));
  const labelElements = useRef([]);
  const controls = useRef();
  const envMap = useRef();
  const contentAdded = useRef();
  const mounted = useRef();
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const reduceMotion = useReducedMotion();
  const cameraXSpring = useSpring(0, cameraSpringConfig);
  const cameraYSpring = useSpring(0, cameraSpringConfig);
  const cameraZSpring = useSpring(0, cameraSpringConfig);
  const chunkXSpring = useSpring(0, chunkSpringConfig);
  const chunkYSpring = useSpring(0, chunkSpringConfig);
  const chunkZSpring = useSpring(0, chunkSpringConfig);
  const opacitySpring = useSpring(0, opacitySpringConfig);
  const renderFrame = useCallback(() => {
    if (!inViewport) {
      cancelAnimationFrame(animationFrame.current);
      return;
    }
    animationFrame.current = requestAnimationFrame(renderFrame);
    const delta = clock.current.getDelta();
    mixer.current.update(delta);
    controls.current.update();
    renderer.current.render(scene.current, camera.current);
    labelElements.current.forEach((label2) => {
      const { element, position: position2, sprite } = label2;
      const vector = new Vector3(...position2);
      const meshDistance = camera.current.position.distanceTo(
        sceneModel.current.position
      );
      const spriteDistance = camera.current.position.distanceTo(sprite.position);
      const spriteBehindObject = spriteDistance > meshDistance;
      vector.project(camera.current);
      vector.x = Math.round((0.5 + vector.x / 2) * window.innerWidth);
      vector.y = Math.round((0.5 - vector.y / 2) * window.innerHeight);
      element.style.setProperty("--posX", numToPx(vector.x));
      element.style.setProperty("--posY", numToPx(vector.y));
      if (spriteBehindObject) {
        element.dataset.occluded = true;
      } else {
        element.dataset.occluded = false;
      }
    });
  }, [inViewport]);
  useEffect(() => {
    mounted.current = true;
    const { innerWidth, innerHeight } = window;
    renderer.current = new WebGLRenderer({
      canvas: canvas2.current,
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
      failIfMajorPerformanceCaveat: true
    });
    renderer.current.setPixelRatio(1);
    renderer.current.outputColorSpace = SRGBColorSpace;
    renderer.current.toneMapping = ACESFilmicToneMapping;
    camera.current = new PerspectiveCamera(54, innerWidth / innerHeight, 0.1, 100);
    camera.current.position.x = initCameraPosition.current.x;
    camera.current.position.y = initCameraPosition.current.y;
    camera.current.position.z = initCameraPosition.current.z;
    camera.current.lookAt(0, 0, 0);
    cameraXSpring.set(camera.current.position.x, false);
    cameraYSpring.set(camera.current.position.y, false);
    cameraZSpring.set(camera.current.position.z, false);
    scene.current = new Scene();
    clock.current = new Clock();
    raycaster.current = new Raycaster();
    const ambientLight = new AmbientLight(2236962, 0.05);
    const dirLight = new DirectionalLight(16777215, 1.5);
    dirLight.position.set(3, 0, 1);
    const lights = [ambientLight, dirLight];
    lights.forEach((light) => scene.current.add(light));
    controls.current = new OrbitControls(camera.current, canvas2.current);
    controls.current.enableZoom = false;
    controls.current.enablePan = false;
    controls.current.enableDamping = false;
    controls.current.rotateSpeed = 0.5;
    return () => {
      mounted.current = false;
      cancelAnimationFrame(animationFrame.current);
      removeLights(lights);
      cleanScene(scene.current);
      cleanRenderer(renderer.current);
    };
  }, []);
  useEffect(() => {
    const handleControlStart = () => {
      setGrabbing(true);
      cameraXSpring.stop();
      cameraYSpring.stop();
      cameraZSpring.stop();
    };
    const handleControlEnd = () => {
      cameraXSpring.set(camera.current.position.x, false);
      cameraYSpring.set(camera.current.position.y, false);
      cameraZSpring.set(camera.current.position.z, false);
      setGrabbing(false);
    };
    controls.current.addEventListener("start", handleControlStart);
    controls.current.addEventListener("end", handleControlEnd);
    return () => {
      controls.current.removeEventListener("start", handleControlStart);
      controls.current.removeEventListener("end", handleControlEnd);
    };
  }, [cameraXSpring, cameraYSpring, cameraZSpring]);
  useEffect(() => {
    if (!loaded) return;
    const chunk = getChild("Chunk", sceneModel.current);
    const atmosphere = getChild("Atmosphere", sceneModel.current);
    const handleCameraChange = (axis, value) => {
      camera.current.position[axis] = value;
    };
    const unsubscribeCameraX = cameraXSpring.on(
      "change",
      (value) => handleCameraChange("x", value)
    );
    const unsubscribeCameraY = cameraYSpring.on(
      "change",
      (value) => handleCameraChange("y", value)
    );
    const unsubscribeCameraZ = cameraZSpring.on(
      "change",
      (value) => handleCameraChange("z", value)
    );
    const handleChunkChange = (axis, value) => {
      chunk.position[axis] = value;
    };
    const unsubscribeChunkX = chunkXSpring.on(
      "change",
      (value) => handleChunkChange("x", value)
    );
    const unsubscribeChunkY = chunkYSpring.on(
      "change",
      (value) => handleChunkChange("y", value)
    );
    const unsubscribeChunkZ = chunkZSpring.on(
      "change",
      (value) => handleChunkChange("z", value)
    );
    const unsubscribeOpacity = opacitySpring.on("change", (value) => {
      atmosphere.material.opacity = value;
    });
    return () => {
      unsubscribeCameraX();
      unsubscribeCameraY();
      unsubscribeCameraZ();
      unsubscribeChunkX();
      unsubscribeChunkY();
      unsubscribeChunkZ();
      unsubscribeOpacity();
    };
  }, [
    cameraXSpring,
    cameraYSpring,
    cameraZSpring,
    chunkXSpring,
    chunkYSpring,
    chunkZSpring,
    loaded,
    opacitySpring
  ]);
  useEffect(() => {
    if (windowWidth <= media.tablet) {
      controls.current.enabled = false;
    }
  }, [windowWidth]);
  useEffect(() => {
    if (loaded) return;
    const hdrLoader = new HDRCubeTextureLoader();
    const pmremGenerator = new PMREMGenerator(renderer.current);
    pmremGenerator.compileCubemapShader();
    const loadModel = async () => {
      const gltf = await modelLoader.loadAsync(earthModel);
      sceneModel.current = gltf.scene;
      animations.current = gltf.animations;
      mixer.current = new AnimationMixer(sceneModel.current);
      mixer.current.timeScale = 0.1;
      sceneModel.current.traverse(async (child) => {
        const { material, name } = child;
        if (name === "Atmosphere") {
          material.alphaMap = material.map;
        }
        if (material) {
          await renderer.current.initTexture(material);
        }
      });
      sceneModel.current.position.x = position[0];
      sceneModel.current.position.y = position[1];
      sceneModel.current.position.z = position[2];
      sceneModel.current.scale.x = scale;
      sceneModel.current.scale.y = scale;
      sceneModel.current.scale.z = scale;
    };
    const loadEnv = async () => {
      const hdrTexture = await hdrLoader.loadAsync([mwnx, mwny, mwnz, mwpx, mwpy, mwpz]);
      hdrTexture.magFilter = LinearFilter;
      envMap.current = pmremGenerator.fromCubemap(hdrTexture);
      pmremGenerator.dispose();
      await renderer.current.initTexture(envMap.current.texture);
    };
    const loadBackground = async () => {
      const backgroundTexture = await textureLoader.loadAsync(milkywayBg);
      backgroundTexture.mapping = EquirectangularReflectionMapping;
      backgroundTexture.colorSpace = SRGBColorSpace;
      scene.current.background = backgroundTexture;
      await renderer.current.initTexture(backgroundTexture);
    };
    const handleLoad = async () => {
      await Promise.all([loadBackground(), loadEnv(), loadModel()]);
      sceneModel.current.traverse(({ material }) => {
        if (material) {
          material.envMap = envMap.current.texture;
          material.needsUpdate = true;
        }
      });
      if (mounted.current) {
        setLoaded(true);
      }
    };
    startTransition(() => {
      handleLoad();
      setTimeout(() => {
        setLoaderVisible(true);
      }, 1e3);
    });
  }, [loaded, position, scale]);
  useEffect(() => {
    if (loaded && !contentAdded.current) {
      scene.current.add(sceneModel.current);
      contentAdded.current = true;
    }
    if (loaded && inViewport) {
      setVisible(true);
      renderFrame();
    }
    return () => {
      cancelAnimationFrame(animationFrame.current);
    };
  }, [renderFrame, inViewport, loaded]);
  useEffect(() => {
    if (loaded) {
      labelContainer.current.innerHTML = "";
      labelElements.current = labels2.map((label2) => {
        const element = document.createElement("div");
        element.classList.add(styles.label);
        element.dataset.hidden = true;
        element.style.setProperty("--delay", `${label2.delay || 0}ms`);
        element.textContent = label2.text;
        labelContainer.current.appendChild(element);
        const sprite = new Sprite();
        sprite.position.set(...label2.position);
        sprite.scale.set(60, 60, 1);
        return { element, ...label2, sprite };
      });
    }
  }, [labels2, loaded]);
  useEffect(() => {
    renderer.current.setSize(windowWidth, windowHeight);
    camera.current.aspect = windowWidth / windowHeight;
    camera.current.updateProjectionMatrix();
  }, [windowWidth, windowHeight]);
  useEffect(() => {
    const currentCanvas = canvas2.current;
    const handleMouseUp = (event) => {
      const { innerWidth, innerHeight } = window;
      const cameraPosition = positionToString(camera.current.position);
      console.info({ cameraPosition });
      mouse.current = new Vector2(
        event.clientX / innerWidth * 2 - 1,
        -(event.clientY / innerHeight) * 2 + 1
      );
      raycaster.current.setFromCamera(mouse.current, camera.current);
      const intersects = raycaster.current.intersectObjects(scene.current.children, true);
      if (intersects.length > 0) {
        const clickPosition = positionToString(intersects[0].point);
        console.info({ clickPosition });
      }
    };
    if (process.env.NODE_ENV === "development") {
      currentCanvas.addEventListener("click", handleMouseUp);
    }
    return () => {
      currentCanvas.removeEventListener("click", handleMouseUp);
    };
  }, []);
  const handleScroll = useCallback(() => {
    if (!container.current) return;
    const { offsetTop } = container.current;
    const { innerHeight } = window;
    const currentScrollY = window.scrollY - offsetTop;
    let prevTarget;
    const updateMeshes = (index) => {
      const visibleMeshes = sectionRefs.current[index].meshes;
      sceneModel.current.traverse((child) => {
        const { name } = child;
        const chunk = getChild("Chunk", sceneModel.current);
        const isVisible = visibleMeshes == null ? void 0 : visibleMeshes.includes(name);
        const isHidden = hideMeshes == null ? void 0 : hideMeshes.includes(name);
        if (isVisible) {
          if (name === "Atmosphere") {
            child.visible = true;
            opacitySpring.set(1);
          } else if (name === "Chunk") {
            const chunkTarget = new Vector3(-0.4, 0.4, 0.4);
            child.visible = true;
            if (reduceMotion) {
              child.position.set(...chunkTarget.toArray());
            } else {
              chunkXSpring.set(chunkTarget.x);
              chunkYSpring.set(chunkTarget.y);
              chunkZSpring.set(chunkTarget.z);
            }
          } else if (name === "EarthFull" && chunk.visible) {
            child.visible = false;
          } else {
            child.visible = true;
          }
        } else if (isHidden && !isVisible) {
          if (name === "Atmosphere") {
            opacitySpring.set(0);
          } else if (name === "Chunk") {
            const chunkTarget = new Vector3(0, 0, 0);
            if (isEqualPosition(chunkTarget, chunk.position)) {
              child.visible = false;
            }
            chunkXSpring.set(chunkTarget.x);
            chunkYSpring.set(chunkTarget.y);
            chunkZSpring.set(chunkTarget.z);
          } else if (name === "EarthPartial" && chunk.visible) {
            child.visible = true;
          } else {
            child.visible = false;
          }
        }
      });
    };
    const updateAnimation = (index) => {
      const sectionAnimations = sectionRefs.current[index].animations;
      if (reduceMotion) return;
      animations.current.forEach((clip, index2) => {
        if (!sectionAnimations.find((section2) => section2.includes(index2.toString()))) {
          const animation = mixer.current.clipAction(clip);
          animation.reset().stop();
        }
      });
      if (animations.current.length && sectionRefs.current[index].animations) {
        sectionAnimations.forEach((animItem) => {
          const values = animItem.split(":");
          const clip = animations.current[Number(values[0])];
          const animation = mixer.current.clipAction(clip);
          if (!values[1] || values[1] !== "loop") {
            animation.clampWhenFinished = true;
            animation.loop = LoopOnce;
          }
          animation.play();
        });
      }
    };
    const updateLabels = (index) => {
      labelElements.current.forEach((label2) => {
        if (label2.hidden) {
          label2.element.dataset.hidden = true;
          label2.element.setAttribute("aria-hidden", true);
        }
      });
      const sectionLabels = sectionRefs.current[index].labels;
      sectionLabels.forEach((label2) => {
        const matches = labelElements.current.filter((item) => item.text === label2);
        matches.forEach((match) => {
          match.element.dataset.hidden = false;
          match.element.setAttribute("aria-hidden", false);
        });
      });
    };
    const update = () => {
      const sectionCount = sectionRefs.current.length - 1;
      const absoluteSection = Math.floor(currentScrollY / innerHeight);
      const currentSectionIndex = clamp(absoluteSection, 0, sectionCount);
      const currentSection = sectionRefs.current[currentSectionIndex];
      const nextSection = sectionRefs.current[currentSectionIndex + 1];
      const currentTarget = getPositionValues(currentSection) || nullTarget;
      const nextTarget = getPositionValues(nextSection) || nullTarget;
      const sectionScrolled = (currentScrollY - innerHeight * currentSectionIndex) / innerHeight;
      const scrollPercent = clamp(sectionScrolled, 0, 1);
      const currentX = interpolatePosition(currentTarget.x, nextTarget.x, scrollPercent);
      const currentY = interpolatePosition(currentTarget.y, nextTarget.y, scrollPercent);
      const currentZ = interpolatePosition(currentTarget.z, nextTarget.z, scrollPercent);
      if (prevTarget !== currentTarget && sectionRefs.current.length && currentSection) {
        updateMeshes(currentSectionIndex);
        updateAnimation(currentSectionIndex);
        updateLabels(currentSectionIndex);
      }
      prevTarget = currentTarget;
      if (grabbing) return;
      if (reduceMotion) {
        camera.current.position.set(currentX, currentY, currentZ);
        return;
      }
      cameraXSpring.set(currentX);
      cameraYSpring.set(currentY);
      cameraZSpring.set(currentZ);
    };
    requestAnimationFrame(update);
  }, [
    cameraXSpring,
    cameraYSpring,
    cameraZSpring,
    chunkXSpring,
    chunkYSpring,
    chunkZSpring,
    grabbing,
    hideMeshes,
    opacitySpring,
    reduceMotion
  ]);
  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 100);
    if (loaded && inViewport) {
      window.addEventListener("scroll", throttledScroll);
    }
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [handleScroll, inViewport, loaded, opacitySpring]);
  const registerSection = useCallback((section2) => {
    sectionRefs.current = [...sectionRefs.current, section2];
  }, []);
  const unregisterSection = useCallback((section2) => {
    sectionRefs.current = sectionRefs.current.filter((item) => item !== section2);
  }, []);
  return /* @__PURE__ */ jsx(EarthContext.Provider, { value: { registerSection, unregisterSection }, children: /* @__PURE__ */ jsxs("div", { className: classes(styles.earth, className), ref: container, children: [
    /* @__PURE__ */ jsxs("div", { className: styles.viewport, children: [
      /* @__PURE__ */ jsx(
        "canvas",
        {
          className: styles.canvas,
          "data-visible": loaded && visible,
          "data-grabbing": grabbing,
          ref: canvas2
        }
      ),
      /* @__PURE__ */ jsx("div", { className: styles.labels, "aria-live": "polite", ref: labelContainer }),
      /* @__PURE__ */ jsx("div", { className: styles.vignette })
    ] }),
    /* @__PURE__ */ jsx("div", { className: styles.sections, children }),
    /* @__PURE__ */ jsx(
      Transition,
      {
        unmount: true,
        in: !loaded && loaderVisible,
        timeout: msToNum(tokens.base.durationL),
        children: (visible2) => /* @__PURE__ */ jsx(Section, { className: styles.loader, "data-visible": visible2, children: /* @__PURE__ */ jsx(Loader, {}) })
      }
    )
  ] }) });
};
const EarthSection = memo(
  ({
    children,
    scrim,
    scrimReverse,
    className,
    camera = [0, 0, 0],
    animations = [],
    meshes = [],
    labels: labels2 = []
  }) => {
    const { registerSection, unregisterSection } = useContext(EarthContext);
    const sectionRef = useRef();
    const stringifiedDeps = JSON.stringify(animations) + JSON.stringify(camera) + JSON.stringify(labels2) + JSON.stringify(meshes);
    useEffect(() => {
      const section2 = {
        camera,
        animations,
        meshes,
        labels: labels2,
        sectionRef
      };
      registerSection(section2);
      return () => {
        unregisterSection(section2);
      };
    }, [stringifiedDeps, registerSection, unregisterSection]);
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: classes(styles.section, className),
        "data-scrim": scrim,
        "data-scrim-reverse": scrimReverse,
        ref: sectionRef,
        children
      }
    );
  }
);
export {
  Earth,
  EarthSection
};
