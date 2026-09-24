const botonesGuardar = document.querySelectorAll(".agregar-pedido");

botonesGuardar.forEach((boton, indice) =>{
    boton.addEventListener("click", ()=>{
        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        let numProducto = 0;
        const producto = {
            nombre: boton.dataset.nombre,
            precio: boton.dataset.precio,
            imagen: boton.dataset.imagen,
            cantidad: numProducto,
            id: indice
        }
        const productoExistente = carrito.find((prod) => prod.id === indice);
        if(productoExistente){
            console.log("Producto existente");
            sumarCantidad(productoExistente.id);
        } else {
            producto.cantidad = 1; 
            numProducto = producto.cantidad;
            carrito.push(producto);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            actualizarMarcador();
        }
        
    })

})