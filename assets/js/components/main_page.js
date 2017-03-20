import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './header/header';

class MainPage extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="parent">
                <Header />
                {children}
            </div>
        );
    }
}

export default MainPage