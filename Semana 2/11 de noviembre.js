//return corta

function sinRetorno(x){x*2;}
function conRetorno(x){return x*2;}
function signo(n){
    if(n<0)return "negativo"
    if(n===0) return "cero"
    return "positivo"
}
//sinRetorno(4) undefined conRetorno(4) 8 signo(-3),signo(0),signo(9) negativo cero positivo
console.log(sinRetorno(4))
console.log(conRetorno(4))
console.log(signo(-3))


//Devolver varios valores
/*
Una funcion devuelve un solo valor para devolver varios
*/
function estadisticas(lista)
{
    const minimo=Math.min(...lista)
    const maximo=Math.max(...lista)
    const suma=lista.reduce((a,b)=>a+b,0)
    return{minimo,maximo,promedio:suma/lista.length}
}
const{minimo,maximo,promedio}=estadisticas([4,8,6]);
console.log(minimo,maximo,promedio);
//486



//calcular o mostrar, no las dos
//Pura
//Calcula (pura)
const conIva=(p)=>Math.round(p*116)/100;

//Muestra (efecto)
console.log("total",conIva(100));
//total 116


//Con efecto secundario
//Trampa salto de linea tras return
function mal()
{
    return 
    42;
}
console.log(mal())
//mal() -> undefined