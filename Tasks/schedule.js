// Implement following task
// Run `func(n)`; `n`-times with `interval` and pass `n` to `func`

'use strict';

const schedule = async (func, n, interval) => {
   for (let i = 1; i <= n; i++) {
        func(i);
    }
};

module.exports = schedule;
