//SALIR O SALTAR UNA VUELTA
let i=0;
const impares=[];
while(true){
    i++;
    if(i>10)break; //sale
    if(i%2===0) continue; //salta
    impares.push(i);
}
console.log(impares);
//[1,3,5,7,9]

//CICLOS INFINITOS Y COMO DETENERLOS
let x=0;
for(let i=0;i<10;i++) x+=0.1;
console.log(x,x===1); //0.9999999999999999 false

//UN VALOR,VARIOS CASOS
function nombreDia(numero){
    switch(numero){
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miercoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sabado";
        case 7:
            return "Domingo";
        default:
            return "Dia invalido";
    }
}

console.log(nombreDia(2)) //martes
console.log(nombreDia(7)) //domingo
console.log(nombreDia(9)) //dia invalido



//SIN BREAK EL CODIGO CAE EL CASO SIGUIENTE
function ruido(animal){
    switch(animal){
            case "perro":
            console.log("guau");
            case "gato":
            console.log("miau");
            case "pato":
            console.log("quack");
            case "churpia":
            console.log("El servicio es de 1500");
        break;
        default:
            console.log("???");
    }
}
console.log(ruido("perro"));
console.log(ruido("gato"));
console.log(ruido("pez"));
