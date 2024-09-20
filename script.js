document.getElementById('image').addEventListener('click', function() {
    // Ocultar contenido principal
    document.getElementById('mainContent').style.display = 'none';

    // Mostrar el cuadro de video
    document.getElementById('videoContent').style.display = 'flex';

    // Agregar el enlace de YouTube al iframe
    document.getElementById('youtubeVideo').src = 'https://www.youtube.com/embed/TU_VIDEO_ID';
});
