import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar =  () => {
  return (
    <div className='bg-navbar'>
      <nav className='navbar navbar-expand-lg navbar-dark navbar-items'>
        <ul className='navbar-nav d-flex justify-content-between'>
          <Link to='/'><li className='nav-link text-bold'>INÍCIO</li></Link>
          <div className="navitems d-flex">
            <Link to='/sobre'><li className='nav-link text-bold mr-3'>SOBRE</li></Link>
            <Link to='/login'><li className='nav-link text-bold mr-3'>LOGIN</li></Link>
            <Link to='/contato'><li className='nav-link text-bold mr-3'>CONTATO</li></Link>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
