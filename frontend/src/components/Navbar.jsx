import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>E-COMMERCE WEBSITE</div>
      <div className='menu'>
        <div>CART</div>
        <div>LOGIN</div>
        <div>SIGN IN</div>
      </div>
    </div>
  );
}

export default Navbar;
