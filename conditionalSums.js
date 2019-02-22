var conditionalSum = function(values, condition) {
    var rslt = 0;
    if (condition === "even") {
        for (var i = 0; i < values.length; i++) {
            if (values[i] % 2 === 0) {
                rslt += values[i];
            }
        }
    } else if (condition === "odd") {
        for (var x = 0; x < values.length; x++) {
            if (values[x] % 2 !== 0) {
                rslt += values[x];
            }
        }
    } else {
        return 0;
    }
    return rslt;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));