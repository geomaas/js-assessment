exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var emptyObj = [];

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        emptyObj.push(prop + ': ' + obj[prop]);
      }
    }

    return emptyObj;
  }
///////why does this work for an array but not pushing into an empty object? tried that first. push only works on arrays but is there an object equivalent?
};
