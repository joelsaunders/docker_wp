import React, {Component} from 'react';
import {connect} from 'react-redux';
import NameBox from './name';
import MenuItem from './menu_item';

class Header extends Component {
    render() {
        return (
            <div style={style}>
                <NameBox />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />                
            </div>
        );
    }
}

const style = {
    height: "30%"
}

export default Header