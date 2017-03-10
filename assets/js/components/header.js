import React, {Component} from 'react';
import {connect} from 'react-redux';
import NameBox from './name';
import MenuItem from './menu_item';

const menuItems = [
    "Blog", "About", "Music", "Misc", "Contact"
]

class Header extends Component {

    renderMenu() {
        return menuItems.map((item) => {
            return (
                <MenuItem key={item} title={item} />
            );
        });
    }


    render() {
        return (
            <div className="header" >
                <NameBox />
                <div className="menu">
                    {this.renderMenu()}                   
                </div>                
            </div>
        );
    }
}

export default Header