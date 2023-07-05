import React, { useState } from 'react';

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name: name,
            email: email,
        };

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('New user created:', data);
            })
            .catch((error) => {
                console.error('Error creating user:', error);
            });

        setName('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="submit">Create User</button>
        </form>
    );
};

export {UserForm};
