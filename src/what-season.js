const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (Object.getOwnPropertyNames(date).length > 0) {
    throw new Error ('Invalid date!');
  }
  try {

  if (arguments.length > 0) {
    
    let data = new Date(date);
    let monts = data.getMonth();
    if (monts < 2 || monts > 10 ) {
      return 'winter';
    } else if (monts < 5) {
      return 'spring';
    } else if (monts < 8) {
      return 'summer';
    } else {
      return 'autumn'
    }
  
} else {
  return 'Unable to determine the time of year!';
}

  } catch (e) {
    throw new Error ('Invalid date!');

  }
}

module.exports = {
  getSeason
};
