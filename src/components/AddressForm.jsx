import React, {Component} from 'react';
import axios from "axios";
import qs from "querystring";
import './addressForm.css'

class AddressForm extends Component {
    constructor(props) {
        super(props);
        this.domain = process.env.REACT_APP_API;
        this.state = {
          address: {
              firstName: "",
              lastName: "",
              number: "",
              street: "",
              postcode: "",
              city: ""
          },
        }
        this.saveAddress = this.saveAddress.bind(this)
      }

// // stores the localStorage datas in the state
//     componentDidMount() {
//     var user = JSON.parse(localStorage.getItem('user'));
//     this.setState({address: user.address})
//     } 

// sends the address datas to the backend
    saveAddress = ({ firstName, lastName, number, street, postcode, city}) => {
    return axios({
        method: "POST",
        url: "/save-address",
        baseURL: this.domain,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify({firstName, lastName, number, street, postcode, city}),
        withCredentials: true
    })
    .then((res)=> {
        this.props.addressEdit(res.data)
    })
    .catch(error => {
        console.log(error)
    })
    }

    handleFormSubmit = e => {
        e.preventDefault();
        this.saveAddress(this.state.address)
          .then((res) => {
            this.setState({ error: "" });
          })
          .catch((res) => {
            this.setState({ error: res.data.message });
            console.log(this.state.error)
          });
      };

    handleFormChange = e => {
    let address = this.state.address;
    address[e.target.name] = e.target.value;
    this.setState({
        address: address
    });
    }

    render() {
        return(
            <div className="address-form">
                <form onSubmit={this.handleFormSubmit}>
                    <div className="input">
                        <label>First name</label>
                        <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={this.state.firstName}
                        onChange={this.handleFormChange}
                        required
                        />
                    </div>

                    <div className="input">
                        <label>Last name</label>
                        <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={this.state.lastName}
                        onChange={this.handleFormChange}
                        required
                        />
                    </div>

                    <div className="input">
                        <label>Number</label>
                        <input
                        type="text"
                        name="number"
                        placeholder="Number"
                        value={this.state.number}
                        onChange={this.handleFormChange}
                        required
                        />
                    </div>

                    <div className="input">
                        <label>Street</label>
                        <input
                        type="text"
                        name="street"
                        placeholder="Street"
                        value={this.state.street}
                        onChange={this.handleFormChange}
                        required
                        />
                    </div>

                    <div className="input">
                        <label>Post code</label>
                        <input
                        type="text"
                        name="postcode"
                        placeholder="Post Code"
                        value={this.state.postcode}
                        onChange={this.handleFormChange}
                        required
                        />
                    </div>

                    <div className="input">
                        <label>City</label>
                        <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={this.state.city}
                        onChange={this.handleFormChange}
                        required
                        />
                    </div>

                    <div>
                        <input type="submit" value="Save" className='button' />
                    </div>
                </form>
            </div>
        )
    }
}

export default AddressForm 