const images = ['../img/plato2.jpg', '../img/plato.jpg', '../img/platot.jpg'];

const portada = document.querySelector('.portada');
let index = 0;

function cambiarFondo() {
    portada.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
}

setInterval(cambiarFondo, 4000);
