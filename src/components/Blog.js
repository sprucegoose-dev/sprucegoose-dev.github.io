import React, { Component } from 'react';
import ApiClient from '../api/ApiClient.js';
import BlogPost from '../components/blog-post.js';

export default class Blog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        }

        this.apiClient = new ApiClient();
    }

    async componentDidMount() {
        const posts = await this.apiClient.getBlogPosts();

        this.setState({
            posts,
        });

    }

    render() {
        const posts = this.state.posts.map((post) => {
            return <BlogPost key={post.id} post={post} match={this.props.match} />
        });

        return (<div className="blog">
            {posts.length ? posts :
            'Nothing here yet.'}
        </div>);
    }

}