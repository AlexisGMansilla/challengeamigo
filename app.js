// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del campo de entrada
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre válido");
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = "";
    
    // Actualizar la lista en la interfaz
    actualizarListaAmigos();
    
    // Limpiar cualquier resultado previo
    document.getElementById("resultado").innerHTML = "";
}

// Función para actualizar la lista visible de amigos
function actualizarListaAmigos() {
    // Obtener la referencia a la lista HTML
    const listaAmigos = document.getElementById("listaAmigos");
    
    // Limpiar la lista actual
    listaAmigos.innerHTML = "";
    
    // Recorrer el array y crear elementos de lista para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear");
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado en la interfaz
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>¡El amigo secreto es: ${amigoSorteado}!</li>`;
}

// Agregar event listener para poder usar la tecla Enter para agregar amigos
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});