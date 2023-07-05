import React, { useState, useEffect } from 'react';
import Post from './Post';
const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.log(error));
    }, []);

    const showPostDetails = (event) => {
        const selectedPostId = event.target.dataset.post;
        const selectedPost = posts.find((post) => post.id === selectedPostId);
        setSelectedPost(selectedPost);
    };


    return (
        <div>
            {/* Відображення кнопки вибору поста та детальної інформації */}
            {selectedPost !== null ? (
                <div>
                    <h2>Selected Post:</h2>
                    <Post post={selectedPost} />
                </div>
            ) : (
                <button onClick={showPostDetails} data-post={post.id}>View Details</button>

            )}

            {/* Відображення списку постів */}
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );

};

export default Posts;





