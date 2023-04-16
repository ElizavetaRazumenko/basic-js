const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
   let arrNum = [];
   let res = 0;

   while (n) {
    arrNum.push(n % 10);
    n = Math.floor(n / 10);
}


    for (let i = 0; i < arrNum.length; i++) {
        let currNum = 0;
        for (let j = arrNum.length - 1; j >= 0; j--) {
            if (j !== i) {
              currNum = currNum * 10 + arrNum[j];
            }
        }
        res = Math.max(currNum, res);
    }
    return res;
}

module.exports = {
  deleteDigit
};
