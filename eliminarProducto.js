
function activarBotonesEliminar() {
    //OBTENGO TODOS LOS BOTONES ELIMINAR
    const BotonesEliminarProducto = document.querySelectorAll(".btn-eliminar-producto"); 
    const carrito = JSON.parse(localStorage.getItem("carrito"));
    //PARA CADA BOTON, CAPTURO EL BOTON Y SU INDICE
    BotonesEliminarProducto.forEach((boton, indice)=>{
        //POR CADA BOTON, CREO UN CLICK
        boton.addEventListener("click", ()=>{
            if (carrito[indice].cantidad === 1) {
                carrito.splice([indice], 1);
            } else if (carrito[indice].cantidad > 1){
                carrito[indice].cantidad--;
            }          
            localStorage.setItem("carrito", JSON.stringify(carrito));
            renderizarCarrito(carrito);    
            console.log(carrito);
            if (document.getElementById("pedido-container")) {
                activarBotonesEliminar();             
            }
                
        })
        
    })
}
activarBotonesEliminar();