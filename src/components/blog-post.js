import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons/faTags';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons/faAngleDoubleRight';
import { Link } from "react-router-dom";

export default class BlogPost extends Component {

    constructor(props) {
        super(props);

        this.post = this.props.post;

        this.constructTopSection = this.constructTopSection.bind(this);
        this.wrapLinkToPost = this.wrapLinkToPost.bind(this);

        this.blogIndex = this.props.match.path === '/blog';
    }

    wrapLinkToPost(element) {
        return  (<Link className="link" to={'/blog/post/' + this.post.id}>
            {element}
        </Link>);
    }

    constructTopSection() {
        const top = (<div className="top">
            <img className="featured-image" src={this.post.image}></img>
            <div className="post-title">
                {this.post.title}
            </div>
            <div class="date">
                {this.post.created_at}
            </div>
        </div>);


        if (this.blogIndex) {
            return this.wrapLinkToPost(top);
        }

        return top;
    }

    constructReadMore() {
        const readMore = (<div className="read-more">
            Read more <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
        </div>);

        if (this.blogIndex) {
            return this.wrapLinkToPost(readMore);
        }

        return '';
    }

    render() {
        const tags = this.post.tags.map((tag) => {
           return <span key={tag} className="tag">{tag}</span>
        });

        const body = this.blogIndex ? this.post.excerpt : this.post.body;

        const readMore = this.constructReadMore();

        return (
            <div className="blog-post">
                <div className="category">
                    {this.post.category}
                </div>
                {this.constructTopSection()}
                <div className="content" dangerouslySetInnerHTML={{__html: body}}>
                </div>
                {readMore}
                <hr />
                <div className="tags">
                    <FontAwesomeIcon icon={faTags} />
                    {tags}
                </div>
            </div>
        );
    }
}
