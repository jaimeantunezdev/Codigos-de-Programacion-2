//EL VALOR ES PRIMO O NO///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//devuelve true o false cuida los casos 0,1 y los negativos si un numero da un resultado entero sin residuo no es numero primo.El numero es primo si  se puede dividir por el 1 y el mismo
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function esPrimo(n)
{
    let contador=0;
    for(let i=1;i<=n;i++)
    {
        if(n%i===0)
        {
            contador++;
        }
    }
    if(contador>2 || contador<=1) return false;
    return true;
}

console.log(esPrimo(7));
console.log(esPrimo(1));

const filtrarPrimos=[]
for(let i=0;i<=50;i++)
{
    if(esPrimo(i))  
    {
        filtrarPrimos.push(i);
    }
}
console.log("Los primos filtrados son: \n["+filtrarPrimos+"]")

//////////////////////////////////////////////////////////
//CONVERTIR TEMPERATURA///////////////////////////////////
//Convierte entre "C","F","K" y devuelve un numero//////// 
// Se realizo el despeje de las formulas de temperatura //
//////////////////////////////////////////////////////////
function convertirTemperatura(grados,origen,destino)
{
    let celsius;
    let Numeros=Number(grados);
    if(origen==="C")
    {
        celsius=grados;
    }
    else if(origen==="F")
    {
        celsius=(grados-32)*(5/9);
    }
    else if(origen==="K")
    {
        celsius=grados-273.15;
    }

    if(destino==="C")
    {
        return celsius;
    }
    else if(destino==="F")
    {
        return celsius *(9/5)+32;
    }
    else if(destino ==="K")
    {
        return celsius+273.15;
    }
    return Numeros; 
}
console.log(convertirTemperatura(100,"C","F"));
console.log(convertirTemperatura(0,"C","K"));