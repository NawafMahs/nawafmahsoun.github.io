function throttle(func, timeFrame) {
  let lastTime = 0;
  return function(...args) {
    const now = /* @__PURE__ */ new Date();
    if (now - lastTime >= timeFrame) {
      func(...args);
      lastTime = now;
    }
  };
}
export {
  throttle as t
};
