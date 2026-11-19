
//A
let n=1;
while(n<=3) n++;
console.log(n)

//B
let k=10,v=0;
while(k<5) {v++;k++;}
console.log(v,k)

//C
let a=10,b=0;
do{a++; b++;} while (a<5);
console.log(a,b)
/*
Lo que hace este codigo es que primero ejecuta el do que le suma uno a a y b pero cuando llego a la condicion while deja de correr el programa 
*/

//D
let t=3;
while(t>0){console.log(t); t--;}
console.log("fin");
//Esta codigo se ejecuta sin fin debido a que while siempre es mayor a 3 y 
//no hay ninguna manera de de acercarse al valor
