// Configuración inicial
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = [];
const mensajeElement = document.getElementById('mensaje');
const intentosElement = document.getElementById('intentos');

// Función principal
function adivinarNumero() {
    const input = prompt("Ingresa un número entre 1 y 100:");
    
    // Si el usuario cancela
    if (input === null) {
        mensajeElement.innerHTML = "<p>Juego terminado. El número era: " + numeroSecreto + "</p>";
        return;
    }
    
    const numero = parseInt(input);
    
    // Validaciones
    if (isNaN(numero)) {
        mensajeElement.innerHTML = "<p>Error: Debes ingresar un número válido</p>";
        adivinarNumero();
        return;
    }
    
    if (numero < 1 || numero > 100) {
        mensajeElement.innerHTML = "<p>Error: El número debe estar entre 1 y 100</p>";
        adivinarNumero();
        return;
    }
    
    // Agregar intento
    intentos.push(numero);
    
    // Verificar si acertó
    if (numero === numeroSecreto) {
        mensajeElement.innerHTML = "<p>¡Felicidades! Adivinaste el número " + numeroSecreto + "</p>";
        mostrarIntentos();
    } else {
        // Mostrar pista
        const pista = numero < numeroSecreto ? "MAYOR" : "MENOR";
        mensajeElement.innerHTML = `<p>Incorrecto. El número secreto es ${pista} que ${numero}</p>`;
        adivinarNumero();
    }
}

// Mostrar lista de intentos
function mostrarIntentos() {
    let html = "<h3>Tus intentos:</h3><ul>";
    intentos.forEach(intento => {
        html += `<li>${intento}</li>`;
    });
    html += "</ul>";
    intentosElement.innerHTML = html;
}

// Iniciar juego
adivinarNumero();