
const BotonesEliminarProducto = document.querySelectorAll(".btn-eliminar-producto");

console.log(BotonesEliminarProducto);
console.log(BotonesEliminarProducto.length);

BotonesEliminarProducto.forEach((boton, indice)=>{
    boton.addEventListener("click", ()=>{
        console.log(indice);
    })
})