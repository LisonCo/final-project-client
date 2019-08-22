import React, {Component} from 'react';
import './addressCard.css'

class AddressCard extends Component {

    render() {
        return(
           <div className="addressCard">
               <div>
                <p>{this.props.address.firstName} {this.props.address.lastName}</p>
                <p>{this.props.address.number} {this.props.address.street}</p>
                <p>{this.props.address.postcode} {this.props.address.city}</p>
               </div>
               <div>
                <button onClick={this.props.addressChange}>Edit</button>
               </div>
           </div>
        )
    }
}

export default AddressCard 