"use strict";

const valores ="2024101:entrada;2024102 : Entrada;2024103:ENTRADA;;2024104:entrada ;2024101:salida;abc123:entrada;2024105:Entrada;  2024106 :entrada  ;2024102:SALIDA;2024107:baño;2024108:entrada;2024108:entrada;20241:entrada;2024109:Salida;2024110:entrada;;;2024103:salida;2024111;2024112 : ENTRADA ;20241130:entrada;2024104:salida;2024113:entrada;2024101:entrada;2024114:Comida;2024105:SALIDA ;  ;2024115:entrada;2024106:salida;2024116:entrada ;2024117:entrada;2024110:Salida;2024118:entrada;2024112:salida;2024119 :entrada;2024120:ENTRADA;2024121:entrada;2024113:SALIDA;2024122:entrada ;2024123:entrada";

let pares = [];


function limpiarEventos(texto) 
{
    let valoresLimpios = texto.replaceAll(" ", "").trim().toLowerCase().split(/;|:/).filter((p) => p !== "");
    for (let i = 0; i < valoresLimpios.length; i += 2) 
    {
        const matricula = valoresLimpios[i];
        const evento = valoresLimpios[i + 1];

        if ((Number(matricula) && matricula.length === 7 && !Number(evento) && evento === "entrada") ||evento === "salida") 
            {
            pares.push({ matricula, evento });
            }
    }
    return pares;
}

function esMatriculaValida(matricula) 
{
    return typeof matricula === "string" && /^\d{7}$/.test(matricula.trim());
}


const quienEstaDentro = (eventos) => {
    const dentro = [];

    for (const ev of eventos) 
    {
        const idx = dentro.indexOf(ev.matricula);

        if (ev.evento === "entrada") 
        {
            if (idx === -1) 
            {
                dentro.push(ev.matricula);
            }
        } else if (ev.evento === "salida") 
            {
            if (idx !== -1) 
            {
                dentro.splice(idx, 1);
            }
        }
    }

    return dentro;
};

function decidirAcceso(matricula, dentro, capacidad = 20) 
{
    const matLimpia = typeof matricula === "string" ? matricula.trim() : "";

    if (!esMatriculaValida(matLimpia)) 
    {
        return "matrícula inválida";
    }
    if (Array.isArray(dentro) && dentro.includes(matLimpia)) 
    {
        return "ya está dentro";
    }
    if (Array.isArray(dentro) && dentro.length >= capacidad) 
    {
        return "laboratorio lleno";
    }

    return "acceso permitido";
}


function pedirMatricula(respuestas) {
    if (!Array.isArray(respuestas) || respuestas.length === 0)
    {
        return null;
    }

    let i = 0;
    let encontrada = null;

    do {
        const candidata = typeof respuestas[i] === "string" ? respuestas[i].trim() : "";
        if (esMatriculaValida(candidata)) 
        {
            encontrada = candidata;
            break;
        }
        i++;
    } while (i < respuestas.length);

    return encontrada;
}


function mapaDeAsientos(filas, columnas, ocupados = []) 
{
    const setOcupados = new Set(ocupados.map((n) => Number(n)));
    const lineas = [];
    let numeroAsiento = 1;

    for (let f = 0; f < filas; f++) 
    {
        const filaAsientos = [];
        for (let c = 0; c < columnas; c++) 
        {
            if (setOcupados.has(numeroAsiento)) 
            {
                filaAsientos.push("XX");
            } 
            else 
            {
                filaAsientos.push(String(numeroAsiento).padStart(2, "0"));
            }
            numeroAsiento++;
        }
        lineas.push(filaAsientos.join(" "));
    }

    return lineas.join("\n");
}

const eventosLimpios = limpiarEventos(valores);
console.log("1. Eventos limpios:", eventosLimpios);

const dentroFinal = quienEstaDentro(eventosLimpios);
console.log("2. Quiénes están dentro:", dentroFinal);

console.log("3. Decidir acceso:", decidirAcceso("2024199", dentroFinal, 20));
console.log("4. Pedir matrícula:", pedirMatricula(["mal", "12", "2024150"]));
console.log("5. Mapa de asientos:\n" + mapaDeAsientos(3, 5, [2, 7, 15]));