function Promedio()
{
   let arregloCal=[]
   let sumaCal=0
    for(let i=0;i<3;i++)
    {
    let cal=parseFloat(prompt("Ingrese la calificacion "+(i+1)))
        if(!isNaN(cal))
        {
        arregloCal.push(cal)
        sumaCal+=cal
        }
    } 
    let resultadoPromedio=sumaCal/arregloCal.length || 0

    if(arregloCal.length===0)
    {
    alert("El arreglo de calificaciones esta vacio, por lo tanto el promedio es: "+resultadoPromedio.toFixed(2))
    }
    else if(resultadoPromedio>=6)
    {
        alert("El resultado es aprobatorio y el promedio que tuvo fue: "+resultadoPromedio.toFixed(2))
    }
    else
    {
        alert("El resultado es reprobatorio y el promedio que tuvo fue: "+resultadoPromedio.toFixed(2))
    }
}

Promedio(); 


