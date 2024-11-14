let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


//carrucel
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los carruseles en la página
    const carousels = document.querySelectorAll('.proyecto');

    carousels.forEach((carousel) => {
        const inner = carousel.querySelector('.carousel-inner');
        const prev = carousel.querySelector('.carousel-prev');
        const next = carousel.querySelector('.carousel-next');
        const images = inner.querySelectorAll('img');
        
        let currentIndex = 0;
        const totalImages = images.length;

        // Actualizar el ancho de las imágenes dinámicamente
        function updateImageWidth() {
            return images[0].clientWidth; // Ancho de una imagen
        }

        // Función para actualizar la posición del carrusel
        function updateCarousel() {
            const imgWidth = updateImageWidth();
            inner.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
        }

        // Evento para el botón 'prev' (anterior)
        prev.addEventListener('click', (event) => {
            event.preventDefault();
            currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
            updateCarousel();
        });

        // Evento para el botón 'next' (siguiente)
        next.addEventListener('click', (event) => {
            event.preventDefault();
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
        });

        // Función de automatización del carrusel
        function startAutoSlide() {
            setInterval(() => {
                currentIndex = (currentIndex + 1) % totalImages;
                updateCarousel();
            }, 5000); // Cambia de imagen cada 5 segundos
        }

        // Iniciar la automatización del carrusel individual
        startAutoSlide();

        // Actualizar el carrusel en caso de que cambie el tamaño de la ventana
        window.addEventListener('resize', updateCarousel);
    });
});




//función google Traslate

