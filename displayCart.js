import { getCart, removeFromCart } from "./cart.js";

function displayCartItem() {
    let renderCartHTML = '';
    const cart = getCart();
    cart.forEach((cartItem) => {
        renderCartHTML += 
        `
    <div class="col">
        <div class="card h-100 d-flex flex-column">
            <img src="${cartItem.image}" class="card-img-top" alt="Produk 1">
           <div class="card-body flex-grow-1">
            <h5 class="card-title">${cartItem.title}</h5>
            <p class="card-text">
            ${cartItem.description}
            </p>
        </div>
        <div class="card-footer mt-auto d-flex justify-content-between align-items-center">
          <small class="text-muted">$${cartItem.price}</small>
          <button class="btn btn-sm btn-danger js-remove-from-cart" data-product-id="${cartItem.id}">Hapus dari Keranjang</button>
        </div>
      </div>
    </div>
        `;
    });

    document.querySelector('.js-display-cart-content').innerHTML = renderCartHTML;

    document.querySelectorAll('.js-remove-from-cart').forEach((buttonRemove) => {
        buttonRemove.addEventListener('click', () => {
            const idCartProduct = parseInt(buttonRemove.dataset.productId);
            removeFromCart(idCartProduct);
            displayCartItem();
        })
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayCartItem();
  });