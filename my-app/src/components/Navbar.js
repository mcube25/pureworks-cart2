import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo512.png';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
             <Link to="/">
<img src={logo} alt="store" className="navbar-brand"/>
             </Link>
             <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5"></li>
                 <li className=""></li>
                 <Link to="/" className="nav-link">
                     Product
                 </Link>
             </ul>
             <Link to='/cart' className="ml-auto">
                 <button>
                     <i className="fas fa-cart-plus"/>
                     my cart
                 </button>
             </Link>
            </nav>
        )
    }
}
