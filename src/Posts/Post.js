

import React from 'react';
import './Posts.css'
const Post = ({ id, title, onClick }) => {
    return (
        <div className="member">
            <h3>{id}</h3>
            <h3>{title}</h3>
            <button onClick={onClick}>More info</button>
        </div>
    );
};

export default Post;
