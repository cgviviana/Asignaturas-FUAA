const quizData = [
    {
        question: "¿Qué es la creatividad?",
        options: ["La capacidad de generar ideas innovadoras", "Un talento exclusivo de artistas", "Una habilidad innata", "Un proceso automático"],
        answer: 0
    },
    {
        question: "¿Cuál de estas afirmaciones es verdadera sobre el cerebro y la creatividad?",
        options: ["La creatividad proviene del hemisferio derecho", "La corteza prefrontal organiza ideas y redes neuronales crean conexiones inesperadas", "La creatividad no tiene relación con el cerebro", "La sinapsis no influye en la creatividad"],
        answer: 1
    },
    {
        question: "¿Cuál de las siguientes NO es una estrategia para estimular la creatividad?",
        options: ["Aprender cosas nuevas", "Evitar cambios en la rutina", "Practicar resolución de problemas", "Analizar ejemplos de creatividad"],
        answer: 1
    },
    {
        question: "¿Qué diferencia hay entre Creatividad e innovación?",
        options: ["La Creatividad es la generación de nuevas ideas", "La innovación es aplicación de nuevas ideas o mejora productos y el Desarrollo implica crecimiento", "No hay diferencia", "El desarrollo es más importante"],
        answer: 1
    },
    {
        question: "¿Cuál de estos líderes revolucionó la tecnología?",
        options: ["Nelson Mandela", "Steve Jobs", "John Maxwell", "Julio Verne"],
        answer: 1
    },
    {
        question: "¿Por qué es importante la 'Destrucción creativa' en el emprendimiento?",
        options: ["Porque permite eliminar a la competencia", "Porque destruye la creatividad", "Porque redefine conceptos previos para innovar", "Porque se basa en la improvisación"],
        answer: 2
    },
    {
        question: "¿Qué habilidad es clave en el liderazgo?",
        options: ["Tener seguidores en redes", "Ser el más inteligente", "Saber influir y generar armonía", "No compartir conocimientos"],
        answer: 2
    },
    {
        question: "¿Cuál es un ejemplo de líder visionario?",
        options: ["Alguien que solo piensa en el corto plazo", "Bill Gates y su sistema operativo innovador", "Un empresario que copia modelos", "Un jefe que rechaza ideas nuevas"],
        answer: 1
    },
    {
        question: "¿Cómo se relaciona el proyecto de vida con la creatividad?",
        options: ["Un proyecto bien definido ayuda a innovar", "La creatividad no influye", "Solo los empresarios necesitan planificar", "No es necesario planificar"],
        answer: 0
    },
    {
        question: "¿Qué recomendación se menciona para fortalecer la creatividad?",
        options: ["Investigar casos de éxito", "Evitar la experimentación", "Limitarse a un solo campo", "Repetir siempre lo mismo"],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;
let username = "";
let correctAnswersList = [];

// Función para iniciar el test
function startQuiz() {
    username = document.getElementById("username").value.trim();
    if (username === "") {
        alert("Por favor, ingresa tu nombre antes de empezar.");
        return;
    }
    document.getElementById("start-container").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    document.getElementById("user-name").innerText = username;
    loadQuestion();
}

// Cargar pregunta
function loadQuestion() {
    document.getElementById("question-text").innerText = quizData[currentQuestion].question;
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    quizData[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(index, button);
        optionsContainer.appendChild(button);
    });

    document.getElementById("next-btn").style.display = "none";
}

// Verificar respuesta
function checkAnswer(index, button) {
    const correctIndex = quizData[currentQuestion].answer;

    if (index === correctIndex) {
        button.classList.add("correct");
        score++;
        correctAnswersList.push(quizData[currentQuestion].question);
    } else {
        button.classList.add("wrong");
    }

    document.querySelectorAll(".option").forEach(btn => btn.onclick = null);
    document.getElementById("next-btn").style.display = "block";
}

// Siguiente pregunta
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Mostrar resultados
function showResults() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");

    let scoreMessage = "";
    if (score === quizData.length) {
        scoreMessage = `¡Increíble ${username}! 🌟 Has acertado todas las preguntas.`;
    } else if (score >= quizData.length / 2) {
        scoreMessage = `¡Bien hecho ${username}! Has obtenido una buena puntuación.`;
    } else {
        scoreMessage = `No te preocupes ${username}, sigue practicando.`;
    }

    document.getElementById("result-message").innerText = scoreMessage;

    // Mostrar preguntas correctas
    const answerList = document.getElementById("correct-answers");
    answerList.innerHTML = "";
    correctAnswersList.forEach(question => {
        const listItem = document.createElement("li");
        listItem.innerText = question;
        answerList.appendChild(listItem);
    });

    // Escala de puntuación de 0 a 5
    let scaledScore = (score / quizData.length) * 5;
    document.getElementById("score-text").innerText = `Tu puntuación: ${scaledScore.toFixed(1)} / 5`;
}

// Reiniciar test
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    correctAnswersList = [];
    document.getElementById("result-container").classList.add("hidden");
    document.getElementById("start-container").classList.remove("hidden");
}
