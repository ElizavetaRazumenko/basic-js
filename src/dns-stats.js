const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domenAdress = {};
  for (let domen of domains) {
    count = 0;
    let firstIndex = domen.indexOf('.');
    let lastIndex = domen.lastIndexOf('.');

    if (!domenAdress[domen.slice(lastIndex)]) {
      domenAdress[domen.slice(lastIndex)] = 1;
    } else {
      domenAdress[domen.slice(lastIndex)] += 1;
    }

    if (firstIndex === lastIndex) {
      if (!domenAdress[`${domen.slice(lastIndex)}.${domen.slice(0, firstIndex)}`]) {
        domenAdress[`${domen.slice(lastIndex)}.${domen.slice(0, firstIndex)}`] = 1;
      } else {
        domenAdress[`${domen.slice(lastIndex)}.${domen.slice(0, firstIndex)}`] += 1;
      }
    } else {
      if (!domenAdress[`${domen.slice(lastIndex)}${domen.slice(firstIndex, lastIndex)}`]) {
        domenAdress[`${domen.slice(lastIndex)}${domen.slice(firstIndex, lastIndex)}`] = 1;
      } else {
        domenAdress[`${domen.slice(lastIndex)}${domen.slice(firstIndex, lastIndex)}`] += 1;
      }

      if (!domenAdress[`${domen.slice(lastIndex)}${domen.slice(firstIndex, lastIndex)}.${domen.slice(0, firstIndex)}`]) {
        domenAdress[`${domen.slice(lastIndex)}${domen.slice(firstIndex, lastIndex)}.${domen.slice(0, firstIndex)}`] = 1;
      } else {
        domenAdress[`${domen.slice(lastIndex)}${domen.slice(firstIndex, lastIndex)}.${domen.slice(0, firstIndex)}`] += 1;
      }
    }
  }
  return domenAdress;
    
}

module.exports = {
  getDNSStats
};
