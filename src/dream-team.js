const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let resultArr = [];

  if (!Array.isArray(members)) {
    return false;
  }

  for (let name of members) {

    if (typeof(name) === 'string') {
    for (let i = 0; i < name.length; i++){
      if (name[i] !== ' ') {
        resultArr.push(name[i].toUpperCase()) 
        break;
      }
      
    }
         
    }
  }
  return resultArr.sort().join('');
 
  
}

module.exports = {
  createDreamTeam
};
