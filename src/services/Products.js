export const getProductFromCategory = (category) => {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${category}`)
        .then(response => response.json())
}

export const getProductDetail = (id) => {
    return fetch(`https://api.mercadolibre.com/items/${id}`)
        .then(data => data.json())
}

export const getProductDescription = (id) => {
    return fetch(`https://api.mercadolibre.com/items/${id}/description`)
        .then(data => data.json())
}