function renderizarCarrito(carrito){
    /*Funcion renderizarCarrito*/ 
    const contenedor = document.getElementById("pedido-container");
    if (contenedor) {
        contenedor.innerHTML = "";
        console.log("ENTRÉ A RENDERIZAR CARRITO");
        carrito.forEach((producto) => {
            contenedor.innerHTML+= `
                <div class="products-container">
                    <img class="product" src="${producto.imagen}" alt="producto">
                    <div class="product-info">
                        <h3>${producto.nombre}</h3>
                            <div class="cantidad-buttons">    
                                <div>        
                                    <button class="cantidad-button" onclick="restarCantidad(${producto.id})">-</button>
                                    <input class="cantidad" type="text" value="${producto.cantidad}"/>
                                    <button class="cantidad-button" onclick="sumarCantidad(${producto.id})">+</button>
                                </div>
                                <button class="btn-eliminar-producto"><img class="img-eliminar-producto" src="./src/assets/images/eliminar.png" alt="boton-eliminar"></button>
                            </div>
                        <p class="product-price">${producto.precio}</p>
                    </div>
                </div>
            `;
        });
        contenedor.innerHTML+=`
            <div class="products-total">
                <h3>Total:________$${calcularTotal(carrito)}</h3>
                <button class="boton" onclick="enviarPedido()">Enviar pedido <img class="img-enviar-pedido" src="./src/assets/images/whatsapp.png" alt="img-whatsapp"></button>
            </div>
        `    
    }
}
function calcularTotal(carrito){
    let total = 0;
    carrito.forEach((producto) => {
        total+= parseInt(producto.precio) * producto.cantidad;
    });
    return total;

}

function enviarPedido(){
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let mensaje = "Hola, buenos días, quiero hacer un pedido:\n";

    carrito.forEach(producto => {
        mensaje += `-Producto: ${producto.nombre}\n`;
        mensaje += ` Precio: $${producto.precio}\n`;
        mensaje += ` Cantidad: ${producto.cantidad}\n\n`;

        mensaje += `Total: $${calcularTotal(carrito)}`;
    });

    const mensajeFormateado = encodeURIComponent(mensaje);
    const numero = "1136848154";
    window.open(`https://wa.me/${numero}?text=${mensajeFormateado}`, "_blank");
}
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
renderizarCarrito(carrito);
