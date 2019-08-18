import React, {Component} from 'react';
import './productCard.css'

class ProductCard extends Component {

    constructor(){
        super();

        this.state = {
            active: false,
            id: null
        }
    }

    componentDidMount() {
        this.setState({id: this.props.id})
    }

    changeButtonClass = () => {
        this.setState(prevState => ({
            active: !prevState.active
            }));        
        this.props.buttonChange(this.state.active, this.state.id)
    }
    
    render() {
        let btnClass = this.state.active ? "btn active" : "btn not-active";
        
        return(
            <div className="product-card">
                <button className={btnClass} onClick={this.changeButtonClass}>{this.props.name}</button>
            </div>
        )
    }
}

export default ProductCard


