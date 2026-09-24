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
                <button class="boton">Enviar pedido <img class="img-enviar-pedido" src="./src/assets/images/whatsapp.png" alt="img-whatsapp"></button>
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
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
renderizarCarrito(carrito);
