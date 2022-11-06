/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  return (num > 0) // without doubt
    && !(num&(num-1)) // can have only one 1 in bits (power of 2 also follow this rule) 4=0b100 16=0b10000 
    && num&0x55555555 // for power of 2, every position ok, for 4, only every other position, note 0x55555555 means 0b01010101...
};

