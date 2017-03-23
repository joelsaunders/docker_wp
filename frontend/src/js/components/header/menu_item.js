import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectView} from '../../actions/index'
import { Link } from 'react-router'

class MenuItem extends Component {
    render() {
        return (
            <div onClick={() => this.props.selectView(this.props.title)} className="menu-item" >
                <Link to={this.props.title.toLowerCase()} >
                    <h6 className="menu-item-text">
                        {this.props.title}
                    </h6>
                </Link>
            </div>
        );
    }
}

export default connect(null, {selectView})(MenuItem)