import React, {Component} from 'react';
import './ticketLine.css'
import { FaEnvira } from 'react-icons/fa';

class TicketLine extends Component {
    render () {
        return(
            <div className="ticketLine">
                <div><span className="bullet">< FaEnvira /></span> {this.props.name}<span className="quantity">    x1</span></div>
            </div>
        )
    }

}

export default TicketLine


