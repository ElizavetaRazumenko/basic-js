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
      message = message.toUpperCase();
      key = key.toUpperCase();
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numAlph = {};
      for (let i = 0; i < alphabet.length; i++) {
        numAlph[alphabet[i]] = i;
      }

      let code = '';

      for (let i = 0, j = 0; i < message.length; i++, j++) { 
        if (alphabet.includes(message[i])) {
      
          code += alphabet[(numAlph[message[i]] + numAlph[key[j % key.length]]) % alphabet.length] + '';
        } else {
          code += message[i];
          j--;
        }     
        } 

      if (this.value !== false) {
        return code;
      } else {
        let newString = ""
        for (let i = code.length - 1; i >= 0; i--) {
        newString += code[i];
        
     }
     return newString;
      }
      

    } else {
      throw new Error ('Incorrect arguments!')
    }
    
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage && key) {
      encryptedMessage = encryptedMessage.toUpperCase();
      key = key.toUpperCase();
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numAlph = {};
      for (let i = 0; i < alphabet.length; i++) {
        numAlph[alphabet[i]] = i;
      }

      let code = '';

      for (let i = 0, j = 0; i < encryptedMessage.length; i++, j++) { 
        if (alphabet.includes(encryptedMessage[i])) {
      
          if ((numAlph[encryptedMessage[i]] - numAlph[key[j % key.length]] > -1)) {
          code += alphabet[(numAlph[encryptedMessage[i]] - numAlph[key[j % key.length]]) % alphabet.length] + '';
          } else {
          code += alphabet[(numAlph[encryptedMessage[i]] - numAlph[key[j % key.length]] + 26) % alphabet.length] + '';
          }
        } else {
          code += encryptedMessage[i];
          j--;
        }     
        } 
        
        if (this.value !== false) {
          return code;
        } else {
          let newString = ""
          for (let i = code.length - 1; i >= 0; i--) {
          newString += code[i];
       }

       return newString;
        }

    } else {
      throw new Error ('Incorrect arguments!')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
