// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)

import React, { useEffect, useState } from 'react';

const PostDetails = ({ post }) => {
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        const fetchPostDetails = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
                const data = await response.json();
                setPostDetails(data);
            } catch (error) {
                console.log('Error fetching post details:', error);
            }
        };

        fetchPostDetails();
    }, [post]);

    if (!postDetails) {
        return <div>Loading post details...</div>;
    }

    return (
        <div>
            {Object.entries(postDetails).map(([key, value]) => (
                <div key={key}>
                    <strong>{key}: </strong>{value}
                </div>
            ))}
        </div>
    );
};

export default PostDetails;

