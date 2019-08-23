import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './confirmation.css';
import axios from "axios";
import qs from "querystring";
import AddressForm from '../components/AddressForm';
import AddressCard from '../components/AddressCard'
// import OrderLine from '../components/OrderLine';

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.domain = process.env.REACT_APP_API;
    this.state = {
      total: undefined,
      list: undefined,
      user: undefined,
      edit: undefined,
    };
    this.addressChange = this.addressChange.bind(this);
    this.addressEdit = this.addressEdit.bind(this);
  }

// stores the localStorage datas in the state and get the user and products info
  componentDidMount() {
    axios
      .get(process.env.REACT_APP_API + "/products", { withCredentials: true })
      .then(response => { 
    var total = parseInt(localStorage.getItem('total'));
    var list = localStorage.getItem('list');
    var user = JSON.parse(localStorage.getItem('user'));
    this.setState({total, list, user, products:response})
    })
  }

// changes the edit state to take off the form from the page once submitted
  addressChange() {
    this.setState({edit: true})
  }

// save changes button on the address form 
  addressEdit(updatedUser) {
    this.setState({edit: false, user: updatedUser})
  }

// save the order in the database
  orderButton = (user, list) => {
    return axios({
      method: "POST",
      url: "/order",
      baseURL: this.domain,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify({user, list}),
      withCredentials: true
  })
  .then((res)=> {
      console.log(res)
      this.props.history.push("/confirmed-order");
  })
  .catch(error => {
      console.log(error)
  })
}

// Return an object with the product's datas from its id
getProduct(id) {
  let found = this.state.products.find(oneProduct => {
      return (oneProduct._id === id);
  })
  return found;
}

  render () {

    // // Map over the order array
    // let order = this.state.list.map((item, index) => {
    //   const foundProduct = this.getProduct(item)   
    //    return (
    //      <OrderLine
    //      key={index.toString()}
    //      name={foundProduct.name}
    //      />
    //   )
    // });

      return (
        <div className="confirmation">
           <div className="top-container">
              <h1>Confirm your order</h1>
          </div>
          <div className="main-container">
            <div className="left-container">
              <h2>Delivery Address</h2>
              {this.state.user !== undefined && this.state.user.address ? 
              <AddressCard addressChange={this.addressChange} address={this.state.user.address} />
              :
              <AddressForm addressEdit={this.addressEdit}/>
              } 
            </div>
            <div className="middle-container">
              {this.state.edit ? 
              <AddressForm addressEdit={this.addressEdit}/>
              :
              <div></div>
              }
            </div>
            <div className="right-container">
              <h2>Order summary</h2>
              <div className="order">
                {/* {order} */}
              </div>
              <div className="total">
                <p>Total </p> <div>{this.state.total}€</div>
              </div>
              <div className="bottom-container">
                <button onClick={() => {this.orderButton(this.state.user, this.state.list)}}>Place your order</button>
                <Link to='/ma-cagette'>Modify your order</Link>
              </div>
            </div>
       </div>
       </div>
      )
  }
}

export default Confirmation;