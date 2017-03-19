import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './header/header';

class MainPage extends Component {
    render() {
        return (
            <div className="parent">
                <Header />
            </div>
        );
    }
}

export default MainPage