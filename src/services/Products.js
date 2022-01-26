export const getProductFromCategory = (category) => {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${category}`).then(response => response.json())
}