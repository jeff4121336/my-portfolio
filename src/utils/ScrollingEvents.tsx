// call this to Disable
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e: KeyboardEvent) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function setUp() {
  let supportsPassive = false;
  try {
    window.addEventListener(
      "test",
      () => {},
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        },
      })
    );
  } catch (e) {
    console.log("error", e);
  }

  const wheelOpt = supportsPassive ? { passive: false } : false;
  const wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  return { wheelOpt, wheelEvent };
}

export function disableScroll() {
  const { wheelOpt, wheelEvent } = setUp();
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

export function enableScroll() {
  const { wheelOpt, wheelEvent } = setUp();
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}
