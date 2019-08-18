import React, {Component} from 'react';
import './products.css'
import ProductItem from '../components/ProductItem'
import axios from 'axios';

class products extends Component {

constructor(){
    super()
    this.state = {
        products: []
        }
    }
    
componentDidMount() {
    axios.get("http://localhost:3001/products", {withCredentials: true})
    .then(response => {
        this.setState({products: response.data})
    })
}

render() {
    let allProducts = this.state.products.map((product, index) => {
        return (
            <ProductItem
            key={index.toString()}
            name={product.name}
            color={product.color}
            image={product.image}/>
        )
    })
    return(
        <div>
            <div className="products-top-container">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum enim eget leo rhoncus, vel dapibus nisl consectetur.
                </p>
            </div>
            <div className="products">
                <div className="all-products">
                    {allProducts}
                </div>
            </div>
        </div>
    )
}
}

export default products

