// Datos de ejemplo de productos con imágenes
const productos = [
    {id: 1, nombre: "Camiseta", precio: 20, categoria: "ropa", imagen: "images/camiseta.jpg"},
    {id: 2, nombre: "Gorra", precio: 10, categoria: "accesorios", imagen: "images/gorra.jpg"},
    {id: 3, nombre: "Almohada", precio: 15, categoria: "hogar", imagen: "images/almohada.jpg"},
    {id: 4, nombre: "Pantalón", precio: 25, categoria: "ropa", imagen: "images/pantalon.jpg"},
];

// Carrito
let carrito = [];

// Mostrar productos
function mostrarProductos(filtro="todos") {
    const lista = document.getElementById("lista-productos");
    lista.innerHTML = "";
    const filtrados = filtro === "todos" ? productos : productos.filter(p => p.categoria === filtro);
    filtrados.forEach(producto => {
        const div = document.createElement("div");
        div.className = "producto";
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})" class="btn-verde">Agregar al carrito</button>
        `;
        lista.appendChild(div);
    });
}

// Filtrar productos
document.getElementById("filtro-categoria").addEventListener("change", (e) => {
    mostrarProductos(e.target.value);
});

// Agregar al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
}

// Actualizar carrito
function actualizarCarrito() {
    document.getElementById("total-carrito").textContent = carrito.length;
}
