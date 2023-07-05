
import {useForm} from "react-hook-form";

const UserForm = ({setUsers}) => {
    const {register,reset,handleSubmit }=useForm()

    const  save = ((user)=>{
       fetch('https://jsonplaceholder.typicode.com/users',{
           headers:{'content-type':'application/json'},
           body:JSON.stringify(user),
           method:'POST'
       }).then(value => value.json())
        .then(value => setUsers(prev=>[...prev, value]))
        reset();
   });

    return (
        <form onSubmit={handleSubmit(save)}>
            <label>name:<input type="text" placeholder={'name'} {...register('name')} /></label>
            <label>username:<input type="text" placeholder={'username'} {...register('username')} /></label>
            <label>email:<input type="text" placeholder={'email'} {...register('email')} /></label>
            <label>city:<input type="text" placeholder={'city'} {...register('address.city')} /></label>
            <button >Save</button>

        </form>
    );
};

export  {UserForm};