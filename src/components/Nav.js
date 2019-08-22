import React, { Component } from 'react'; 
import {Link, withRouter} from 'react-router-dom';
import './Nav.css'
import Auth from "../utils/Auth";
const auth = new Auth();

class Nav extends Component {

    state = {
        user: null,
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
                    <div className={this.props.location.pathname === '/our-products' ?  "nav-links active" : "nav-links"}><Link to='/our-products'>Our products</Link></div>
                    <div className={this.props.location.pathname === '/ma-cagette' || this.props.location.pathname === '/confirm' ?  "nav-links active" : "nav-links"}><Link to='/ma-cagette'>Ma Cagette</Link></div>
                    {auth.loggedIn() ?
                    <div className="nav-links"><Link to='/logout'>Logout</Link></div>
                    :
                    <div className={this.props.location.pathname === '/login' ?  "nav-links active" : "nav-links"}><Link to='/login'>Login</Link></div>
                    }
                </div>
            </nav>
        )
    }
}

export default withRouter(Nav);