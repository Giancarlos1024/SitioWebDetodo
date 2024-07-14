document.addEventListener('DOMContentLoaded', function() {
    const botonesAgregarCarrito = document.querySelectorAll('.btn-agregar-carrito');
    const contadorCarrito = document.querySelector('.cantidad-carrito');
    const modal = document.getElementById('modalCarrito');
    const spanCerrar = document.querySelector('.close');
    const productosAgregados = document.querySelector('.productos-agregados');
    const totalCompra = document.getElementById('total');
    const btnConfirmarCompra = document.querySelector('.btn-confirmar-compra');
    const carritoIcono = document.getElementById('carritoIcono');
    let cantidadProductos = 0;
    let total = 0;

    botonesAgregarCarrito.forEach(boton => {
        boton.addEventListener('click', function() {
            const producto = this.closest('.producto');
            const nombreProducto = producto.querySelector('h3').innerText;
            const precioProducto = parseFloat(producto.querySelector('.precio').innerText.replace('$', ''));
            const descripcionProducto = producto.querySelector('p').innerText;
            const imagenProducto = producto.querySelector('img').src;

            const productoAgregado = document.createElement('div');
            productoAgregado.classList.add('producto-agregado');
            productoAgregado.innerHTML = `
                <div class="producto-info-carrito">
                    <img src="${imagenProducto}" alt="${nombreProducto}">
                    <div>
                        <h3>${nombreProducto}</h3>
                        <p>${descripcionProducto}</p>
                        <span class="precio">$${precioProducto.toFixed(2)}</span>
                    </div>
                </div>
                <div class="acciones">
                    <button class="btn-eliminar">Eliminar</button>
                </div>
            `;

            const btnEliminar = productoAgregado.querySelector('.btn-eliminar');
            btnEliminar.addEventListener('click', function() {
                productosAgregados.removeChild(productoAgregado);
                cantidadProductos--;
                contadorCarrito.textContent = cantidadProductos;
                total -= precioProducto;
                totalCompra.textContent = total.toFixed(2);
            });

            productosAgregados.appendChild(productoAgregado);

            cantidadProductos++;
            contadorCarrito.textContent = cantidadProductos;

            total += precioProducto;
            totalCompra.textContent = total.toFixed(2);

            modal.style.display = 'block';
        });
    });

    spanCerrar.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    carritoIcono.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    btnConfirmarCompra.addEventListener('click', function() {
        alert('¡Compra confirmada!');
        productosAgregados.innerHTML = '';
        cantidadProductos = 0;
        total = 0;
        contadorCarrito.textContent = cantidadProductos;
        totalCompra.textContent = total.toFixed(2);
        modal.style.display = 'none';
    });
});