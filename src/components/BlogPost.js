import React from 'react';

export default function BlogPost({
    title,
    createdAt,
    text,
    type,
}) {

    const renderMetadata = () => {
        return (
            <div className="top" data-anchor={title}>
                <div className="post-title">
                    {title}
                </div>
                <div className="date">
                    {createdAt}
                </div>
            </div>
        );
    }

    return (
        <div className="blog-post">
            {renderMetadata()}
            <div className={`content ${type}`} dangerouslySetInnerHTML={{__html: text}}>
            </div>
        </div>
    );
}
