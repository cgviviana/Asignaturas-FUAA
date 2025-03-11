const flashcards = [
    { front: "¿Qué es Design Thinking?", back: "Es una metodología para resolver problemas mediante la creatividad y la innovación." },
    { front: "¿Para qué sirve Design Thinking?", back: "Sirve para encontrar soluciones centradas en el usuario de manera innovadora." },
    { front: "¿Cómo se usa Design Thinking?", back: "Se usa en fases: empatizar, definir, idear, prototipar y testear." },
    { front: "¿Cuándo se usa Design Thinking?", back: "Cuando se necesita una solución innovadora a un problema que se ha reducido a lo complejo más básico sin llegar a ser problemmática tan simple." },
    { front: "¿Quién usa Design Thinking?", back: "Lo usan empresas, diseñadores, educadores y emprendedores." },
    { front: "Fase 1: Empatizar", back: "Comprender a los usuarios a través de observación e investigación." },
    { front: "Fase 2: Definir", back: "Sintetizar la información y definir el problema a resolver." },
    { front: "Fase 3: Idear", back: "Generar muchas ideas posibles sin limitaciones." },
    { front: "Fase 4: Prototipar", back: "Crear versiones preliminares de la solución." },
    { front: "Fase 5: Testear", back: "Probar las soluciones con usuarios reales y mejorar." }
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
