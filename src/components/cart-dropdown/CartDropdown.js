import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

function CartDropdown({cartItems, history, dispatch}) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
      {
        cartItems.length ?
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
        : 
        <span className="empty-message">Your cart is empty</span>
      }
      </div>
      <CustomButton onClick={ () => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      } }>Checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
