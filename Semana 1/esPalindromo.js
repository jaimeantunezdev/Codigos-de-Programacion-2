function esPalindromo()
{
    let palabra=prompt("Ingrese una palabra")
    const sinAcentos=(txt)=>txt.normalize("NFD").replace(/[\u0300-\u0301]/g, "")
    let minusPala=sinAcentos(palabra.toLowerCase().replace(/\s+/g, ""));
    let palabraAlReves=""
    for(let i=minusPala.length-1;i>=0;i--)
    {
        palabraAlReves+=minusPala[i]
    }
    if(minusPala===palabraAlReves)
    {
        alert("Palabra escrita: "+minusPala+"\nPalabra invertida: "+palabraAlReves+"\nLa palabra "+minusPala+" es un palindromo");
    }
    else
    {
        alert("Palabra escrita: "+minusPala+"\nPalabra invertida: "+palabraAlReves+"\nLa palabra "+minusPala+" no es un palindromo");
    }

}
esPalindromo();
