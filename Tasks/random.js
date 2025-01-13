// Refactor following solution
// Generate random integer value in given range

random = (min, max = min) => {
  if (min === max) {
    return Math.floor(Math.random() * (max + 1));
  }
    return min + Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = random;
