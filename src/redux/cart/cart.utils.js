export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems
  .find(cartItem => cartItem.id === cartItemToAdd.id);
  
  if (existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id ? 
      {...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    )
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeOneItemFromCart = (cartItems, cartItemsToRemove) => {
  const existingCartItem = cartItems
  .find(cartItem => cartItem.id === cartItemsToRemove.id);

  if(existingCartItem.quantity === 1){
    return cartItems.find(cartItem => cartItem.id !== cartItemsToRemove.id);
  }

  return cartItems.map(cartItem => 
    cartItem.id === cartItemsToRemove.id ? 
    {...cartItem, quantity: cartItem.quantity -1}
    : cartItem
  )
}

export const addOneItemFromCart = (cartItems, cartItemsToRemove) => {
  return cartItems.map(cartItem => 
    cartItem.id === cartItemsToRemove.id ? 
    {...cartItem, quantity: cartItem.quantity + 1}
    : cartItem
  )
}
