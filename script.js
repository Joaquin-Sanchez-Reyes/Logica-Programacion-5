const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = [];

function adivinarNumero() {
    let inputUsuario = document.getElementById("inputNumero").value;
    let numeroIngresado = parseInt(inputUsuario);
    let mensaje = document.getElementById("mensaje");

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
        mensaje.innerText = "Por favor, ingresa un número válido entre 1 y 100.";
        return;
    }
    
    intentos.push(numeroIngresado);
    
    if (numeroIngresado === numeroSecreto) {
        mensaje.innerText = "Felicidades, adivinaste el número secreto!";
        document.getElementById("historial").innerText = "Números ingresados: " + intentos.join(", ");
    } else {
        mensaje.innerText = "Ups, el número secreto es incorrecto, vuelve a intentarlo.";
    }
}
