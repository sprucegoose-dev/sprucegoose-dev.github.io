import React, { Component } from 'react';
import ApiClient from '../api/ApiClient.js';
import BlogPost from '../components/blog-post.js';

export default class BlogPostPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            post: null,
        }

        this.apiClient = new ApiClient();
    }

    async componentDidMount() {
        const params = { id: this.props.match.params.id}
        const post = await this.apiClient.getBlogPosts(params);

        this.setState({
            post,
        });
    }

    render() {

        if (this.state.post === null) {
            return <div>Loading...</div>
        }

        return (<div className="blog">
            <BlogPost post={this.state.post} match={this.props.match} />
        </div>);
    }

}