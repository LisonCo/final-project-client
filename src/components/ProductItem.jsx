import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './ProductItem.css'

class ProductItem extends Component {
    
    render() {
        
        return(
            <div className="productItem" style={{backgroundColor: this.props.color, opacity: 0.7}}>
                <img src={this.props.image} alt="bottle"/>
                <p>{this.props.name}</p>
                <Link to='#'>Read more</Link>
            </div>
        )
    }
}

export default ProductItem
