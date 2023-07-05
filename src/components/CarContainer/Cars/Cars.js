import React, {useContext, useEffect, useState} from 'react';
import {Car} from "../Car/Car";
import {carService as CarService} from "../../../servises/carService";
import {Context} from "../CarContainer";

const Cars = () => {
    const [cars, setCars]=useState([]);
   const {trigger} = useContext(Context);
    useEffect(
        ()=>{
            CarService.getAll().then(({data})=> setCars(data));
        },[trigger])
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    )};

export {Cars};