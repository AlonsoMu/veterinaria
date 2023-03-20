function saludar(){
    alert("Hola querida mascota");
}

function presentarse(){
    alert("Te saluda Alonso Muñoz");
}

const botonSaludo = document.getElementById("saludo");
botonSaludo.addEventListener("click", presentarse);
