/*
const lista=[10,20,30,40]
let numeroNuevo=parseFloat(prompt("Ingrese un numero"))
let listaModificada=lista
//listaModificada.push(numeroNuevo) mete el valor al final de una lista
//listaModificada.pop() elimina el valor del final
//listaModificada.unshift(numeroNuevo) agrega un valor al inicio
//listaModificada.shift() elimina un valor al inicio

alert("El arreglo quedo de la siguiente manera [ "+listaModificada+" ]")
*/

/*let frutas=['manzana','naranja','uva','pera']
let resultado=frutas.splice(1,2)
console.log(resultado)*/

/*let frutas=['manzana','naranja','uva','pera']
let reemplazarElemento=frutas.splice(3,1,'piña')
console.log(reemplazarElemento)*/

/*let frutas=['manzana','naranja','uva','pera']
let insertarElemento=frutas.splice(1,0,'pera','uva')
console.log(insertarElemento)*/

/*
const b=[1,2,3,4,5]
console.log(b.splice(1,2)) //[2,3]

console.log(b) //[1,4,5]

b.splice(1,0,"x","y")
console.log(b) //[1,'x','y',4,5]

console.log(b.slice(1,3)) //['x','y']
*/

/*
const n=[5,12,8,130,44]
n.indexOf(8) //2 devuelve el indice donde se encuentra el numero 
n.includes(130) //true dice si el numero entre parentesis  esta en la lista 
n.find((x) => x > 10) //12 muestra el primer numero mayor a 10
n.findIndex((x) => x > 10) //1 muestra en que posicion se encuentra el primer numero mayor a 10
n.find((x)=> x > 1000) //undefined 
n.some((x)=> x > 100) //true dice si algun numero de la lista es mayor a 100
n.every((x)=> x > 5) //false dice si todos los numeros son mayor a 5
console.log(n)
*/

/*
let precios=[100,250,80,400]
console.log(precios)
precios=precios.map((p) => p + 20) //[120,270,100,420] se usa para hacer una operacion que modifica un arreglo
console.log(precios)
precios=precios.filter((p) => p > 150) //[250,400] filtra valores mayores a 150
console.log(precios)
precios=precios.reduce((acum,p)=> acum + p,0) //830 acumula
console.log(precios)
*/

/*
let resultadoNuevo=[10,9,1,100]
console.log(resultadoNuevo)
resultadoNuevo.sort()
console.log(resultadoNuevo)
resultadoNuevo.sort((a,b) => a - b)
console.log(resultadoNuevo)
resultadoNuevo.sort((a,b) => b - a) [100,10,9,1]
console.log(resultadoNuevo)
*/