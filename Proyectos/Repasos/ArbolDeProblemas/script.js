const flashcards = [
    { front: "¿Qué es un Árbol de Problemas?", back: "Es una herramienta de análisis que permite identificar causas y efectos de un problema." },
    { front: "¿Para qué sirve?", back: "Sirve para desglosar un problema en sus causas y consecuencias, facilitando su comprensión." },
    { front: "¿Cuándo se usa?", back: "Se usa en planificación estratégica, gestión de proyectos y análisis de problemas complejos." },
    { front: "¿Cómo se construye?", back: "Se identifican el problema central, las causas (raíces) y los efectos (ramas)." },
    { front: "Ejemplo de problema", back: "Desperdicio de Agua en los hogares de Bogotá ➝ Causas: Falta de educación ambiental, electrodomésticos obsoletos, desconocimiento de formatos de facturas ➝ Efectos: Baja concientización, Reparaciones constantes,Impacto económico ." },
    { front: "¿Cómo se usa en proyectos?", back: "Ayuda a definir estrategias de intervención con base en las causas identificadas." },
    { front: "Diferencia con Árbol de Objetivos", back: "El Árbol de Objetivos transforma problemas en soluciones deseadas." },
    { front: "Herramientas para su elaboración", back: "Mapas conceptuales, diagramas de flujo, software de gestión de proyectos." },
    { front: "Beneficios", back: "Mejora la toma de decisiones y permite diseñar soluciones efectivas." },
    { front: "Limitaciones", back: "Depende de la calidad de la información y puede ser subjetivo." }
];

const container = document.querySelector('.flashcard-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentCard = 0;

// Función para mostrar la tarjeta
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
