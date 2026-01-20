import { getProductItem } from "./data.js";
import { addToCart } from "./cart.js";

async function renderProduct() {
    let renderHTML = '';
    const products = await getProductItem();
    products.forEach((product) => {
        renderHTML += 
        `
    <div class="col">
        <div class="card h-100 d-flex flex-column">
            <img src="${product.image}" class="card-img-top" alt="Produk 1">
           <div class="card-body flex-grow-1">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">
            ${product.description}
            </p>
        </div>
        <div class="card-footer mt-auto d-flex justify-content-between align-items-center">
          <small class="text-muted">$${product.price}</small>
          <button class="btn btn-sm btn-primary js-add-cart" data-product-id="${product.id}">Tambah ke Keranjang</button>
        </div>
      </div>
    </div>
        `;

    });

    document.querySelector('.js-display-content').innerHTML = renderHTML;

    document.querySelectorAll('.js-add-cart').forEach((buttonAdd) => {
        buttonAdd.addEventListener('click', () => {
            const getProductId = parseInt(buttonAdd.dataset.productId);
            const product = products.find(item => item.id === getProductId);
            const productToCart = addToCart(product);
            if(productToCart === 'exist') {
                alert('product sudah ada');
            } else {
                alert('product telah di tambahkan ke keranjang');
            }
        });
    });
}
renderProduct();