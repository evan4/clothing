import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';
import { clearItemFromCart, removeOneItem, addOneItem } from '../../redux/cart/cart.actions';

function CheckoutItem({cartItem, clearItem, removeOneItem, addOneItem }) {
  const {name, imageUrl, price, quantity} = cartItem;
  
  function removeItem() {
    if(quantity > 1) removeOneItem(cartItem)
  }
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name}/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow"
         onClick={removeItem}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addOneItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  removeOneItem: item => dispatch(removeOneItem(item)),
  addOneItem: item => dispatch(addOneItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
