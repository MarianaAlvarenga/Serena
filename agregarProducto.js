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
                productoExistente.cantidad++;

                numProducto = productoExistente.cantidad;
        } else {
            producto.cantidad = 1; 
            numProducto = producto.cantidad;
            carrito.push(producto);
            console.log("Cantidad de este producto: ", producto.cantidad);
            console.log("id del producto: ", producto.id);
        }

        
        localStorage.setItem("carrito", JSON.stringify(carrito));
    })

})