
Swal.fire({
    title: 'Que edad tenes?',
    icon: 'question',
    input: 'range',
    inputLabel: 'Tu edad',
    inputAttributes: {
        min: 18,
        max: 120,
        step: 1
    },
    inputValue: 25
})


const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
document.getElementById("cart-total").innerHTML = `${carrito.length}  - $${total}`;


function generarCardsCarrito() {
    carrito.forEach((producto) => {
        document.getElementById("cards-modal").innerHTML += `<div>
            <p>
            - ${producto.nombre}
            - <img src="${producto.img}" style="width:30px">
            - $${producto.precio}
            - <button>Quitar Producto</button>
            </div>`
    })
}


const productos = [
    {
        id: 1001, 
        nombre: 'Matafuegos Polvo Quimico (1 kg.)',
        riesgo: 'incendio', 
        capacidad: '1 kilogramo', 
        precio: 1000,
        img: "https://www.georgia.com.ar/wp-content/uploads/2016/06/matafuegos_polvo_1kg.jpg",
    },
    {
        id: 1002, 
        nombre: 'Matafuegos Polvo Quimico (2,5 kg.)', 
        riesgo: 'incendio', 
        capacidad: '2,5 kilogramos', 
        precio: 2500,
        img: "https://www.georgia.com.ar/wp-content/uploads/2016/01/matafuegos_polvo_25.jpg",
    },
    {
        id: 1003, 
        nombre: 'Matafuegos Polvo Quimico (100 kg.)', 
        riesgo: 'incendio', 
        capacidad: '100 kilogramos', 
        precio: 80000,
        img: "https://www.georgia.com.ar/wp-content/uploads/2016/02/matafuegos_polvo_100kg.jpg",
    },
    {
        id: 1004, 
        nombre: 'Kit Automotor', 
        riesgo: 'incendio', 
        capacidad: '1 kilogramo + varios', 
        precio: 2500,
        img: "https://www.georgia.com.ar/wp-content/uploads/2016/05/kit_3_grande.jpg",
    },
    {
        id: 1005, 
        nombre: 'Barbijo Descartable x 50 U.', 
        riesgo: 'covid19', 
        capacidad: '50 unidades', 
        precio: 1500,
        img: "https://http2.mlstatic.com/D_NQ_NP_723165-MLA49035631879_022022-O.webp",
    },
    {
        id: 1006, 
        nombre: 'Barbijo Tricapa x 50 U.', 
        riesgo: 'covid19', 
        capacidad: '50 unidades', 
        precio: 2500,
        img: "https://http2.mlstatic.com/D_NQ_NP_808727-MLA45485378989_042021-O.jpg",
    },
    {
        id: 1007, 
        nombre: 'Barbijo N95 x 50 U.', 
        riesgo: 'covid19', 
        capacidad: '50 unidades', 
        precio: 8000,
        img: "https://i-mek.com/wp-content/uploads/2021/04/Barbijo-N95-de-3M-Niosh.jpg",
    },
    {
        id: 1008, 
        nombre: 'Mascara Facial', 
        riesgo: 'covid19', 
        capacidad: '1 unidad', 
        precio: 2000,
        img: "https://www.llaquina.com.ar/images/000000FACFRA1715538292020-fravida.png",
    }
];

for (const nodoHTML of document.getElementsByClassName('filtrar-categoria')){
    nodoHTML.onclick = (event) => {
        const categoria = event.target.getAttribute('data-categoria')
        filtrarProductosPorRiesgo(categoria)
    }
}

function filtrarProductosPorRiesgo (categoria) {
    document.getElementById("seccion-card").innerHTML = "";
    const productosFiltrados = productos.filter((producto) => producto.riesgo === categoria);

    productosFiltrados.forEach((producto) => {
        const idButton = `add-cart${producto.id}` 
        document.getElementById("seccion-card").innerHTML += `<div class="card">
            <div class="precio">
                <p>$${producto.precio}</p>
            </div>
            <img src="${producto.img}">
            <h4>${producto.nombre}</h4>
            <a class="boton" id="${idButton}" data-id="${producto.id}">Añadir Al Carrito</a>
        </div>`;
    })
}

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById("seccion-card").innerHTML += `<div class="card">
        <h5> ${producto.nombre} </h5>
        <img src="${producto.img}">
        <div class="precio">
            <p> $${producto.precio} </p>
        </div>
        <a class= "boton" id="${idButton}"> Agregar al Carrito </a>
        <a class="boton" onclick="verProducto(${producto.id})"> Ver producto </a>
    </div>`;
})

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById(idButton).addEventListener("click", () => {
        carrito.push(producto);
        Swal.fire(
            'Gracias por su compra!',
            'El producto fue sumado al carrito',
            'success'
        )
        localStorage.setItem("carrito", JSON.stringify(carrito));
        const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;
        console.log(carrito);
    })
})



