let boton1 = document.querySelector("#boton__1");
let boton2 = document.querySelector("#boton__2");
let caja1 = document.querySelector("#caja__1");
let caja2 = document.querySelector("#caja__2");
let caja3 = document.querySelector("#caja__3");
let caja4 = document.querySelector("#caja__4");
let color = "goldenrod";



document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = "red";
    } else if (event.key === 's') {
        color = "green"
    } else if (event.key === 'd') {
        color = "purple"
    }
});

const pintar = function(elemento){
    elemento.style.backgroundColor= color;
}


caja1.addEventListener("click", () => {
    pintar(caja1);
});

caja2.addEventListener("click", () => {
    pintar(caja2);
});

caja3.addEventListener("click", () => {
    pintar(caja3);
});

caja4.addEventListener("click", () => {
    pintar(caja4);
});


boton1.addEventListener("click", () => {
    window.location.assign("index.html");
});

boton2.addEventListener("click", () => {
    window.location.assign("3 pintar.html");
});


