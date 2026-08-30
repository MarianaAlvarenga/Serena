
function activarBotonesEliminar() {
    const BotonesEliminarProducto = document.querySelectorAll(".btn-eliminar-producto");
    BotonesEliminarProducto.forEach((boton, indice)=>{
        const carrito = JSON.parse(localStorage.getItem("carrito"));
        console.log(carrito);
        boton.addEventListener("click", ()=>{
            if (carrito[indice].cantidad === 1) {
                carrito.splice(indice, 1);
            } else {
                carrito[indice].cantidad--;
            }            
            localStorage.setItem("carrito", JSON.stringify(carrito));
            console.log(carrito);
            console.log("ANTES DE RENDERIZAR");
            renderizarCarrito(carrito);
            console.log("DESPUÉS DE RENDERIZAR");
            activarBotonesEliminar();
            console.log(carrito);
        })
        
    })
}
activarBotonesEliminar();