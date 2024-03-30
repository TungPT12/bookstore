const addToCart = (product) => {
    return {
        type: 'ADD_PRODUCT_TO_CART',
        product: product
    }
}

const getCart = () => {
    return {
        type: 'GET_CART',
    }
}

const deleteProductCart = (index) => {
    return {
        type: 'DELETE_PRODUCT_CART',
        position: index
    }
}

export {
    addToCart,
    getCart,
    deleteProductCart,
}