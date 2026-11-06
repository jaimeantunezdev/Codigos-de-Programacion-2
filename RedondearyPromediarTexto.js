//redondear (n,decimales) devuelve el numero n redondeado a la cantidad de decimales que se indique
function redondear(n,decimales)
{
    return Number(n.toFixed(decimales))
}
redondear(3.14159,3) //3.142
console.log(redondear(3.14159,3))

//Promedio de un texto dado un texto con calificaciones separadas por comas.calcula el promedio ignorando valores invalidos
let calificaciones = "8 , 9.5 , x , 7 , , 10"
let nuevasCalificaciones=(calificaciones.split(",").map(p => p .trim()))
console.log(nuevasCalificaciones)
//.filter((p) => p === !isNaN).reduce((acum,p)=> acum + p,0)/calificaciones.length



