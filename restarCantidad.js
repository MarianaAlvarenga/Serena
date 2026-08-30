function restarCantidad (id) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const productoExistente = carrito.find((prod) => prod.id === id);
    productoExistente.cantidad--;

    localStorage.setItem("carrito", JSON.stringify(carrito));
    if (document.getElementById("pedido-container")) {
        renderizarCarrito(carrito);
    }
}