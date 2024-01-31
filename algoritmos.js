const numeroQueResultaLaSuma = 10;
const cantidadDeProcedimientos = 6;

let lista = [];

let numero1 = parseInt(prompt("Dame un primer numero"));
let numero2 = parseInt(prompt("Dame un segundo numero"));
let numero3 = parseInt(prompt("Dame un tercer numero"));
let numero4 = parseInt(prompt("Dame un cuarto numero"));

lista.push(numero1);
lista.push(numero2);
lista.push(numero3);
lista.push(numero4);

Comparador();

function Comparador() {
    for (let i = 0; i < cantidadDeProcedimientos; i++) {
        for (let j = 0; j < cantidadDeProcedimientos; j++) {
            suma= lista[i]+lista[j];
        if (suma===numeroQueResultaLaSuma) {
            alert("La suma de dos números da 10");
            return;
        }
    }
}

    // Si no se encuentra ninguna coincidencia
    alert("La suma de dos números no da 10");
}
