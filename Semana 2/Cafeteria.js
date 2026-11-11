//devuelve un arreglo de ventas con producto y precio.producto en minusculas sin acentos ni espacios sobrantes precio numerico mayor que cero se descarta lo vacio o invalido 
const registro = "Café: 35.50; té verde: 28 ;Pan Dulce:18.5; CAFÉ:35.5; galleta de avena: 22.10; Té Verde:28 ; Jugo de naranja: 40; pan dulce : 18.50; Café Americano: abc; galleta de avena:22.1; Jugo de Naranja:40 ; Sándwich:55.75; té verde: -10; ;15; Pan dulce:18.5; Café:35.5 ; Sándwich: 55.75 ; galleta de avena:";

function limpiarRegistros(texto) 
{
    const ventas = [];

    for (const parte of texto.split(";")) 
    {
        const [nombre, valor] = parte.split(":");
        const producto = nombre.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const precio = parseFloat(valor);

        if (producto && precio >= 0) 
        {
            ventas.push({ producto, precio });
        }
    }

    return ventas;
}

function sumar(precios) 
{
    let total = 0;
    for (const precio of precios) 
    {
        total += precio;
    }
    return total;
}


function resumenPorProducto(ventas) {
    const resumen = {};

    for (const { producto, precio } of ventas) 
    {
        if (!resumen[producto]) 
        {
            resumen[producto] = { veces: 0, total: 0 };
        }
        resumen[producto].veces++;
        resumen[producto].total += precio;
    }

    return resumen;
}

function descuento(precio, porcentaje = 15) 
{
    return precio * (1 - porcentaje / 100);
}

function productoAlAzar(productos) 
{
    return productos[Math.floor(Math.random() * productos.length)];
}


const ventas = limpiarRegistros(registro);
const precios = ventas.map(v => v.precio);
const resumen = resumenPorProducto(ventas);

console.table(ventas);

console.log("=== REPORTE FINAL ===");
for (const producto in resumen) 
{
    const { veces, total } = resumen[producto];
    console.table(`${producto} | vendidas: ${veces} | ingreso: $${total.toFixed(2)}`);
}

console.log(`Total general: $${sumar(precios).toFixed(2)}`);
console.log("Precios con descuento:", precios.map(p => descuento(p).toFixed(2)));
console.log(`Producto de la promoción: ${productoAlAzar(Object.keys(resumen))}`);