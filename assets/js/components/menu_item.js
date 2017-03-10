import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectView} from '../actions/index'

class MenuItem extends Component {
    render() {
        return (
            <div onClick={() => this.props.selectView(this.props.title)} className="menu-item" >
                <h6 className="menu-item-text">
                    {this.props.title}
                </h6>
            </div>
        );
    }
}

export default connect(null, {selectView})(MenuItem)