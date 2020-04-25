export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cart=>cart.id===cartItemToAdd.id)
    if(existingCartItem){
        
        return cartItems.map(cart=> cart.id===cartItemToAdd.id
            ? {...cart, quantity:cart.quantity+1}
            : {...cart} )
    }
    return [...cartItems, {...cartItemToAdd, quantity:1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cart=>cart.id===cartItemToRemove.id)
    if(existingCartItem.quantity === 1){
       return cartItems.filter(cart=>cart.id!==cartItemToRemove.id)
    }
    return cartItems.map(cart=>{
        return cart.id===cartItemToRemove.id ?
        {...cart, quantity: cart.quantity-1}:{...cart}
    })
}