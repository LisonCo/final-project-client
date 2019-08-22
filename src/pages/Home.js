import React, {Component} from 'react';
import './home.css'
import {Link} from 'react-router-dom';


class home extends Component {

    constructor() {
        super();
        this.state = {
          user: null
        };
      }
    
      componentDidMount() {
        const user = localStorage.getItem('user');
        this.setState({ user });
      } 

    render() {
        return(
            <div className="home">
                <div className="top-container">
                    <div><img src='./images/bike.png' alt="bike"/></div>
                    <div className="right-container">
                        <p className="p1">Easy</p>
                        <p className="p2">Local</p>
                        <p className="p3">Natural</p>
                        <p className="presentation-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed est nec odio sagittis maximus ut non dolor. Integer congue nisl quis rutrum ultricies. Sed ut leo velit. In hac habitasse platea dictumst. Vivamus convallis lorem vitae justo bibendum, quis volutpat mauris lobortis. Fusce commodo sollicitudin sem eu posuere.
                        </p>
                        {this.state.user === null ?
                        <>
                        <Link to='/signup'><button>Sign up</button></Link>
                        <Link to='/login'><button>Login</button></Link>
                        </>
                        :
                        <div/>
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default home