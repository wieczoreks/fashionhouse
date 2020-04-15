export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cart=>cart.id===cartItemToAdd.id)
    console.log(existingCartItem, 'BEFORE_IF', cartItemToAdd, 'cartItemToAdd', cartItems, 'cartItems')
    if(existingCartItem){
        console.log(existingCartItem, 'INSIDE_IF')
        return cartItems.map(cart=> cart.id===cartItemToAdd.id
            ? {...cart, quantity:cart.quantity+1}
            : {...cart} )
    }
    return [...cartItems, {...cartItemToAdd, quantity:1 }]
}