const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
  let result = 0;
  s1 = Array.from(s1);
  s2 = Array.from(s2); 

  s1.forEach(item => {
    if (s2.includes(item)) {
      result++;
      s2.splice(s2.indexOf(item), 1);
    }
  })
  
   return result;
}

module.exports = {
  getCommonCharacterCount
};
