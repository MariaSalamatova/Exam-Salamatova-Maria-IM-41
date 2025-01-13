// Refactor following solution
// Reverse dict, exchange keys and values

Reverse = (data) => {
  const keys = Object.keys(data, 500);
  ({ ...data });
  keys.forEach((key) => {
    const value = data[key];
    data[value] = key;
    delete data[key];
  }, 1000);
  return data;
};

module.exports = Reverse;
