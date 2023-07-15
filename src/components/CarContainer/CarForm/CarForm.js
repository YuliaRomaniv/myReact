import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../../validators/carValidator";

const CarForm = ({setOnSave,carForUpdate,setCarForUpdate}) => {
    const {register, handleSubmit, reset,formState:{errors, isValid},setValue}=useForm({
        mode:'all',
        resolver:joiResolver(carValidator)

    })
    useEffect(()=>{
        if (carForUpdate){
            setValue('brand', carForUpdate.brand,{shouldValidate:true})
            setValue('price', carForUpdate.price,{shouldValidate:true})
            setValue('year', carForUpdate.year,{shouldValidate:true})

        }

    },[carForUpdate])
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
    const update=(car)=>{
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carForUpdate.id}`,{
            headers:{'content-type':'application/json'},
            body:JSON.stringify(car),
            method:'PUT'
        }).then(value => value.json()).then(()=>{
            setOnSave(prev=>!prev)
            setCarForUpdate(null)
            reset()
        })


    }

    return (
        <div>
            <form onSubmit={handleSubmit(!carForUpdate?save:update)}>
                <label><input type="text" placeholder={'brand'} {...register('brand')} /></label>
                {errors.brand && <span>{errors.brand.message}</span>}
                <label><input type="text" placeholder={'price'} {...register('price')} /></label>
                {errors.price && <span>{errors.price.message}</span>}
                <label><input type="text" placeholder={'year'} {...register('year')} /></label>
                {errors.year && <span>{errors.year.message}</span>}
                <button disabled={!isValid}>{!carForUpdate?'Save':'Update'}</button>
            </form>

        </div>
    );
};

export  {CarForm};