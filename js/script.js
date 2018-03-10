var a = 2;
var h = 5;
var value = a * h / 2;


function getTriangleArea(a, h) {if ( (a > 0) && (h > 0) ) {
    console.log('Parametry mają wartości większe niż 0')
} else if ( (a <= 0) && (h <= 0) ) {
    console.log('Nieprawidłowe dane')
}
return value;

}







