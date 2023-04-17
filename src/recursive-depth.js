const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  

  calculateDepth(arr) {

    if(arr.filter(i => i.constructor.name === "Array").length != 0){
      let num =  this.calculateDepth([].concat(...arr.filter(i => i.constructor.name === "Array")));
      return 1 + num;
   } else {
      return 1;
   }
  //   //if (arr.length ===)
  //   for (let element of arr) {
  //    if (Array.isArray(element)) {
  //     count++;
  //     calculateDepth(element, count)
  //    } 
     
  //   } return count;
  }
  
}



module.exports = {
  DepthCalculator
};
