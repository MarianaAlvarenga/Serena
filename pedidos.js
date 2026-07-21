const contenedor = document.getElementById("pedido-container");

const carrito = JSON.parse(localStorage.getItem("carrito"))|| [];
let total = 0;
carrito.forEach((producto) => {
    total+= parseInt(producto.precio);
    console.log(total);
    contenedor.innerHTML+= `
        <div class="products-container">
            <img class="product" src="${producto.imagen}" alt="producto">
            <div class="product-info">
                <h3>${producto.nombre}</h3>
                    <div class="cantidad-buttons">    
                        <div>        
                            <button class="cantidad-button">-</button>
                            <input class="cantidad" type="text"/>
                            <button class="cantidad-button">+</button>
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
        <h3>Total:________$${total}</h3>
        <button class="boton">Enviar pedido <img class="img-enviar-pedido" src="./src/assets/images/whatsapp.png" alt="img-whatsapp"></button>
    </div>
`