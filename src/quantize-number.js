// Quantize a `val` by `quantum`.
// The third parameter is `options`. At the moment, there's only a single
// option, which is `cover`. This is whether the algorithm should be covering
// or fitting.
//
// These examples may help demonstrate the difference between that option:
//
// quantizeNumber(7, 5, {cover: false}) === 5
// quantizeNumber(7, 5, {cover: true}) === 10
//
// The algorithm is symmetrical about zero, so you can just make every
// number in the above example negative to see how it behaves when negative
// numbers are presented.
function quantizeNumber(val, quantum, {cover = false} = {}) {
  if (!quantum) { return 0; }
  var remainder = val % quantum;
  // I'm intentionally not using Math.sign so that no polyfill is
  // required to use this library in legacy environments.
  var sign = val >= 0 ? 1 : -1;
  var mod = cover && remainder ? quantum : 0;
  return val - remainder + sign * mod;
};

export default quantizeNumber;
