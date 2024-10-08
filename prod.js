(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    form.classList.add('was-validated');
                } else {
                    event.preventDefault(); 
                    addProduct();
                    form.classList.remove('was-validated'); 
                }
            }, false);
        });
    }, false);
})();

function addProduct() {
    const nombre = document.getElementById('nom').value;
    const precio = document.getElementById('pre').value;
    const año = document.getElementById('anio').value;

    const messageDiv = document.getElementById('message');
    const newMessage = document.createElement('div');
    newMessage.className = 'alert alert-success';
    newMessage.role = 'alert';
    newMessage.innerText = 'Producto agregado correctamente';
    messageDiv.appendChild(newMessage);
    messageDiv.style.display = 'block';

    const productList = document.getElementById('product-list');
    const productItem = document.createElement('div');

    productItem.className = 'card border rounded p-2 mb-2';
    productItem.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <div>${nombre}</div>
                <div>Precio Q. ${precio}</div>
            </div>
            <div class="d-flex align-items-center">
                <div>${año}</div>
                <button class="remove-btn" onclick="removeProduct(this)">×</button>
            </div>
        </div>
    `;

    productList.appendChild(productItem);

    const productCard = document.getElementById('product-card');
    if (productList.children.length > 0) {
        productCard.style.display = 'block';
    }

    document.getElementById('frm-producto').reset();

    setTimeout(() => {
        newMessage.remove();
        if (messageDiv.children.length === 0) {
            messageDiv.style.display = 'none';
        }
    }, messageDiv.children.length * 2000);
}

function removeProduct(button) {
    const productItem = button.parentElement.parentElement.parentElement;
    productItem.remove();

    const messageDiv = document.getElementById('message');
    const newMessage = document.createElement('div');
    newMessage.className = 'alert alert-danger';
    newMessage.role = 'alert';
    newMessage.innerText = 'Producto eliminado correctamente';
    messageDiv.appendChild(newMessage);
    messageDiv.style.display = 'block';

    setTimeout(() => {
        newMessage.remove();
        if (messageDiv.children.length === 0) {
            messageDiv.style.display = 'none';
        }
    }, messageDiv.children.length * 2000);

    const productList = document.getElementById('product-list');
    if (productList.children.length === 0) {
        const productCard = document.getElementById('product-card');
        productCard.style.display = 'none';
    }
}
