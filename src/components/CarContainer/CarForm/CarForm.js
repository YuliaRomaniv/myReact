// import {useState} from "react";
//
//
// const CarForm = ({setOnSave}) => {
//     const initialState ={
//          brand:' ',
//          price:' ',
//          year:' '
//     }
//     const [car, setCar ] = useState(initialState);
//
//     function inputHandle(e) {
//         setCar(prev=>({...prev, [e.target.name]:e.target.value}))
//
//     }
// const save =(e) =>{
//         e.preventDefault()
//     fetch( 'http://owu.linkpc.net/carsAPI/v1/cars',{
//         headers:{'content-type':'application/json'},
//         body:JSON.stringify(car),
//         method:'POST'
//     }).then(value => value.json()).then(() => {
//         setOnSave(prev=>!prev)})
//         setCar(initialState)
//     }
//     return (
//         <form onSubmit={save}>
//             <div><label>brand: <input type="text" value={car.brand} name={'brand'} onChange={inputHandle}/></label></div>
//             <div><label>price: <input type="text" value={car.price} name={'price'} onChange={inputHandle}/></label></div>
//             <div><label>year: <input type="text" value={car.year} name={'year'} onChange={inputHandle}/></label></div>
//             <button>Save</button>
//         </form>
//     );
// };
//
// export  {CarForm};
import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../../validators/carValidator";

const CarForm = ({setOnSave}) => {
   const {register, handleSubmit, reset,formState:{errors, isValid},setValue}=useForm({
     mode:'all',
     resolver:joiResolver(carValidator)

   })
   const save = (data) =>{
       fetch('http://owu.linkpc.net/carsAPI/v1/cars',{
           headers:{'content-type':'application/json'},
           body:JSON.stringify(data),
           method:'POST'
       }).then(value => {
           if (!value.ok){
               throw Error(value.status+'not ok')

           }
           return value.json()
       })
           .then(() => {
               setOnSave(prev=>!prev)
               reset()
           })
           .catch(e=>{
           console.log(e)})

   }
   const setFormValue = ()=>{
       setValue('brand','xxxx',{shouldValidate:true})
       setValue('price',1111,{shouldValidate:true})
       setValue('year',2000, {shouldValidate:true})
   }
    return (
        <div>
        <form onSubmit={handleSubmit(save)}>
            <label><input type="text" placeholder={'brand'} {...register('brand')} /></label>
            {errors.brand && <span>{errors.brand.message}</span>}
            <label><input type="text" placeholder={'price'} {...register('price')} /></label>
            {errors.price && <span>{errors.price.message}</span>}
            <label><input type="text" placeholder={'year'} {...register('year')} /></label>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>Save</button>
        </form>
            <button onClick={()=>setFormValue()}>setForm</button>
        </div>
    );
};

export  {CarForm};
