let numeroDiapositiva = 1;
const totalDiapositivas = 20;

function cambiarDiapositiva(direccion) {
    numeroDiapositiva += direccion;

    if (numeroDiapositiva < 1) {
        numeroDiapositiva = totalDiapositivas;
    } else if (numeroDiapositiva > totalDiapositivas) {
        numeroDiapositiva = 1;
    }

    document.getElementById("slide").src = numeroDiapositiva + ".jpg";
    document.getElementById("contador").textContent = numeroDiapositiva + " / " + totalDiapositivas;
}
