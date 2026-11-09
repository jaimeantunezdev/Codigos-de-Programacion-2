function descuento(precio, porcentaje=10)
{
    return precio - (precio * porcentaje / 100)
}
console.log(descuento(100, ))



function promedio(...notas)
{
    if(!notas.length)
    {
        return 0
    }
    else
    {
        return notas.reduce((a,b)=>a+b,0)/notas.length
    }
}
console.log(promedio(8,9,10),promedio())



function aplicarDosVeces(fn,x) //recibe una funcion y la aplica 2 veces al valor aplicarDosVeces((n) => n*2),3) //12
{
    return fn(fn(x))
}
console.log(aplicarDosVeces((n) => n*2, 3)) //12