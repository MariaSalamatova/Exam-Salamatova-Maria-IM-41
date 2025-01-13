// Refactor following solution
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

const zip = function (a = [], b = []) {
  const length = Math.min(a.length, b.length); 
  return Array.from({ length }, (_, i) => [a[i], b[i]]);
};

module.exports = zip;
