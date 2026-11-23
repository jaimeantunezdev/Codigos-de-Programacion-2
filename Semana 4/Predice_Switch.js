//A
switch (2){
    case 1: console.log("a");
    case 2: console.log("b");
    case 3: console.log("c"); break;
}
/*
Yo creo que se va a imprimir b y c debido a que el caso 1 y 2 no tienen break y se saltan al siguiente caso
*/

//B
const valor="5";
switch(valor){
    case 5: console.log("numero"); break;
    default: console.log("otro");
}
/*
Lo que yo creo que hace el codigo es que imprime el "otro" debido a que el valor de case es un Number y como el valor se esta 
declarando como string no se llegaria a imprimir "otro"  
*/

//C
switch (9){
    default: console.log("d");
    case 1:console.log("u"); break;
    case 2:console.log("x");
}
/*
 Lo que yo creo que hace es que el switch evalua primero los casos y en caso de que no encontrar el 9 se va a default e imprime la d 
 pero como la d no tiene break baja hasta donde se encuentra con el break del caso 1
 */


//D
const n=90;
switch (true){
    case n>=80:console.log("B");break;
    case n>=90:console.log("A");break;
}

/*
Lo que yo creo que hace este codigo se ejecuta el primer caso que cumpla la comparacion 
*/