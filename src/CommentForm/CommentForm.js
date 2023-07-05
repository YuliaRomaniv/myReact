import React, { useState } from 'react';

const CommentForm = ({ postId, setComments }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newComment = {
            postId,
            name,
            email,
            body
        };

        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
            .then(response => response.json())
            .then(data => {
                console.log('New comment created:', data);
                setComments(prevComments => [...prevComments, data]);
            })
            .catch(error => {
                console.error('Error creating comment:', error);
            });
        setName('');
        setEmail('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:<input type="text" value={name} onChange={event => setName(event.target.value)} required/>
                </label>
            </div>
            <div>
                <label>
                    Email:<input type="email" value={email} onChange={event => setEmail(event.target.value)} required/>
                </label>
            </div>
            <div>
                <label>
                    Body:<textarea value={body} onChange={event => setBody(event.target.value)} required/>
                </label>
            </div>
            <button type="submit">Create Comment</button>
        </form>
    );
};
export  {CommentForm};
