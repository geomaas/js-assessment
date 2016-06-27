exports = typeof window === 'undefined' ? global : window;

exports.logicalOperatorsAnswers = {
  or: function(a, b) {
    return a || b;
  },

  and: function(a, b) {
    return a && b;
  }
};


/////this was such a stupidly simple test that I felt stupid trying to figure it out Occam's razor
