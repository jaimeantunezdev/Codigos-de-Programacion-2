let espacios = "";
const filas = 5;

for (let i = 0; i < filas; i++) {
    for (let j = 0; j < filas - 1 - i; j++) {
        espacios += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        espacios += "*";
    }
    espacios += "\n";
}

console.log(espacios);
