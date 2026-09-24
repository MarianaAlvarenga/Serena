function actualizarMarcador(){
    console.log("ACTUALIZANDO MARCADOR");
    const marcador = document.getElementById("marcador");
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let suma = 0; 

    console.log("CARRITO:", carrito);
    console.log("CANTIDAD DE PRODUCTOS:", carrito.length);

    carrito.forEach((element) => {
        suma = suma + element.cantidad;
        console.log (suma);
    });

    marcador.textContent = suma;
}
actualizarMarcador();