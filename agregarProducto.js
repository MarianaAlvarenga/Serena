const botonesGuardar = document.querySelectorAll(".agregar-pedido");

botonesGuardar.forEach((boton) =>{
    
    boton.addEventListener("click", ()=>{
        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        const producto = {
            nombre: boton.dataset.nombre,
            precio: boton.dataset.precio,
            imagen: boton.dataset.imagen
        }

        carrito.push(producto);
        
        console.log(carrito);
        
        localStorage.setItem("carrito", JSON.stringify(carrito));
    })

})