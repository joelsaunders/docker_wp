import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './header/header';

class MainPage extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className="parent">
                <Header />
                <div className="main-content">
                    { children }
                </div>
                <div className="footer">Joel Saunders © 2017</div>
            </div>
        );
    }
}

export default MainPage