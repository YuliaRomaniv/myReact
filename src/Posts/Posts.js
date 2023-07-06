import React, { useState, useEffect } from 'react';
import Post from './Post';
import PostDetails from './PostDetails';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.log('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    return (
        <div>
            <h2>Posts</h2>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    onClick={() => handlePostClick(post)}
                />
            ))}
            {selectedPost && (
                <div>
                    <h3>Selected Post</h3>
                    <PostDetails post={selectedPost} />
                </div>
            )}
        </div>
    );
};

export default Posts;





