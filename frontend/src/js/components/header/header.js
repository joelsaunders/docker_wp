import React, {Component} from 'react';
import {connect} from 'react-redux';

import NameBox from './name';
import MenuItem from './menu_item';
import menuItems from './menu_item_list';

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
                    <a id="two" href="#" className="menu-expand-icon"><img src="/src/style/expand-button.png" /></a>
                    <img
                    className="menu-background"
                    src="http://res.cloudinary.com/dceeo2a79/image/upload/v1494168814/400a9c97-21cf-4ecd-9339-b036c29e8790_1_l8hfcw.png" />
                    <div className="menu-item-container">
                        {this.renderMenu()}
                    </div>                   
                </div>                
            </div>
        );
    }
}

export default Header;