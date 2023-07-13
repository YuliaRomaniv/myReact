
import { useState, useEffect } from "react";
import {UserComponent} from "../UserComponent/UserComponent";

const UserContainer = ({ setUserId }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            {users.map(user => (
                <UserComponent key={user.id} user={user} setUserId={setUserId} />
            ))}
        </div>
    );
};

export { UserContainer };     