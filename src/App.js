import {useEffect, useState} from 'react';
import {Users} from "./Components/Users/Users";


const App = () => {
    const  [users, setUsers] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(users => setUsers(users));
    }, [])
  return (
      <div>
        <Users users = {users}/>
      </div>
  );
};

export {App};
