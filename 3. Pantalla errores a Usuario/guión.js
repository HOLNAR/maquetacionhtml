const errorMessage = document.getElementById('errorMessage');
const retryButton = document.getElementById('retryButton');

const randomError = Math.random() < 0.5;

if (randomError) {
    errorMessage.textContent = 'Se produjo un error inesperado. Por favor, inténtelo de nuevo más tarde.';
} else {
    errorMessage.textContent = 'No se pudo establecer conexión con el servidor. Verifique su conexión a Internet y reinténtelo.';
}
retryButton.addEventListener('click', function() {
    window.location.reload();
});