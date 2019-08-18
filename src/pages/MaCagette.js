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
      activeButtons: []
    };
    this.changeButton = this.changeButton.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/products", { withCredentials: true })
      .then(response => {
        this.setState({ products: response.data });
      });
  }

  changeButton(state, id) {
    if (!state) {
      this.setState({ activeButtons: [...this.state.activeButtons, id] });
    } else {
      let items = [...this.state.activeButtons];
      for (var i = 0; i < items.length; i++) {
        if (items[i] === id) {
          items.splice(i, 1);
          i--;
        }
      }
      this.setState({ activeButtons: items });
    }
  };

  render() {
    let allProducts = this.state.products.map((product, index) => {
      return (
        <ProductCard
          key={index.toString()}
          name={product.name}
          image={product.image}
          id={product._id}
          buttonChange={this.changeButton}
        />
      );
    });

    let allItems = this.state.activeButtons.map((item, index) => {
      
      return (
      <TicketLine 
      key={index.toString()} 
      id={item} 
      />
      )
    });

    return (
      <div className="ma-cagette">
        <div className="top-container">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            bibendum enim eget leo rhoncus, vel dapibus nisl consectetur.
          </p>
        </div>
        <div className="central-container">
          <div className="left-container">
            <div className="cagette">{allProducts}</div>
          </div>
          <div className="right-container">
            <div className="ticket">{allItems}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MaCagette;
