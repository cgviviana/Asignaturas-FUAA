const flashcards = [
    { front: "¿Qué es la Propuesta de Valor?", back: "Es la promesa única de valor que una empresa ofrece a sus clientes." },
    { front: "¿Para qué sirve?", back: "Para diferenciarse en el mercado y atraer clientes potenciales." },
    { front: "¿Cómo se usa?", back: "Definiendo los beneficios clave que el producto o servicio ofrece al cliente." },
    { front: "¿Cuándo se usa?", back: "Cuando se desarrolla un producto o se busca posicionarlo en el mercado." },
    { front: "¿Quién la usa?", back: "Empresas, emprendedores y estrategas de marketing." },
    { front: "Elemento clave 1", back: "Debe ser clara y específica para el cliente objetivo." },
    { front: "Elemento clave 2", back: "Diferenciarse de la competencia con un beneficio único." },
    { front: "Elemento clave 3", back: "Comunicar el valor de manera efectiva en todos los canales." },
    { front: "Ejemplo de Propuesta de Valor", back: "'Entrega rápida y sin costo adicional en todos los pedidos'." },
    { front: "Otro ejemplo", back: "'La computadora más delgada y potente para profesionales creativos'." }
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
