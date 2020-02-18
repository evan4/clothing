import React from 'react'
import CustomButton from '../custom-button/CustomButton'
import './cart-dropdown.styles.scss';

export default function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"/>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  )
}
