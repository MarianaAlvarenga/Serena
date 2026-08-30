
console.log("Entre a eliminarProducto");

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
            renderizarCarrito(carrito); 
            activarBotonesEliminar();
            console.log(carrito);
        })
        
    })
}
activarBotonesEliminar();