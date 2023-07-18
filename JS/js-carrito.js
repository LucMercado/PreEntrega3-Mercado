function mostrarCarrito() {
    // document.getElementById("contenedor-carrito").innerHTML = " ";

    const contenedorCarrito = document.querySelector("#contenedor-carrito");
    contenedorCarrito.innerHTML = " ";
    const carritoGuardado = localStorage.getItem("carrito");
    let precioTotal = 0;

    if (carritoGuardado) {
        const carritoParse = JSON.parse(carritoGuardado);
        carritoParse.forEach(producto => {
            const artCarrito = document.createElement("article");
            artCarrito.innerHTML = `
                <article class="card-producto"> 
                    <img src=${producto.img}>
                    <div class="card-producto-body">
                        <hr>
                        <strong class="card-producto-price">${producto.precio}</strong>
                        <h3 class="card-producto-title">${producto.nombre}</h3>          
                        
                    </div>
                </article>
            `;
            precioTotal += producto.precio;
            contenedorCarrito.appendChild(artCarrito);
        })
        let precioTotalTexto = document.createElement("h4");
        precioTotalTexto.innerHTML = `
        <h4 style="color:white">Monto Total Carrito: $${precioTotal}</h4>
        `;
        contenedorCarrito.appendChild(precioTotalTexto);
    }
}

mostrarCarrito();