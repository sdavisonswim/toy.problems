// Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.

// DO NOT use JSON.stringify.

deepEquals = function(x, y) {
  if (x === y) return true;

  if (!(x instanceof Object) || !(y instanceof Object)) return false;

  if (x.constructor !== y.constructor) return false;

  for (var p in x) {
    if (!x.hasOwnProperty(p)) continue;

    if (!y.hasOwnProperty(p)) return false;

    if (x[p] === y[p]) continue;

    if (typeof(x[p]) !== "object") return false;

    if (!deepEquals(x[p], y[p])) return false;
  }

  for (p in y) {
    if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
  }
  return true;
}