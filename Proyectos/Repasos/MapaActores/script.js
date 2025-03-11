const flashcards = [
    { front: "¿Qué es un Mapa de Actores?", back: "Es una herramienta que identifica a los actores clave en un proyecto o problema." },
    { front: "¿Para qué sirve?", back: "Sirve para analizar el impacto e influencia de cada actor en una situación específica." },
    { front: "¿Cómo se usa?", back: "Se categorizan los actores según su poder, interés e influencia en el proyecto." },
    { front: "¿Cuándo se usa?", back: "En la planificación de proyectos, estrategias empresariales y toma de decisiones." },
    { front: "¿Quién lo usa?", back: "Líderes de proyectos, empresas, gobiernos y organizaciones sociales." },
    { front: "Tipo de Actor: Primario", back: "Tienen un impacto directo en el proyecto. Ejemplo: clientes, empleados." },
    { front: "Tipo de Actor: Secundario", back: "No están directamente involucrados, pero pueden influir. Ejemplo: medios de comunicación." },
    { front: "Tipo de Actor: Clave", back: "Son los más importantes y pueden afectar el éxito del proyecto. Ejemplo: inversionistas, reguladores." },
    { front: "Ejemplo de Mapa de Actores", back: "En un hospital: médicos, pacientes, proveedores de insumos, gobierno." },
    { front: "Beneficio del Mapeo de Actores", back: "Permite mejorar la comunicación y gestión de relaciones estratégicas." }
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
