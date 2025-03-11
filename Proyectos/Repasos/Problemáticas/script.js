const flashcards = [
    { front: "¿Qué es un problema caótico?", back: "Es un problema sin patrones predecibles, donde cualquier acción puede generar cambios drásticos. Ejemplo: una crisis económica súbita." },
    { front: "¿Qué es un problema complejo?", back: "Tiene múltiples variables interconectadas y no hay una única solución correcta. Ejemplo: la educación de un país." },
    { front: "¿Qué es un problema complicado?", back: "Se requiere de expertos y análisis técnico para resolverlo, pero hay una solución definida. Ejemplo: construir un avión." },
    { front: "¿Qué es un problema simple?", back: "Tiene reglas claras y una solución fácil de aplicar. Ejemplo: seguir una receta de cocina." },
    { front: "Ejemplo de problema caótico", back: "Una pandemia global, donde el comportamiento del virus es impredecible y cambia constantemente." },
    { front: "Ejemplo de problema complejo", back: "El cambio climático: hay muchas causas y soluciones, pero no una única forma de resolverlo." },
    { front: "Ejemplo de problema complicado", back: "Reparar un motor de automóvil: hay pasos técnicos definidos y un experto puede solucionarlo." },
    { front: "Ejemplo de problema simple", back: "Organizar una lista de invitados para una fiesta con reglas establecidas." },
    { front: "¿Cómo se gestionan problemas caóticos?", back: "Requieren decisiones rápidas y experimentación para encontrar posibles soluciones." },
    { front: "¿Cómo se gestionan problemas complejos?", back: "Se necesita colaboración, adaptabilidad y evaluación constante de resultados." }
];

const container = document.querySelector('.flashcard-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentCard = 0;

// Función para mostrar la tarjeta actual
function showFlashcard(index) {
    container.innerHTML = `
        <div class="flashcard" onclick="flipCard(this)">
            <div class="card">
                <div class="front">${flashcards[index].front}</div>
                <div class="back">${flashcards[index].back}</div>
            </div>
        </div>
    `;
}

// Girar la tarjeta
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Botón siguiente
nextBtn.addEventListener('click', () => {
    currentCard = (currentCard + 1) % flashcards.length;
    showFlashcard(currentCard);
});

// Botón anterior
prevBtn.addEventListener('click', () => {
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
    showFlashcard(currentCard);
});

// Mostrar la primera tarjeta al cargar
showFlashcard(currentCard);
