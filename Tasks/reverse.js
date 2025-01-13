// Refactor following solution
// Reverse dict, exchange keys and values

Reverse = (data) => {
  const reversedData = {};
  const keys = Object.keys(data); 
  keys.forEach((key) => {
  reversedData[data[key]] = key;
  });
  return reversedData;
};

module.exports = Reverse;
