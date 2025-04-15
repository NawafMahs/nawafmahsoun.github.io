import { jsxs, jsx } from "react/jsx-runtime";
import { useReducedMotion, animate } from "framer-motion";
import { u as useInViewport, c as cssProps, r as resolveSrcFromSrcSet } from "./server-build-BcyPTUiv.js";
import { useState, useRef, useEffect, useCallback } from "react";
import { WebGLRenderer, OrthographicCamera, Scene, Color, LinearSRGBColorSpace, LinearFilter, ShaderMaterial, PlaneGeometry, Mesh } from "three";
import { c as cleanScene, a as cleanRenderer, t as textureLoader } from "./three-CWl8dl3P.js";
import "@remix-run/react";
import "isbot";
import "react-dom/server";
import "@remix-run/cloudflare";
import "@mdx-js/react";
import "@aws-sdk/client-ses";
import "three-stdlib";
const carousel = "_carousel_156nm_2";
const content = "_content_156nm_6";
const imageWrapper = "_imageWrapper_156nm_12";
const canvasWrapper = "_canvasWrapper_156nm_24";
const canvas = "_canvas_156nm_24";
const placeholder = "_placeholder_156nm_37";
const button = "_button_156nm_52";
const nav = "_nav_156nm_108";
const navButton = "_navButton_156nm_115";
const styles = {
  carousel,
  content,
  imageWrapper,
  canvasWrapper,
  canvas,
  placeholder,
  button,
  nav,
  navButton
};
const fragment = "varying vec2 vUv;\nuniform sampler2D currentImage;\nuniform sampler2D nextImage;\nuniform float dispFactor;\nuniform float direction;\nuniform bool reduceMotion;\n\nvoid main() {\n  if (reduceMotion) {\n    // Simple crossfade\n    vec4 _currentImage = texture2D(currentImage, vUv);\n    vec4 _nextImage = texture2D(nextImage, vUv);\n    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\n    gl_FragColor = finalTexture;\n  } else {\n    // Liquid distortion effect\n    vec2 uv = vUv;\n    vec4 _currentImage;\n    vec4 _nextImage;\n    float intensity = 0.6;\n\n    vec4 orig1 = texture2D(currentImage, uv);\n    vec4 orig2 = texture2D(nextImage, uv);\n\n    vec2 distortedPosition = vec2(\n      uv.x + direction * (dispFactor * (orig2.r * intensity)),\n      uv.y + direction * (dispFactor * (orig2 * intensity))\n    );\n\n    vec2 distortedPosition2 = vec2(\n      uv.x - direction * ((1.0 - dispFactor) * (orig1.r * intensity)),\n      uv.y - direction * ((1.0 - dispFactor) * (orig1 * intensity))\n    );\n\n    _currentImage = texture2D(currentImage, distortedPosition);\n    _nextImage = texture2D(nextImage, distortedPosition2);\n\n    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\n    gl_FragColor = finalTexture;\n  }\n}\n";
const vertex = "varying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n";
function determineIndex(imageIndex, index, images, direction) {
  if (index !== null) return index;
  const length = images.length;
  const prevIndex = (imageIndex - 1 + length) % length;
  const nextIndex = (imageIndex + 1) % length;
  const finalIndex = direction > 0 ? nextIndex : prevIndex;
  return finalIndex;
}
const Carousel = ({ width, height, images, placeholder: placeholder2, ...rest }) => {
  const [dragging, setDragging] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [textures, setTextures] = useState();
  const [canvasRect, setCanvasRect] = useState();
  const canvas2 = useRef();
  const imagePlane = useRef();
  const geometry = useRef();
  const material = useRef();
  const scene = useRef();
  const camera = useRef();
  const renderer = useRef();
  const animating = useRef(false);
  const swipeDirection = useRef();
  const lastSwipePosition = useRef();
  const scheduledAnimationFrame = useRef();
  const reduceMotion = useReducedMotion();
  const inViewport = useInViewport(canvas2, true);
  const placeholderRef = useRef();
  const initSwipeX = useRef();
  const currentImageAlt = `Slide ${imageIndex + 1} of ${images.length}. ${images[imageIndex].alt}`;
  useEffect(() => {
    if (dragging) {
      document.body.style.cursor = "grabbing";
    }
    return () => {
      document.body.style.cursor = "";
    };
  }, [dragging]);
  useEffect(() => {
    const cameraOptions = [width / -2, width / 2, height / 2, height / -2, 1, 1e3];
    renderer.current = new WebGLRenderer({
      canvas: canvas2.current,
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
      failIfMajorPerformanceCaveat: true
    });
    camera.current = new OrthographicCamera(...cameraOptions);
    scene.current = new Scene();
    renderer.current.setPixelRatio(2);
    renderer.current.setClearColor(1118481, 1);
    renderer.current.setSize(width, height);
    renderer.current.domElement.style.width = "100%";
    renderer.current.domElement.style.height = "auto";
    scene.current.background = new Color(1118481);
    camera.current.position.z = 1;
    return () => {
      animating.current = false;
      cleanScene(scene.current);
      cleanRenderer(renderer.current);
    };
  }, [height, width]);
  useEffect(() => {
    let mounted = true;
    const loadImages = async () => {
      const anisotropy = renderer.current.capabilities.getMaxAnisotropy();
      const texturePromises = images.map(async (image) => {
        const imageSrc = image.srcSet ? await resolveSrcFromSrcSet(image) : image.src;
        const imageTexture = await textureLoader.loadAsync(imageSrc);
        await renderer.current.initTexture(imageTexture);
        imageTexture.colorSpace = LinearSRGBColorSpace;
        imageTexture.minFilter = LinearFilter;
        imageTexture.magFilter = LinearFilter;
        imageTexture.anisotropy = anisotropy;
        imageTexture.generateMipmaps = false;
        return imageTexture;
      });
      const textures2 = await Promise.all(texturePromises);
      if (!mounted) return;
      material.current = new ShaderMaterial({
        uniforms: {
          dispFactor: { type: "f", value: 0 },
          direction: { type: "f", value: 1 },
          currentImage: { type: "t", value: textures2[0] },
          nextImage: { type: "t", value: textures2[1] },
          reduceMotion: { type: "b", value: reduceMotion }
        },
        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: false,
        opacity: 1
      });
      geometry.current = new PlaneGeometry(width, height, 1);
      imagePlane.current = new Mesh(geometry.current, material.current);
      imagePlane.current.position.set(0, 0, 0);
      scene.current.add(imagePlane.current);
      setLoaded(true);
      setTextures(textures2);
      requestAnimationFrame(() => {
        renderer.current.render(scene.current, camera.current);
      });
    };
    if (inViewport && !loaded) {
      loadImages();
    }
    return () => {
      mounted = false;
    };
  }, [height, images, inViewport, loaded, reduceMotion, width]);
  const goToIndex = useCallback(
    ({ index, direction = 1 }) => {
      if (!textures) return;
      setImageIndex(index);
      const { uniforms } = material.current;
      uniforms.nextImage.value = textures[index];
      uniforms.direction.value = direction;
      const onComplete = () => {
        uniforms.currentImage.value = textures[index];
        uniforms.dispFactor.value = 0;
        animating.current = false;
      };
      if (uniforms.dispFactor.value !== 1) {
        animating.current = true;
        animate(uniforms.dispFactor.value, 1, {
          type: "spring",
          stiffness: 100,
          damping: 20,
          restSpeed: 1e-3,
          restDelta: 1e-3,
          onUpdate: (value) => {
            uniforms.dispFactor.value = value;
          },
          onComplete
        });
      }
    },
    [textures]
  );
  const navigate = useCallback(
    ({ direction, index = null, ...rest2 }) => {
      if (!loaded) return;
      if (animating.current) {
        cancelAnimationFrame(scheduledAnimationFrame.current);
        scheduledAnimationFrame.current = requestAnimationFrame(
          () => navigate({ direction, index, ...rest2 })
        );
        return;
      }
      const finalIndex = determineIndex(imageIndex, index, textures, direction);
      goToIndex({ index: finalIndex, direction, ...rest2 });
    },
    [goToIndex, imageIndex, loaded, textures]
  );
  const onNavClick = useCallback(
    (index) => {
      if (index === imageIndex) return;
      const direction = index > imageIndex ? 1 : -1;
      navigate({ direction, index });
    },
    [imageIndex, navigate]
  );
  useEffect(() => {
    const handleResize = () => {
      const rect = canvas2.current.getBoundingClientRect();
      setCanvasRect(rect);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    let animation;
    const animate2 = () => {
      animation = requestAnimationFrame(animate2);
      if (animating.current) {
        renderer.current.render(scene.current, camera.current);
      }
    };
    animation = requestAnimationFrame(animate2);
    return () => {
      cancelAnimationFrame(animation);
    };
  }, []);
  useEffect(() => {
    if (placeholder2) {
      const purgePlaceholder = () => {
        setShowPlaceholder(false);
      };
      const placeholderElement = placeholderRef.current;
      placeholderElement.addEventListener("transitionend", purgePlaceholder);
      return () => {
        if (placeholderElement) {
          placeholderElement.removeEventListener("transitionend", purgePlaceholder);
        }
      };
    }
  }, [placeholder2]);
  const onSwipeMove = useCallback(
    (x) => {
      if (animating.current || !material.current || !textures) return;
      lastSwipePosition.current = x;
      const absoluteX = Math.abs(x);
      const containerWidth = canvasRect.width;
      swipeDirection.current = x > 0 ? -1 : 1;
      const swipePercentage = 1 - (absoluteX - containerWidth) / containerWidth * -1;
      const nextIndex = determineIndex(imageIndex, null, images, swipeDirection.current);
      const uniforms = material.current.uniforms;
      const displacementClamp = Math.min(Math.max(swipePercentage, 0), 1);
      uniforms.currentImage.value = textures[imageIndex];
      uniforms.nextImage.value = textures[nextIndex];
      uniforms.direction.value = swipeDirection.current;
      uniforms.dispFactor.value = displacementClamp;
      requestAnimationFrame(() => {
        renderer.current.render(scene.current, camera.current);
      });
    },
    [canvasRect, imageIndex, images, textures]
  );
  const onSwipeEnd = useCallback(() => {
    if (!material.current) return;
    const uniforms = material.current.uniforms;
    const duration = (1 - uniforms.dispFactor.value) * 1e3;
    const position = Math.abs(lastSwipePosition.current);
    const minSwipeDistance = canvasRect.width * 0.2;
    lastSwipePosition.current = 0;
    if (animating.current) return;
    if (position === 0 || !position) return;
    if (position > minSwipeDistance) {
      navigate({
        duration,
        direction: swipeDirection.current
      });
    } else {
      uniforms.currentImage.value = uniforms.nextImage.value;
      uniforms.nextImage.value = uniforms.currentImage.value;
      uniforms.dispFactor.value = 1 - uniforms.dispFactor.value;
      navigate({
        direction: swipeDirection.current * -1,
        index: imageIndex
      });
    }
  }, [canvasRect, imageIndex, navigate]);
  const handlePointerMove = useCallback(
    (event) => {
      onSwipeMove(event.clientX - initSwipeX.current);
    },
    [onSwipeMove]
  );
  const handlePointerUp = useCallback(() => {
    setDragging(false);
    onSwipeEnd();
    document.removeEventListener("pointerup", handlePointerUp);
    document.removeEventListener("pointermove", handlePointerMove);
  }, [handlePointerMove, onSwipeEnd]);
  const handlePointerDown = useCallback(
    (event) => {
      initSwipeX.current = event.clientX;
      setDragging(true);
      document.addEventListener("pointermove", handlePointerMove);
      document.addEventListener("pointerup", handlePointerUp);
    },
    [handlePointerMove, handlePointerUp]
  );
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowRight":
        navigate({ direction: 1 });
        break;
      case "ArrowLeft":
        navigate({ direction: -1 });
        break;
    }
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ jsxs("div", { className: styles.carousel, onKeyDown: handleKeyDown, ...rest, children: [
      /* @__PURE__ */ jsxs("div", { className: styles.content, children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: styles.imageWrapper,
            "data-dragging": dragging,
            onPointerDown: handlePointerDown,
            style: cssProps({ aspectRatio: `${width} / ${height}` }),
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  "aria-atomic": true,
                  className: styles.canvasWrapper,
                  "aria-live": "polite",
                  "aria-label": currentImageAlt,
                  role: "img",
                  children: /* @__PURE__ */ jsx("canvas", { "aria-hidden": true, className: styles.canvas, ref: canvas2 })
                }
              ),
              showPlaceholder && placeholder2 && /* @__PURE__ */ jsx(
                "img",
                {
                  "aria-hidden": true,
                  className: styles.placeholder,
                  "data-loaded": loaded && !!textures,
                  src: placeholder2,
                  ref: placeholderRef,
                  alt: "",
                  role: "presentation"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: styles.button,
            "data-prev": true,
            "aria-label": "Previous slide",
            onClick: () => navigate({ direction: -1 }),
            children: /* @__PURE__ */ jsx(ArrowLeft, {})
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: styles.button,
            "data-next": true,
            "aria-label": "Next slide",
            onClick: () => navigate({ direction: 1 }),
            children: /* @__PURE__ */ jsx(ArrowRight, {})
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: styles.nav, children: images.map((image, index) => /* @__PURE__ */ jsx(
        "button",
        {
          className: styles.navButton,
          onClick: () => onNavClick(index),
          "aria-label": `Jump to slide ${index + 1}`,
          "aria-pressed": index === imageIndex
        },
        image.alt
      )) })
    ] })
  );
};
function ArrowLeft() {
  return /* @__PURE__ */ jsx("svg", { fill: "currentColor", width: "18", height: "42", viewBox: "0 0 18 42", children: /* @__PURE__ */ jsx("path", { d: "M18.03 1.375L16.47.125-.031 20.75l16.5 20.625 1.562-1.25L2.53 20.75z" }) });
}
function ArrowRight() {
  return /* @__PURE__ */ jsx("svg", { fill: "currentColor", width: "18", height: "42", viewBox: "0 0 18 42", children: /* @__PURE__ */ jsx("path", { d: "M-.03 1.375L1.53.125l16.5 20.625-16.5 20.625-1.562-1.25 15.5-19.375z" }) });
}
export {
  Carousel
};
