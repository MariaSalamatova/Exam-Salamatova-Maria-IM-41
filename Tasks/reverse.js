// Refactor following solution
// Reverse dict, exchange keys and values

Reverse = (data) => {
  const reversedData = {};
for (const key of Object.keys(data)) {
    reversedData[data[key]] = key;
  }
  return reversedData;
};

module.exports = Reverse;
