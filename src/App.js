
import React, { useState } from 'react';
import {CommentForm} from "./CommentForm/CommentForm";


const App = () => {
    const [comments, setComments] = useState([]);

    const handleAddComment = (comment) => {
        setComments(prevComments => [...prevComments, comment]);
    };

    return (
        <div>
            <h1>Create Comment</h1>
            <CommentForm postId={5} setComments={handleAddComment} />

            <h2>Comments:</h2>
            {comments.map((comment, value) => (
                <div key={value}>
                    <p>Name: {comment.name}</p>
                    <p>Email: {comment.email}</p>
                    <p>Body: {comment.body}</p>
                </div>
            ))}
        </div>
    );
};

export  {App};
