let arregloRespuestas=[];
let arreglosFiltrados=[];
function pedirNumero(respuestas)
{
    do
    {

        respuestas=parseFloat(prompt("Ingrese un numero del 1 al 10"));
        if (!isNaN(respuestas)) 
        {

        arregloRespuestas.push(respuestas);

        }

    } while(respuestas<0 || respuestas>10 || isNaN(respuestas));   
    arreglosFiltrados.push=arregloRespuestas.filter(p => p >= 1 && p <=10);
    return respuestas; 
}
console.log(arregloRespuestas);
console.log(arreglosFiltrados);

pedirNumero();


function adivinar(secreto) {
    let bajo = 1;
    let alto = 500;
    let intentos = 0;
    let intento = 0;
    while (intento !== secreto) {
        intento = Math.floor((bajo + alto)/2);
        intentos++;

        if (intento < secreto) {
            console.log(`intento ${intentos}: rango ${bajo}-${alto}`),
            bajo = intento+1;
        }
          else if (intento > secreto) {
            console.log(`intento ${intentos}: rango ${bajo}-${alto}`),
            alto = intento-1;
        }
        else{
            console.log(`intento ${intentos}: rango ${bajo}-${alto}`)
        }
    }
   return intentos;
}
console.log("intentos:", adivinar(126));