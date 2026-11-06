const x=1234.5678;
x.toFixed(2) // "1234.57"
typeof(x).toFixed(2) //string
Number(x.toFixed(2)) //1234.57
(255).toString(2) //11111111
const peso=new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN"});
peso.format(x) //$1,234.57

Math.round(2.5) // se redondea para arriba 3.Si se quiere quitar el decimal se usa trunc
Math.round(-2.5) // si es negativo se redondea para abajo 2

0.1+0.2 //0.3000000000000004
0.1+0.2===0.3 //false
