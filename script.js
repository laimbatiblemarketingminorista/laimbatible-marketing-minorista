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

// Preguntas de usuarios
const formPregunta = document.getElementById("form-pregunta");
formPregunta.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const pregunta = document.getElementById("pregunta").value;
    const lista = document.getElementById("lista-preguntas");
    const div = document.createElement("div");
    div.innerHTML = `<p><strong>${nombre}:</strong> ${pregunta}</p>`;
    lista.appendChild(div);
    formPregunta.reset();
});

// Formulario de contacto
const formContacto = document.getElementById("form-contacto");
formContacto.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("contacto-nombre").value;
    const mensaje = document.getElementById("contacto-mensaje").value;
    const confirmacion = document.getElementById("confirmacion-contacto");
    confirmacion.innerHTML = `<p>Gracias, <strong>${nombre}</strong>. Tu mensaje fue enviado correctamente.</p>`;
    formContacto.reset();
});

// Formulario de pago
const formPago = document.getElementById("form-pago");
formPago.addEventListener("submit", (e) => {
    e.preventDefault();
    const confirmacion = document.getElementById("confirmacion-pago");
    confirmacion.innerHTML = `<p>Gracias por tu compra, ${document.getElementById("nombre-pago").value}. Total: $${carrito.reduce((acc, p) => acc + p.precio, 0)}</p>`;
    carrito = [];
    actualizarCarrito();
    formPago.reset();
});

// Inicializar productos al cargar
mostrarProductos();

