import React, {Component} from 'react';
import './productCard.css'

class ProductCard extends Component {

    constructor(){
        super();

        this.state = {
            id: null
        }
    }

    componentDidMount() {
        let list= JSON.parse(localStorage.getItem('list'));
        if(!list){
            this.setState({active:false,id: this.props.id})
        } else{
            for(var i=0; i<list.length;i++){
            if(list[i]===this.props.id){
                this.setState({active:true,id:this.props.id})
                return
            } else {
                this.setState({active:false,id: this.props.id})
            }
        }
        }
        
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
                <button className={btnClass} onClick={() => {
                    this.changeButtonClass()
                }}><img src='./images/logo.png' alt='bottle'/></button>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default ProductCard


