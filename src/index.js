
module.exports = function towelSort (matrix) {
  if (!arguments.length) return [];
  let arr = [];
  matrix.forEach((x, i) => {
      if (i % 2 == 0)
          Array.prototype.push.apply(arr, x);
      else
          Array.prototype.push.apply(arr, x.reverse());
  });
  return arr;
}
