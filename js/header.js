const nav = document.getElementById("nav");
const btnMostrar = document.getElementById("mostrar");
btnMostrar.addEventListener("click", () => {
    nav.style.display = "block";
})

const btnCloss = document.getElementById("ocultar");
btnCloss.addEventListener("click", () => {
    nav.style.display = "none";
});