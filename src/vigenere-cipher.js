const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(value) {
    this.value = value;
  }

  encrypt(message, key) {
    if (message && key) {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numAlph = {};
      for (let i = 0; i < alphabet.length; i++) {
        numAlph[alphabet[i]] = i;
      }

      let code = '';

      for (let i = 0; i < message.length; i++) { 
        code += alphabet[(numAlph[message[i]] + numAlph[key[i % key.length]]) / alphabet.length] + '';
      } 

      if (this.value !== false) {
        return code.toUpperCase();
      } else {
        let newString = ""
        for (let i = code.length - 1; i >= 0; i--) {
        newString += code[i];
        return newString.toUpperCase();
     }
      }
      

    } else {
      throw new Error ('Incorrect arguments!')
    }
    
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage && key) {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numAlph = {};
      for (let i = 0; i < alphabet.length; i++) {
        numAlph[alphabet[i]] = i;
      }

      let code = '';

      for (let i = 0; i < encryptedMessage.length; i++) { 
        code += alphabet[(numAlph[encryptedMessage[i]] - numAlph[key[i % key.length]] +  alphabet.length) / alphabet.length] + '';
      } 
      
      if (this.value !== false) {
        return code.toUpperCase();
      } else {
        let newString = ""
        for (let i = code.length - 1; i >= 0; i--) {
        newString += code[i];
        return newString.toUpperCase();
     }
      }

    } else {
      throw new Error ('Incorrect arguments!')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
