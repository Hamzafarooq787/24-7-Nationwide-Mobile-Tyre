export const iconAnimations = {
  bounce: {
    y: [0, -8, 0, -4, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  },
  vibrate: {
    rotate: [0, 5, -5, 5, -5, 0],
    x: [0, 2, -2, 2, -2, 0],
    transition: { duration: 0.8, repeat: Infinity, ease: "linear" }
  },
  pulse: {
    scale: [1, 1.1, 1],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
  },
  float: {
    y: [0, -5, 0, 5, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  },
  spin: {
    rotate: [0, 360],
    transition: { duration: 3, repeat: Infinity, ease: "linear" }
  }
};