//DEL VALOR A LA FUNCION 
const operaciones={
    "+":(a,b)=>a+b,
    "-":(a,b)=>a-b,
    "*":(a,b)=>a*b,
    "/":(a,b)=>(b===0 ? "division entre cero":a/b),
    "^":(a,b)=>(a**b),
};

function calcular(a,op,b){
    const fn=operaciones[op];
    return fn ? fn(a,b):"operador desconocido";
}

console.log(calcular(8,"*",5)); //40
console.log(calcular(8,"/",0)); //division entre cero
console.log(calcular(8,"^",2)) //64