const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
console.log(carrito);
function sumarCantidad (id) {
    const productoExistente = carrito.find((prod) => prod.id === id);
    productoExistente.cantidad++;
    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito(carrito);
}