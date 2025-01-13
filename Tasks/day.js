// Refactor following solution
// Get day number

const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (input) => {
const day = input.toLowerCase().slice(0,3);
const index = day.indexOf(day);
return index !== -1 ? index +1 : -1;
};

module.exports = parseDay;
