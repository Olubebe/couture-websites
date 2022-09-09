// CartFor Add item cart

export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
}
}

// Delete item from cart
export const delCart = (product, clearAll) => {
    return {
        type: "DELITEM",
        payload: {product, clearAll}
    }
}