console.log("Solo existen cambios de USD a MXN o de MXN a USD ")
const pesoMexicano=new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN"});
const dolarEstadoUnidense=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});

function calcularCambio(cantidad,monedaOrigen,monedaCambiar)
{
   let monedaDeOrigen=monedaOrigen.trim().toUpperCase()
   let monedaAcambiar=monedaCambiar.trim().toUpperCase()
   let dinero=Number(cantidad);
   
   if(monedaDeOrigen==="MXN" && monedaAcambiar==="USD")
   {
    return dolarEstadoUnidense.format(dinero*0.054);
   }
   else if(monedaDeOrigen==="USD" && monedaAcambiar==="MXN")
   {
    return pesoMexicano.format(dinero*18.5);
   }
   else if(monedaDeOrigen==="MXN"&&monedaAcambiar==="MXN")
   {
    return pesoMexicano.format(dinero);
   }
   else if(monedaDeOrigen==="USD"&&monedaAcambiar==="USD")
   {
    return dolarEstadoUnidense.format(dinero);
   }
   else
   {
    return "Monedas no válidas";
   }
}


function describirCambio(cantidad,monedaOrigen,monedaCambiar)
{
    let  resultadoCalculo=calcularCambio(cantidad,monedaOrigen,monedaCambiar);
    return `La moneda de origen es: ${monedaOrigen.toUpperCase().trim()}\nLa moneda a la que se desea cambiar es: ${monedaCambiar.toUpperCase().trim()}\nLa cantidad que se desea cambiar es: $${cantidad+monedaOrigen.toUpperCase().trim()}\nLa cantidad de dinero que va a recibir es: ${resultadoCalculo} `
}

console.log(describirCambio(10," usd "," mxn "));
