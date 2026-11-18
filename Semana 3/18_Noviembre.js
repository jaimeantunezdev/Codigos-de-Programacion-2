//return: devolver y terminar

function sinRetorno(x){  x * 2; } //no devuelve nada
function conRetorno(x) {return x * 2;} //devuelve el resultado
function signo(n){
    if(n < 0) return "negativo";
    if(n === 0) return "cero";
    return "positivo";
}

console.log(sinRetorno(4)); //undefined
console.log(conRetorno(4)); //8
console.log(signo(-3)); //negativo
console.log(signo(0)); //cero
console.log(signo(9)); //positivo

//¿Donde vive cada variable?

function contador(){let n=0;n++;return n;}
console.log(contador(),contador(),contador()); //1 1 1

//Por valor y por referencia
let a=5;
function cambiar(x){return x=99;}
cambiar(a);
//a sigue siendo 5
function agregar(arr){arr.push(99);}
const lista=[1,2];
agregar(lista);
//lista ahora es [1,2,99]
//Mejor:devolver una copia
const agregar2=(arr)=>[...arr,99];
console.log(agregar2(lista))

/*
//AMBITO:quien ve a quien
const global="visible en todas partes"
function probar(){
    const local="solo aqui dentro"
    console.log(global,local); 
}
probar();
console.log(local);
//ReferenceError: local is not defined
*/


//let,const y var (Evitar var)
//DOS ERRORES SILENCIOSOS
//Sombreado
const nombre="global";
function f(){
    const nombre="local";
    console.log(nombre);
}
f();console.log(nombre);
//local global
//global accidental

function g(){resultado=42;}
g(); console.log(typeof resultado);
//number (con "use strict":ReferenceError )


//UNA FUNCION QUE RECUERDA
function crearContador(){
    let cuenta=0;
    return ()=>{cuenta++;return cuenta;}
}
const c1=crearContador();
const c2=crearContador();
console.log(c1(),c1(),c1(),c2());
//1 2 3 1
//cuenta no es accesible desde fuera de la funcion 
//solo se cambia mediante c1() y c2()


//VAR DENTRO DE UN CICLO
//CON VAR
const fa=[];
for(var i=0;i<3;i++) fa.push(()=>i);
console.log(fa.map((f)=>f()));
//[3,3,3]
//EN VAR SE GENERA UN ARREGLO DE SOLO 3 DEBIDO A QUE 

//CON LET
const fb=[];
for(let j=0;j<3;j++) fb.push(()=>j);
console.log(fb.map((f)=>f()));
//[0,1,2]
