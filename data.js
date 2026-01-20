export async function getProductItem() {
    const response = await fetch('https://fakestoreapi.com/products');
    const product = response.json();
    return product;
}