import React, { Component } from 'react'
import Auth from "./Auth";
const auth = new Auth();

export default class Logout extends Component {

    state = {
        error: null
    }

    componentDidMount(){
        auth.logout()
            .then(()=> {
                this.props.history.push("/");
            })
            .catch((error)=> {
                this.setState({error: error.message});
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                {this.state.error? 
                    <h1>{this.state.error}</h1>
                    :
                    <p>Loading</p>
                }
            </div>
        )
    }
}