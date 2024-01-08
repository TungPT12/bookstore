export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_PRODUCT_TO_CART":
            let newProduct = action.product
            if (state.length !== 0) {
                for (let i = 0; i < state.length; i++) {
                    let currentProduct = state[i];
                    if (currentProduct.id === newProduct.id) {
                        state[i] = { ...currentProduct, quantity: currentProduct.quantity + newProduct.quantity }
                        return state;
                    }
                }
                state = ([...state, newProduct])
            } else {
                state = ([...state, newProduct])
            }
            return state;
        case "GET_CART":
            return state;
        case "DELETE_PRODUCT_CART":
            state.splice(action.position, 1)
            return state;
        default:
            return state;
    }
};


export default cartReducer;