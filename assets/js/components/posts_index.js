import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './header';

class PostIndex extends Component {
    render() {
        return (
            <div className="col-md-12" style={style}>
                <Header />
            </div>
        );
    }
}

const style = {
    height: 1000,
    backgroundColor: "blue"
}

export default PostIndex