import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './header';

class PostIndex extends Component {
    render() {
        return (
            <div className="parent">
                <Header />
            </div>
        );
    }
}

export default PostIndex