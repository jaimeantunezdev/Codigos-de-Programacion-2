//Que imprime predice antes de ejecutar
//A
let x=1
function f(){
    let x=2; return x;
}
console.log(f(),x)
//Lo que hace el codigo A es que retorna el valor de la variable x que esta dentro de la funcion, mientras que el valor de la variable x que es global es 1 

//B
function g(){
    //"use strict"; 
    total=5;
}
console.log(g()); //Es undefined, ya que la funcion g no retorna nada
console.log(total); //lo que pasa aqui es que tira error debido a que total nunca se declara 



//C
const fs=[];
for(let i=0;i<3;i++)
fs.push(()=>i*10);
console.log(fs.map((f)=>f()))
//Lo que hace el codigo C es que crea un array de funciones,
//cada una de las cuales devuelve el valor de i multiplicado por 10.


//D
function crear(){
    let n=10;
    return()=>++n;
}
const a=crear(),b=crear();
console.log(a(),a(),b());
//Lo que hace esta funcion de crear es que por cada vez que mandas a llamar a la funcion crear ya sea con a o con b
//se suma de 1 en 1 empezando desde el nummero 10
