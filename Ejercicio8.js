let i = parseFloat(prompt("Digite su primer número"));
let k = parseFloat(prompt("Digite su segundo número"));
let j = parseInt(prompt("Elige qué símbolo quieres: sumar 1, restar 2, multiplicar 3 o dividir 4"));

switch (j) {
    case 1:
        alert(i + k);
        break;
    case 2:
        alert(i - k);
        break;
    case 3:
        alert(i * k);
        break;
    case 4:
         alert(i / k);      
    default:
        alert("Operación no válida.");
        break;
}