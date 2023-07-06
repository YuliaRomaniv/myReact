// вивести всіх юзерів з плайсхолдеру
// в кожного юзера має бути кнопка яка буде показувати пости цього юзера
//
// пости мають виводитись під компонетою Users (в App компоненті)
import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.log('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const fetchUserPosts = async (userId) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            const data = await response.json();
            setPosts(data);
            setSelectedUserId(userId);
        } catch (error) {
            console.log('Error fetching user posts:', error);
        }
    };

    return (
        <div>
            <h2>Users</h2>
            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <button onClick={() => fetchUserPosts(user.id)}>Show Posts</button>
                </div>
            ))}
            {selectedUserId && (
                <div>
                    <h3>User Posts</h3>
                    {posts.map((post) => (
                        <div key={post.id}>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Users;
