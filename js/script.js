var triangle1Area = getTriangleArea(10, 15)
var triangle2Area = getTriangleArea(11, 8)
var triangle3Area = getTriangleArea(5, 12)

function getTriangleArea(a, h) {
    if (a > 0 && h > 0) {
    console.log('Parametry mają wartości większe niż 0');
    return a * h / 2
} else if (a <= 0 && h <= 0) {
    console.log('Nieprawidłowe dane');
}
return 0;

}
console.log(getTriangleArea(10, 6));
console.log(getTriangleArea(11, 8));
console.log(getTriangleArea(5, 12));







