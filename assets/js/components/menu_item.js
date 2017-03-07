import React, {Component} from 'react';
import {connect} from 'react-redux';

class MenuItem extends Component {
    render() {
        return (
            <div className="col-md-2" style={style}>Menu Item</div>
        );
    }
}

const style = {
    backgroundColor: "orange",
    height: "100%",
    width: "20%"
}

export default MenuItem