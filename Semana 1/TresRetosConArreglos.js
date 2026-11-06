//Promedio de aprobados
let promedios=[9,5,8,6.5]

promedios=promedios.filter((p) => p > 6)
console.log(promedios)

promedios=promedios.reduce((acum,p)=> acum + p,0)/promedios.length
console.log(promedios.toFixed(2))


//Cuadrados de los pares
let numeros=[1,2,3,4,5,6]
let arreglonumeros=numeros.filter((p) => p % 2 === 0).map((p)=>p**2).sort((x,y) => y - x)

console.log(arreglonumeros)


//Orden en español
const objetos=["pera","Manzana","uva","Árbol"]
objetos.sort((a,b) => a.localeCompare(b, 'es-MX', {sensitivity: 'base'}))
console.log(objetos)

