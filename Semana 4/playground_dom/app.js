"use strict";

//const { act } = require("react");

/* ====================================================================
   PLAYGROUND · DOM y eventos  (Programación 2 · Semana 4)

   Cómo se usa
   1. Abre esta carpeta con Live Server y la consola del navegador (F12).
   2. Escribe tu código DENTRO de los bloques { ... } de cada ejercicio.
      Así dos ejercicios pueden usar el mismo nombre (por ejemplo
      "const lista") sin chocar entre sí.
   3. Los comentarios "// TODO" dicen qué se pide. Bórralos al terminar.
   4. Si la consola dice "Cannot read properties of null", imprime la
      búsqueda con console.log(...): casi siempre el id está mal escrito.
   5. Cada recarga deja la página como al principio. Si un ejercicio
      cambia el DOM, comenta el anterior antes de probar el siguiente.

   Este archivo se carga con defer: los elementos del HTML ya existen.
   ==================================================================== */

console.log("Playground cargado:", document.title);


/* ====================================================================
   DATOS · registro de acceso del laboratorio (semana 3)
   Es un solo texto capturado a mano: hay espacios de más, mayúsculas
   mezcladas, eventos vacíos, matrículas mal escritas y tipos que no existen.
   Está al principio y fuera de los bloques para que lo puedas usar desde cualquiera.
   ==================================================================== */
const registro = " 2024101:entrada;2024102 : Entrada;2024103:ENTRADA;;2024104:entrada ;2024101:salida;abc123:entrada;2024105:Entrada;  2024106 :entrada  ;2024102:SALIDA;2024107:baño;2024108:entrada;2024108:entrada;20241:entrada;2024109:Salida;2024110:entrada;;;2024103:salida;2024111;2024112 : ENTRADA ;20241130:entrada;2024104:salida;2024113:entrada;2024101:entrada;2024114:Comida;2024105:SALIDA ;  ;2024115:entrada;2024106:salida;2024116:entrada ;2024117:entrada;2024110:Salida;2024118:entrada;2024112:salida;2024119 :entrada;2024120:ENTRADA;2024121:entrada;2024113:SALIDA;2024122:entrada ;2024123:entrada";


/* ====================================================================
   LUNES 23 · ¿Qué es el DOM? y tipos de nodos
   ==================================================================== */

// 1. DevTools: cambia el texto del h1 desde app.js.
{
  // TODO: document.querySelector("h1").textContent = "otro";
}

// 2. Nodos: ¿por qué childNodes y children no miden lo mismo?
{
  // TODO: const ul = document.getElementById("lista");
  // TODO: imprime ul.childNodes.length, ul.children.length y ul.firstChild.nodeType
const ul=document.getElementById("lista");
console.log(ul.nodeType,ul.nodeName);

console.log(ul.childNodes.length,ul.children.length);

console.log(ul.firstChild.nodeType);

console.log(ul.firstElementChild.textContent);
}

// 3. Navegar el árbol desde el elemento con la clase "activo".
{
  // TODO: imprime su hermano anterior, su hermano siguiente y su padre.
  // Pista: previousElementSibling, nextElementSibling, parentElement, closest("ul")
  const activo=document.querySelector(".activo");
  console.log(activo.previousElementSibling.textContent);

  console.log(activo.nextElementSibling.textContent);

  console.log(activo.parentElement.id);

  console.log(activo.closest("ul").tagName);

  console.log(document.querySelector("#lista .activo").textContent);

  console.log(document.querySelectorAll("li").length);

  console.log(document.getElementById("nada"));

  document.getElementById("nada").textContent;

  document.addEventListener("DOMContentLoaded",() => {});
  
  const caja=document.getElementById("caja");
  caja.textContent="<img src=x onerroralert(1)>";
  console.log(caja.innerHTML);
}


/* ====================================================================
   MARTES 24 · Seleccionar, contenido y crear nodos
   ==================================================================== */

// 4. Predice antes de ejecutar (casos A a D de la diapositiva).
{
  // TODO: pega aquí un caso, predice la salida y compárala con la consola.
  //A
  const v=document.getElementsByTagName("li");
  const f=document.querySelectorAll("li");
  document.querySelector("li").remove();
  console.log(v.length,f.length);
  /*
  v se actualiza sola (colección viva) y f queda como lista estatica, se borra el primer <li> 
  y ves que v.length baja 1 mientras f.length no cambia
  */

  //B
  const a=document.querySelector(".activo");
  console.log(a.nextElementSibling.textContent);
  console.log(a.closest("ul").id);
  /*
  Agarra el primer .activo, lee el texto del siguiente elemento hermano y sube por el árbol buscando el 
  <ul> padre más cercano para sacar su id
  */ 

  //C
  const h=document.getElementsByTagName("hi");
  console.log(h.nextElementSibling.tagName);
  console.log(h.nextElementSibling.nodeType);
  /*
  Tira TypeError y el getElementsByTagName regresa una colección, no un nodo suelto, así que h.nextElementSibling 
  es undefined y al pedir .tagName revienta
  */

  //D
  const c=document.getElementById("caja");
  c.textContent="<b>x</b>";
  const b=c.children.length;
  c.innerHTML="<b>x</b>";
  console.log(b,c.children.length);

  /*
  Primero mete "<b>x</b>" como texto literal, así que no hay hijos (b = 0) 
  luego lo parsea como etiqueta HTML <b>, creando un hijo real, y al final imprime 0 1
  */ 
}

