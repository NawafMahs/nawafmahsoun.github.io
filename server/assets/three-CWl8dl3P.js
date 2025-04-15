import { TextureLoader, Cache } from "three";
import { GLTFLoader, DRACOLoader } from "three-stdlib";
Cache.enabled = true;
const dracoLoader = new DRACOLoader();
const gltfLoader = new GLTFLoader();
dracoLoader.setDecoderPath("/draco/");
gltfLoader.setDRACOLoader(dracoLoader);
const modelLoader = gltfLoader;
const textureLoader = new TextureLoader();
const cleanScene = (scene) => {
  scene == null ? void 0 : scene.traverse((object) => {
    if (!object.isMesh) return;
    object.geometry.dispose();
    if (object.material.isMaterial) {
      cleanMaterial(object.material);
    } else {
      for (const material of object.material) {
        cleanMaterial(material);
      }
    }
  });
};
const cleanMaterial = (material) => {
  var _a, _b, _c;
  material.dispose();
  for (const key of Object.keys(material)) {
    const value = material[key];
    if (value && typeof value === "object" && "minFilter" in value) {
      value.dispose();
      (_c = (_b = (_a = value.source) == null ? void 0 : _a.data) == null ? void 0 : _b.close) == null ? void 0 : _c.call(_b);
    }
  }
};
const cleanRenderer = (renderer) => {
  renderer.dispose();
  renderer = null;
};
const removeLights = (lights) => {
  for (const light of lights) {
    light.parent.remove(light);
  }
};
const getChild = (name, object) => {
  let node;
  object.traverse((child) => {
    if (child.name === name) {
      node = child;
    }
  });
  return node;
};
export {
  cleanRenderer as a,
  cleanScene as c,
  getChild as g,
  modelLoader as m,
  removeLights as r,
  textureLoader as t
};
