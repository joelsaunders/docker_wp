import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import { fetchPosts } from '../../actions/index';


class BlogIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    render () {
        return (
            <div>
                <ul className="post-container">
                    {
                        this.props.posts.map(post => {
                            return (
                                <div key={post.title}>
                                    <li className="post" >
                                        <div className="post-picturecontainer">
                                            <img src={post.picture} className="post-picture" />
                                        </div>
                                        <div className="post-textarea">
                                            <h4><Link to={`/blog/${post.id}`}>{post.title}</Link></h4>
                                            <h5>{post.created}</h5>
                                            <p className="post-text">{post.description}</p>
                                        </div>
                                    </li>
                                    <div className="post-border" > </div>
                                </div>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.posts
    };
}

export default connect(mapStateToProps, { fetchPosts })(BlogIndex);