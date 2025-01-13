// Refactor following solution
// Get day number

const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (input) => {
  let i;
  for (i = 0; i < day.length; i++) {
    if (s.startsWith(D[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
