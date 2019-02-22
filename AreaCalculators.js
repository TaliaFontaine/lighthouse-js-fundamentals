function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    return (length * width);
  }
}
function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return undefined;
  } else {
    return ((base * height) / 2);
  }
}
function calculateCircleArea(radius) {
  var circle = Math.pow(radius, 2) * Math.PI;
  if (circle < 0 || radius < 0) {
    return undefined;
  } else {
    return circle;
  }
}

console.log(calculateRectangleArea(10, 5));
console.log(calculateRectangleArea(1.5, 2.5));
console.log(calculateRectangleArea(10, -5));

console.log(calculateTriangleArea(10, 5));
console.log(calculateTriangleArea(3, 2.5));
console.log(calculateTriangleArea(10, -5));

console.log(calculateCircleArea(10));
console.log(calculateCircleArea(3.5));
console.log(calculateCircleArea(-1));