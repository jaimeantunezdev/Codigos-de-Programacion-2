//devuelve un arreglo de ventas con producto y precio.producto en minusculas sin acentos ni espacios sobrantes precio numerico mayor que cero se descarta lo vacio o invalido 
const registro ="Café: 35.50; té verde: 28 ;Pan Dulce:18.5; CAFÉ:35.5; galleta de avena: 22.10; Té Verde:28 ; Jugo de naranja: 40; pan dulce : 18.50; Café Americano: abc; galleta de avena:22.1; Jugo de Naranja:40 ; Sándwich:55.75; té verde: -10; ;15; Pan dulce:18.5; Café:35.5 ; Sándwich: 55.75 ; galleta de avena:";

function limpiarRegistros(texto) 
{
    let nuevosRegistros=texto.toLowerCase().split(";").map(p => p.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '')).filter(p => p !=="")
    let registrosValidos = nuevosRegistros.filter(p => !isNaN(parseFloat(p.split(":")[1])) && parseFloat(p.split(":")[1]) >= 0)
    return nuevosRegistros,registrosValidos
}
console.table(limpiarRegistros(registro))



function sumar(...precios)
{
    let suma = precios.reduce((acum, precio) => acum + precio, 0)
    return Number(suma.toFixed(2))  
}
let registrosValidos = limpiarRegistros(registro)

let precios = registrosValidos.map(r => parseFloat(r.split(":")[1]))

console.table(precios)

console.log("Total:", sumar(...precios).toFixed(2))



function resumenPorProducto(ventas)
{
    let resumen = {};

    ventas.forEach((venta) =>
    {
        let [producto, precio] = venta.split(":");

        producto = producto.trim();
        precio = parseFloat(precio);

        if (!resumen[producto])
        {
            resumen[producto] =
            {
                veces: 0,
                total: 0
            };
        }

        resumen[producto].veces++;
        resumen[producto].total += precio;
    });

    return Object.entries(resumen)
        .sort((a, b) =>
        {
            if (b[1].total !== a[1].total)
            {
                return b[1].total - a[1].total;
            }

            return a[0].localeCompare(b[0], "es");
        })
        .map(([producto, datos]) => ({
            producto,
            veces: datos.veces,
            total: Number(datos.total.toFixed(2))
        }));
}
console.log("Resumen por producto:");

console.table(resumenPorProducto(registrosValidos));


function descuento(precio, porcentaje = 15)
{
    return Number((precio - (precio * porcentaje / 100)).toFixed(2));
}



function aplicarATodos(lista, fn)
{
    return lista.map(fn);
}


// Obtener precios de los productos
let preciosPro = registrosValidos.map(r => Number(parseFloat(r.split(":")[1]).toFixed(2)))

console.log("Precios originales:");
console.table(preciosPro);

// Aplica el descuento del 15%
let preciosConDescuento = aplicarATodos(preciosPro, descuento);

console.log("Precios con descuento:");
console.table(preciosConDescuento);



function productoAlAzar(ventas)
{
    let productos = [...new Set(
        ventas.map(venta => venta.split(":")[0].trim())
    )];

    let indice = Math.floor(Math.random() * productos.length);

    return productos[indice];
}




let resumen = resumenPorProducto(registrosValidos);
let promocion = productoAlAzar(registrosValidos);

console.log("=== REPORTE FINAL ===");

resumen.forEach((producto) =>
{
    console.log(
        `${producto.producto} | vendidas: ${producto.veces} | ingreso: $${producto.total.toFixed(2)}`
    );
});

console.log(`Total general: $${sumar(...precios).toFixed(2)}`);
console.log(`Producto de la promoción: ${promocion}`);