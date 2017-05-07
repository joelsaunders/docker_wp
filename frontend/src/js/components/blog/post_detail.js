import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/index';
import { Link } from 'react-router';
import { parseMarkdown } from '../../utils/markdownParser'

class PostDetail extends Component {
    componentWillMount() {
        this.props.fetchPost(this.props.params.id)
    }

    render() {
        if (!this.props.post) {
            return <div>Loading.....</div>;
        }
        return (
            <div>
                <div className="detail-post-container generic-card">
                    <div className="detail-post-textarea">
                        <h3>{this.props.post.title}</h3>
                        <h4>{this.props.post.created}</h4>
                        <div dangerouslySetInnerHTML={parseMarkdown(String(this.props.post.body))}/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.posts.post
    };
}

export default connect(mapStateToProps, { fetchPost })(PostDetail);