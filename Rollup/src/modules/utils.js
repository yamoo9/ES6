let toString = Object.prototype.toString;
let slice    = Array.prototype.slice;

export let type = o => toString.call(o).toLowerCase().slice(8,-1);
export let makeArray = o => slice.call(o);