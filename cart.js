export function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const matchId = cart.find(item => item.id === product.id);
  
    if (matchId) {
      return 'exist';
    } else {
      cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image
      });
      localStorage.setItem('cart', JSON.stringify(cart));
      return 'added';
    }
  }

export function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// function saveToStorage(data, key) {
//     localStorage.setItem(key, JSON.stringify(data));
// }

export function removeFromCart(cartId) {
    const cart = getCart();

    // Buat array baru TANPA item yang id-nya sama
    const newCart = cart.filter(item => item.id !== cartId);

    // Simpan ulang ke localStorage
    localStorage.setItem('cart', JSON.stringify(newCart));
}