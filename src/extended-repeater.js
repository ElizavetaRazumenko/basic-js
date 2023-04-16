const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let podString;
  let resultStr
  if (!options['separator']) {
    options['separator'] = '+';
  }

  if (!options['additionSeparator']) {
    options['additionSeparator'] = '|'
  }

  if (options['addition'] || options['addition'] === false || options['addition'] === null) {
    podString = `${options['addition']}`;

    if (options['additionRepeatTimes']) {
      podString = `${podString}${options['additionSeparator']}`.repeat(options['additionRepeatTimes']);
      let indexDelete = podString.lastIndexOf(options['additionSeparator']);
      podString = podString.slice(0, indexDelete);
    }
  } else {
    podString = '';
  }

  if (options['repeatTimes']) {
    resultStr = `${str}${podString}${options['separator']}`.repeat(options['repeatTimes']);
    let indexDelete = resultStr.lastIndexOf(options['separator']);
    resultStr = resultStr.slice(0, indexDelete);
  } else {
    resultStr = `${str}${podString}`;
  }

  return resultStr;
  
}

module.exports = {
  repeater
};
