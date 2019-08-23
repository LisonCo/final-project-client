import React, {Component} from 'react';
import './ConfirmedOrder.css'

class ConfirmedOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: undefined,
        };
      }
    
// stores the localStorage datas in the state
    componentDidMount() {
    var total = parseInt(localStorage.getItem('total'));
    var list = localStorage.getItem('list');
    var user = JSON.parse(localStorage.getItem('user'));
    this.setState({total, list, user})
    } 

    render() {
        return (
            <div className="confirmed-order">
               <div className="top-container">
                  <h1>Order confirmed</h1>
              </div>
              <div className="main-container">
                  <img src='./images/bike2.png' alt="bike"/>
                <div className="central-container">
                    <h2>Merci !</h2>
                    <p></p>
                </div>
              </div>
           </div>
          )
    }
}

export default ConfirmedOrder