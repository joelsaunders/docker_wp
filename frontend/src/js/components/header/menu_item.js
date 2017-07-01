import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectView} from '../../actions/index'
import { Link } from 'react-router'

class MenuItem extends Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick()
        this.props.selectView(this.props.title)
    }

    render() {
        console.log(this.props)
        return (
            <Link to={`/${this.props.title.toLowerCase()}`} className="menu-item" style={{ textDecoration: 'none' }} >
                <div onClick={this.handleClick} >
                    <h6 className="menu-item-text">
                        {this.props.title}
                    </h6>
                </div>
            </Link>
        );
    }
}

export default connect(null, {selectView})(MenuItem)