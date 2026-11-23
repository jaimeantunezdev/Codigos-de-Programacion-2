function diasDelMes(mes, anio = 2026) {
    const esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
    const estadoAnio = esBisiesto ? "es bisiesto" : "no es bisiesto";

    switch (mes) {
        case 1:
            return "Enero tuvo 31 dias en el " + anio + " (" + estadoAnio + ")";
        case 2:
            return "Febrero tuvo " + (esBisiesto ? 29 : 28) + " dias en el " + anio + " (" + estadoAnio + ")";
        case 3:
            return "Marzo tuvo 31 dias en el " + anio + " (" + estadoAnio + ")";
        case 4:
            return "Abril tuvo 30 dias en el " + anio + " (" + estadoAnio + ")";
        case 5:
            return "Mayo tuvo 31 dias en el " + anio + " (" + estadoAnio + ")";
        case 6:
            return "Junio tuvo 30 dias en el " + anio + " (" + estadoAnio + ")";
        case 7:
            return "Julio tuvo 31 dias en el " + anio + " (" + estadoAnio + ")";
        case 8:
            return "Agosto tuvo 31 dias en el " + anio + " (" + estadoAnio + ")";
        case 9:
            return "Septiembre tuvo 30 dias en el " + anio + " (" + estadoAnio + ")";
        case 10:
            return "Octubre tuvo 31 dias en el " + anio + " (" + estadoAnio + ")";
        case 11:
            return "Noviembre tuvo 30 dias en el " + anio + " (" + estadoAnio + ")";
        case 12:
            return "Diciembre tuvo 31 dias en el " + anio + " (" + estadoAnio + ")";
        default:
            return "Ese mes no existe: " + mes;
    }
}

console.log(diasDelMes(2, 2024)); 
console.log(diasDelMes(3, 1900));
console.log(diasDelMes(4));       



function calcular(a, op, b) 
{
    switch (op) {
        case "+":
            return "La suma es: " + (a + b);
        case "-":
            return "La resta es: " + (a - b);
        case "*":
            return "La multiplicacion es: " + (a * b);
        case "/":
            if (b === 0) return "division entre cero";
            return "La division es: " + (a / b);
        default:
            return "Operador desconocido";
    }
}

console.log(calcular(8, "*", 5));
console.log(calcular(8, "/", 0)); 
console.log(calcular(8, "^", 2)); 


function letra(nota)
{
    switch(true)
    {
        case nota>=90 && nota<=100:
        return "Usted tiene una A de calificacion";
        case nota>=80 && nota<90:
        return "Usted tiene una B de calificacion";
        case nota>=70 && nota<80:
        return "Usted tiene una C de calificacion";
        case nota<70 && nota >=0:
        return "Usted tiene una F de calificacion";
        default:
            return "No es una calificacion valida";    
    }
}
console.log(letra(85));
console.log(letra(90));
console.log(letra(70));
console.log(letra(69.9));
console.log(letra(-53));
