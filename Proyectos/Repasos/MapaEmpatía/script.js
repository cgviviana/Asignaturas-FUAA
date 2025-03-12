const flashcards = [
    { front: "¿Qué es un Mapa de Empatía?", back: "Es una herramienta para comprender mejor a los usuarios o clientes." },
    { front: "¿Para qué sirve?", back: "Ayuda a visualizar las necesidades, motivaciones y preocupaciones de un usuario." },
    { front: "¿Cómo se usa?", back: "Se divide en secciones como qué piensa, qué siente, qué dice y qué hace un usuario." },
    { front: "¿Cuándo se usa?", back: "Al desarrollar productos, servicios o estrategias centradas en el usuario." },
    { front: "¿Quién lo usa?", back: "Equipos de diseño, marketing, negocios y UX (experiencia de usuario)." },
    { front: "Sección 1: ¿Qué piensa y siente?", back: "Identifica sus preocupaciones, motivaciones y frustraciones." },
    { front: "Sección 2: ¿Qué escucha?", back: "Analiza lo que escucha de amigos, expertos y medios." },
    { front: "Sección 3: ¿Qué dice y hace?", back: "Evalúa sus palabras, comportamiento y acciones." },
    { front: "Sección 4: ¿Qué ve?", back: "Determina qué observa en su entorno, mercado y competencia." },
    { front: "Ejemplo de uso", back: "Crear una estrategia de marketing enfocada en las emociones del cliente." }
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
