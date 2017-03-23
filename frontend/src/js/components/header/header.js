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
                    <img
                    className="menu-background"
                    src="https://lh3.googleusercontent.com/kTq_eap-vgLaWLPNLi_xH8-UxHmRE8x0ewBtqNcm2eqwaRsCjwbHeATaoPbDIe9rV4xOyJhJe2_D_Apt6CqT2giAV6ayQ3lTRMuVN7V517MFdDaf52DocrICKFHzMsndYRwRtBrdoWkzOdNXCQtsmEXbIga4btDOJqrQHWwuUOvMGpOEE6F7uL65vBPk3S1iOn-NOOOY9NctHpyyKb1zjD-I4YdT_4q51DNRxdhlSvrng2VF5eLhvZd8tANcgDAGSB_wtbeGm3WVI6zXq1Rqb-vQsX_ydjGje1yAWE0qsK7ph_zktSZmAQPhq-9l9ZmHDF9QhcRfrnfQuvEdnlHZlXzkkJ-m8nfQPfZPxu9KXJkcqVadsi71SSDjIRRUVTIIf4kQnxlkUcarf03lsFzcyUyenc5K1Y7oIkSP5PI5dHa_SfzTyq59Qvg0OKwNFnwAUMx4xdJnIak6NKIp8TIsZjV4VpwcmbOKC3GGGQ3AwMNqTyTvt1-sgXQHeS7XRNQQ-SY6_c8PHK4RDytW3nbBQ9Lja80jyouNE-k1enA9bSYFiiwHuO1m8pR0C7yVws5YL6pGM1nupo8scYj6NS3Rx63tRK5vbknX0m7vaC2kGJG0cmSH0IO0a0VeiUxib9tnu7VOSgUfz0dmtt2_AxalKYio2_N_L14tfv7s3U8S=w640-h182-no" />
                    <div className="menu-item-container">
                        {this.renderMenu()}
                    </div>                   
                </div>                
            </div>
        );
    }
}

export default Header;