import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../actions/index';


class BlogIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    render () {
        console.log(this.props.posts)
        return (
            <div>
                <h3>Blog index</h3>
                <ul>
                    {
                        this.props.posts.map(post => {
                            return (
                                <li key={post.title} >
                                    <h4>{post.title}</h4>
                                    <h5>{post.created}</h5>
                                    <p>{post.body}</p>
                                    <img src={post.picture} />
                                </li>
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