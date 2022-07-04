//punto 3
let texto = document.querySelector("#parrafo");
let boton1 = document.querySelector("#boton__1");
let boton2 = document.querySelector("#boton__2");

function pintar(color = "green"){
    parrafo.style.backgroundColor = color;
}

pintar();

parrafo.addEventListener("click", () => {
    if(parrafo.style.backgroundColor == "green") {
        pintar("yellow");
    }
    else {
        pintar("green");
    }
});

boton1.addEventListener("click", () => {
    window.location.assign("index.html");
});

boton2.addEventListener("click", () => {
    window.location.assign("4 divs.html");
});
