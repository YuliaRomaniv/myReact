
import { useState, useEffect } from "react";
import {Post} from "../Post/Post";

const Posts = ({ userId }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json())
            .then(data => setPosts(data));
    }, [userId]);

    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export { Posts };