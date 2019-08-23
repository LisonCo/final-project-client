import React, {Component} from 'react';

class OrderLine extends Component {
    render () {
        return(
            <div className="OrderLine">
                {this.props.name}
            </div>
        )
    }

}

export default OrderLine