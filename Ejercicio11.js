function Sumar() {
    const num1 = parseFloat(prompt("Ingresa el primer número:"));     // Solicitar el primer número al usuario
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));     // Solicitar el segundo número al usuario
    const suma = num1 + num2; // Calcular la suma
    alert("La suma de " + num1 + " y " + num2 + " es: " + suma); // Mostrar el resultado al usuario
}
Sumar();