// 5. Taller: tres funciones que construyen.
//    crearItem(texto, clase = "")   -> devuelve un <li> (no lo inserta)
//    llenarLista(lista, textos)     -> agrega un <li> por texto con un fragmento y devuelve cuántos agregó
//    tablaDeNotas(alumnos)          -> devuelve una <table>; la fila con calif < 6 lleva la clase "reprueba"
//    Todo texto entra con textContent, nunca con innerHTML.
{
  // TODO: function crearItem(texto, clase = "") { ... }
  // TODO: function llenarLista(lista, textos) { ... }
  // TODO: function tablaDeNotas(alumnos) { ... }

  // Pruebas: la lista de la página base ya tiene 3 elementos.
  // llenarLista(document.getElementById("lista"), ["a", "b"]);   // debe devolver 2 y dejar 5
  // const t = tablaDeNotas([{ nombre: "Ana", calif: 9 }, { nombre: "Beto", calif: 5 }]);
  // document.getElementById("tabla-destino").append(t);          // Beto sale en rojo
}


/* ====================================================================
   MIÉRCOLES 25 · Atributos, classList, style y data-*
   ==================================================================== */

// 6. Predice antes de ejecutar (casos A a D de la diapositiva).
{
  // TODO: value contra getAttribute("value"), checked contra hasAttribute("checked"), toggle...
}

// 7. Taller: tres funciones que cambian la página.
//    alternarTema()                   -> alterna la clase "oscuro" en body y devuelve si quedó puesta
//    mostrarOcultar(id)               -> alterna hidden del elemento; devuelve si quedó visible, o null si no existe
//    dato(id, clave, valor = "n/d")   -> guarda valor en data-clave y devuelve lo guardado (siempre texto)
{
  // TODO: function alternarTema() { ... }
  // TODO: function mostrarOcultar(id) { ... }
  // TODO: function dato(id, clave, valor = "n/d") { ... }

  // Pruebas en la consola: alternarTema(), mostrarOcultar("caja"), dato("caja", "usuarioId", 42)
}


/* ====================================================================
   JUEVES 26 · Eventos
   ==================================================================== */

// 8. Predice antes de ejecutar (casos A a D de la diapositiva). Usa btn y lista.
{
  // TODO: comprueba la trampa de los paréntesis y el burbujeo.
}

// 9. Taller: contador, tema y detalle (zona "Contador, tema y detalle").
//    ids: menos, mas, num  |  tema  |  det, detalle
//    - El contador no baja de 0 y el número entra con textContent.
//    - El botón de tema alterna la clase "oscuro" en body (el CSS ya existe).
//    - El botón de detalle muestra u oculta el párrafo con hidden
//      y cambia su propio texto entre "Mostrar" y "Ocultar".
{
  // TODO: let n = 0;
  // TODO: document.getElementById("mas").addEventListener("click", ...);
}

// 10. Delegación: un solo escuchador en la lista de la página base.
{
  // TODO: lista.addEventListener("click", (e) => { const li = e.target.closest("li"); ... });
}


/* ====================================================================
   VIERNES 27 · Formularios y validación
   ==================================================================== */

// 11. Taller: validarRegistro(nombre, edad)  (función pura: no toca el DOM)
//     Devuelve "Falta el nombre", "Edad entre 1 y 120" o "Bienvenido, <nombre>".
//     Recuerda: la edad llega como texto; Number("") es 0.
{
  // TODO: function validarRegistro(nombre, edad) { ... }
  // Casos: ("", "20")  ("Ana", "150")  ("Ana", "")  ("Ana", "abc")  ("Ana", "0")  ("Ana", "1")  ("Ana", "120")  ("Ana", "121")
}

// 12. El formulario #reg: preventDefault, llama a validarRegistro y muestra
//     el resultado en #mensaje con textContent. Clase "error" o "ok" con
//     classList.toggle(clase, condición).
{
  // TODO: document.getElementById("reg").addEventListener("submit", (e) => { e.preventDefault(); ... });
}


/* ====================================================================
   TALLER · Lista dinámica (base de la Tarea 4)
   ids: nuevo, agregar, aviso, tareas, pend
   - No acepta texto vacío (aviso con textContent).
   - Crea el li, limpia el campo y devuelve el foco con focus().
   - Un solo escuchador en #tareas: clic alterna "hecho"; el botón × borra.
   - El texto "n pendientes" se actualiza con cada cambio ("1 pendiente" en singular).
   Prueba con: Leer, Escribir y <b>x</b> (debe verse como texto).
   ==================================================================== */
{
  // TODO
}


/* ====================================================================
   RETO · El laboratorio, ahora en pantalla
   ids: lab-form, matricula, lab-msg, lab-cont, dentro
   Reutiliza tus funciones de la semana 3: esMatriculaValida, decidirAcceso,
   limpiarEventos y quienEstaDentro. Pégalas aquí dentro del bloque.
   Capacidad: 12.
   1. dibujar(dentro)   -> un li por matrícula con botón Salir (data-matricula) y el contador "n / 12"
   2. registrar         -> submit, preventDefault, decidirAcceso y mensaje con textContent
   3. salir             -> un solo escuchador en #dentro (delegación y dataset)
   4. estado visual     -> clase "lleno" en el contador; "ok" o "error" en el mensaje
   5. arranque          -> la lista inicial sale de quienEstaDentro(limpiarEventos(registro))
   ==================================================================== */
{
  // TODO
}


/* ====================================================================
   ZONA LIBRE
   Practica aquí lo que quieras. Los elementos #libre y #tabla-destino
   están vacíos para que construyas sin tocar los demás ejercicios.
   ==================================================================== */
{
  // TODO
}


