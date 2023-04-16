const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  

  // string: '',
  // getLength() {
  //   return this.string.length;
  // },
  // addLink(value = '') {
  //   if (this.string.includes('~~')) {
  //     let arr = this.string.split('~~');
  //     arr.push(`( ${value} )`);
  //     this.string = arr.join('~~');
  //   } else if (this.string.length > 1) {
  //     this.string = `${this.string}~~( ${value} )`;
  //   } else {this.string = `( ${value} )`;
  //   }
  //   return this;
  // },
  // removeLink(position) {
  //   let obj = {};
  //   let arr = this.string.split('~~');
  //   arr[position - 1] = '';
  //   obj = Object.assign({}, arr);
  //   delete obj[position - 1];
  //   arr = Object.values(obj);
  //   this.string = arr.join('~~');
  //   return this;
  // },
  // reverseChain() {
  //   let arr = this.string.split('~~');
  //   let resArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     resArr.unshift(arr[i]);
  //   }
  //   if (resArr.length < 2) {
  //     this.string = resArr[0];
  //   } else {
  //     this.string = resArr.join('~~');
  //   }
  //  return this;
  // },
  // finishChain() {
  //   return this.string;
  // }
}


module.exports = {
  chainMaker
};
