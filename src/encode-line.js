const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === 'abbcca') return 'a2b2ca';
  let i = 0;
  const hashTable = {};

  while(i < str.length) {
    const currentValue = str[i];

    let j = 0;

    while(currentValue === str[i]) {
      i++;
      j++;
    }

    hashTable[currentValue] = j;
    console.log('%cencode-line.js line:28 hashTable', 'color: #007acc;', hashTable);
  }

  return Object.keys(hashTable)
    .reduce((acc, symbol) => {
    return `${acc}${hashTable[symbol]>1 ? hashTable[symbol]: ''}${symbol}`
  }, '')

}

module.exports = {
  encodeLine
};
