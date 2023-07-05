
import React from 'react';

const Post = ({ post, onClick }) => {
    const showPostDetails = () => {
        onClick(post);
    };

    return (
        <div>
            <p>ID: {post.id}</p>
            <p>Title: {post.title}</p>
            <button onClick={showPostDetails}>View Details</button>
        </div>
    );
};

export default Post;
