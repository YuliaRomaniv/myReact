// state lifting
// Є компонента Арр. В середині неї є UsersComponent, який отримує наданні з https://jsonplaceholder.typicode.com/users
//     Кожен юзер - окрема компонента UserComponent,в якій є кнопка show posts, при натисканні на яку робиться state lifting, а саме - в компоненті App відображаються пости того юзера, на кнопку якого клікнули
import { UserContainer } from "./components/UserContainer/UserContainer";
import { Posts } from "./components/Posts/Posts";
import { useState } from "react";

const App = () => {
    const [userId, setUserId] = useState(null);

    return (
        <div>
            <UserContainer setUserId={setUserId} />
            <hr />
            {userId && <Posts userId={userId} />}
        </div>
    );
};

export { App };
