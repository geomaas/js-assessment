exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    indexOf: function(arr, item) {


        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                return i;
            }
        }

        return -1;
    },

    sum: function(arr) {
        let sum = 0
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    },

    remove: function(arr, item) {
        let emptyArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != item)
                emptyArr.push(arr[i])
        }
        return emptyArr;
    },

    removeWithoutCopy: function(arr, item) {
        var i;
        var len;

        for (i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i--;
                len--;
            }
        }

        return arr;
    },

    append: function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate: function(arr) {
        arr.splice(arr.length - 1);
        return arr;
    },

    prepend: function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail: function(arr) {
        arr.shift();
        return arr;
    },

    concat: function(arr1, arr2) {
        return arr1.concat(arr2);

    },

    insert: function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count: function(arr, item) {
        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                count++;
            }
        }
        return count;
    },

    duplicates: function(arr) {
        var emptyArr = [];
        for (var i = 0; i < arr.length; i++) {


            if (emptyArr.indexOf(arr[i]) === -1 && arr.indexOf(arr[i], i + 1) !== -1) {
                emptyArr.push(arr[i]);
            }
        }

        /////// this one only returned the numbers as strings??? odd////
        // var counts = [];
        //
        // for (var i = 0; i < arr.length; i++) {
        //     counts[arr[i]] = counts[arr[i]] >= 1 ? counts[arr[i]] + 1 : 1;
        // }
        // for (arr[i] in counts) {
        //     if (counts[arr[i]] > 1)
        //         emptyArr.push(arr[i]);
        // }
        return emptyArr;
    },

    square: function(arr) {
        var emptyArr = [];
        for (var i = 0; i < arr.length; i++) {
            emptyArr.push(Math.pow(arr[i], 2))
        }
        return emptyArr;
    },

    findAllOccurrences: function(arr, target) {
        var emptyArr = [];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                emptyArr.push(i);
            }
        }

        return emptyArr;
    }
};
