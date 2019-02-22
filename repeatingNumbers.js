var repeatNumbers = function(data) {
    var rslt = [];
    for (var i = 0; i < data.length; i++) {
    var a = data[i][0];
    var b = data[i][1];
    for (var x = b; x > 0; x--) {
        rslt += a;
    if (x ===1 && i < data.length - 1) {
        rslt += ",";
    }
   }
  }
  return rslt;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));