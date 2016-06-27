exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    //  return 1 & (num >> (bit - 1));
    /// actual answer found online trying to understand it
  },

  base10: function(str) {
    return parseInt(str, 2);
    ///// this works cus i stumbled on a calculator and numbers matched up here and in the test still dont entirely understand
  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {

  }
};
