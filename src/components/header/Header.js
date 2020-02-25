import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import "./header.styles.scss";
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentuser} from '../../redux/user/user.selectors';

function Header({currentUser, hidden}) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">Shop</Link>
        <Link className="option" to="/contact">Contact</Link>
        {
          currentUser ?
          (<div className="option" onClick={() => auth.signOut()}>Sing out</div>)
          :( <Link className="option" to="/singin">Sing in</Link>)
        }
        <CartIcon/>
      </div>
      {
        hidden ? null : (<CartDropdown/>)
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
