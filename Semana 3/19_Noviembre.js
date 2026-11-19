//Repetir y elegir sin codigo 
//While se usa con no hay un numero de veces que se va a repetir algo
//for se cuantas vueltas
for(let i=1;i<=3;i++) console.log("vuelta",i);
//whie depende de algo que va cambiando
//while(monto<2000){monto *=1.07;anios++; }


//REPITE MIENTRAS LA CONDICION SEA CIERTA
//todo whille necesita 3 cosas:una variable,un valor inicial y algo en el cuerpo que la acerque a terminar
let n=1;
while(n<=3){
    console.log("n vale " + n);
    n++;
}
//n vale 1
//n vale 2
//n vale 3

//WHILE CUANDO NO SABES CUANTAS VUELTAS
//Pasos hasta llegar a 1
let numero=27;
let pasos=0;
while(numero !==1){
    numero=numero%2===0
    ? numero/2 //
    :numero*3+1; //
    pasos++;
}
console.log(pasos);//111

//Años hasta duplicar el 7% anual
let monto=1000;
let anios=0;
while(monto<2000){
    monto*=1.07;
    anios++;
}
console.log(anios)//11


//PRIMERO HACE DESPUES PREGUNTA
let k=10;
do{
    console.log("k vale "+k)
    //k vale 10
    k++;
} while(k<5); //ya es falso
//En el navegador:pedir hasta que sea valido
/*
let edad;
do{
    edad=Number(prompt("Edad (1 a 120)"));
}   while(Number.isNaN(edad) || edad < 1 || edad >120);
*/

//WHILE CONTRA DO...WHILE
let a=0,b=0;
while(a>5) a++; //el cuerpo corre 0 veces
do{b++;} while(b>5);
console.log(a,b)//0 1
