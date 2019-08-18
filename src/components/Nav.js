import React, { Component } from 'react'; 
import {Link} from 'react-router-dom';
import './Nav.css'

class Nav extends Component {

    state = {
        user: null
    }

    render() {

        return (
            <nav className="nav">
                <Link to='/'>
                    <div className="right-container">
                            <div><img src='./images/logo.png' alt="logo"/></div>
                            <div><h1>La Cagette</h1></div>
                    </div>
                </Link>
                <div className="left-container">
                    <div className="nav-links"><Link to='/our-products'>Our products</Link></div>
                    <div className="nav-links"><Link to='/ma-cagette'>Ma Cagette</Link></div>
                    <div className="nav-links">Sign up/Login</div>
                </div>
            </nav>
        )
    }
}

export default Nav;