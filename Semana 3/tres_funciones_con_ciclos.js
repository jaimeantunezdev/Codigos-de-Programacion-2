function sumaDigitos(n)
{
    let numero=n;
    let suma=0;
    while (numero > 0) 
    {
    let digito = numero % 10; 
    suma += digito;           
    numero = Math.trunc(numero / 10); 
    }
    return suma;
}
console.log(sumaDigitos(1234))

function mcd(a, b) 
{
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const residuo = a % b;
    a = b;
    b = residuo;
  }

  return a;
}

console.log(mcd(48, 18));
console.log(mcd(7, 13));



function aniosParaDuplicar(monto, tasa = 7) 
{

  const objetivo = monto * 2;
  let saldoActual = monto;
  let anios = 0;

  while (saldoActual < objetivo) 
  {
    saldoActual += saldoActual * (tasa / 100);
    anios++;
  }

  return anios;
}

console.log(aniosParaDuplicar(1000));     
console.log(aniosParaDuplicar(500, 10));  

