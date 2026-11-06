function conntarVocales()
{
    let palabra = prompt("Ingrese una palabra");
    let minusPala = palabra.toLowerCase();
    let contarVocales = 0;
    for(let i = 0; i < minusPala.length; i++)
    {
       if("aeiouáéíóú".includes(minusPala[i]))
       {
        contarVocales++;
       }
    }
    alert("La palabra es " + minusPala + "\ny la cantidad de vocales que contiene es: " + contarVocales);
}

conntarVocales();

