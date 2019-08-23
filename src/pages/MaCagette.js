import React, { Component } from "react";
import ProductCard from "../components/ProductCard";
import "./MaCagette.css";
import TicketLine from "../components/TicketLine";
import axios from "axios";

class MaCagette extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      activeButtons: [],
      total: 0,
    };
    this.changeButton = this.changeButton.bind(this);
    this.total = this.total.bind(this);
    this.minus=this.minus.bind(this);
  }

// Get all the products from the database and the order from the local storage
  componentDidMount() {
    axios
      .get(process.env.REACT_APP_API + "/products", { withCredentials: true })
      .then(response => { 
      var list = JSON.parse(localStorage.getItem('list'));
      var total = parseInt(localStorage.getItem('total'));
      var list2= []
      for(var property in list){
        list2.push(list[property])
      }
        this.setState({ products: response.data, activeButtons: list2, total: total });
      });
  }

// Add a product to the activeButtons state when the button is active
  changeButton=(activity, id)=> {
    if (activity=== false) {
      this.setState({ activeButtons: [...this.state.activeButtons, id] });      
      this.total(id)
    } else {
      let items = [...this.state.activeButtons];
      for (var i = 0; i < items.length; i++) {
        if (items[i] === id) {
          this.minus(id)
          items.splice(i, 1);
          i--;
        }
      }
      this.setState({ activeButtons: items });
    }
  };

// Return an object with the product's datas from its id
  getProduct(id) {
    let found = this.state.products.find(oneProduct => {
        return (oneProduct._id === id);
    })
    return found;
  }

// Calculates the total and saves it in the state
//   total(activity, itemPrice) {
//     let total
//     if (!activity) {
//       total = this.state.total + Number(itemPrice)
//     } else {
//       total = this.state.total - Number(itemPrice)
//     }
//     this.setState({total: total})
// }

// Calculates the total and saves it in the state
total = (id) => {
  let total= this.state.total
    let foundProduct = this.getProduct(id)
    total += foundProduct.price
  this.setState({total});
  return total
}

minus = (id) => {
  let total= this.state.total
    let foundProduct = this.getProduct(id)
    total -= foundProduct.price
  setTimeout(()=>{this.setState({total})},100);
  return total
}

// Stores the data in the local storage and redirect to another page
confirmButton = () =>  {
  const { total, activeButtons } = this.state
  localStorage.setItem('total', total)
  localStorage.setItem('list', JSON.stringify(activeButtons))
  this.props.history.push("/confirm");
}

  render() {

// Load all the products on the page 
    let allProducts = this.state.products.map((product, index) => {
      return (
        <ProductCard
          key={index.toString()}
          name={product.name}
          image={product.image}
          id={product._id}
          price={product.price}
          buttonChange={this.changeButton}
        />
      );
    });

// Map over all the products whose buttons are active
    let allItems = this.state.activeButtons.map((item, index) => {
      const foundProduct = this.getProduct(item)   
      return (
      <TicketLine 
        key={index.toString()} 
        id={foundProduct._id}
        name={foundProduct.name} 
      />
      )
    });

    return (
      <div className="ma-cagette">
        <div className="top-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            bibendum enim eget leo rhoncus, vel dapibus nisl consectetur.
          </p>
        </div>
        <div className="central-container">
          <div className="left-container">
            <div className="cagette">{allProducts}</div>
          </div>
          <div className="right-container">
            <div className="ticket">
            {allItems}
            {this.state.activeButtons.length > 0 ? 
            <div className="total">
              <div>Total</div>
              <div className="totalPrice">{this.state.total}€</div>
                <button className="button" onClick={this.confirmButton}>Confirm</button>
            </div>
            :
            <p></p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MaCagette;
