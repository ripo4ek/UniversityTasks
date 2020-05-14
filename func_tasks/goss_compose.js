export default (...funcs) =>
  funcs.reduce((accum, fn) => (...args) => accum(fn(...args), x => x));
