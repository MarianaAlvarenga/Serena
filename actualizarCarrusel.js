const slidesContainer = document.getElementById("slides-container");
const slides = document.querySelectorAll(".slide-product");
const distanciaSlides = ((slides[1].getBoundingClientRect().left)-(slides[0].getBoundingClientRect().left));
const numeroSlides = slides.length;
const botonAnterior = document.getElementById("boton-anterior");
const botonSiguiente = document.getElementById("boton-siguiente");

let posicionActual = 0;

function anterior(){
    if(posicionActual>0){
        posicionActual--;
        actualizarCarrusel();
    }
}

function siguiente(){
    if(posicionActual<numeroSlides-1){
        posicionActual++;
        actualizarCarrusel();
    }
}

function actualizarCarrusel(){
    const slidesContainer = document.getElementById("slider-container");

    slidesContainer.style.transform = `translateX(${distanciaSlides*posicionActual*(-1)}px)`;

    if (posicionActual == 0) {
      botonAnterior.style.display = "none";      
    } else {
      botonAnterior.style.display = "block";       
    }

    if (posicionActual == numeroSlides -1){
       botonSiguiente.style.display = "none";  
    } else {
       botonSiguiente.style.display = "block";  
    }
}