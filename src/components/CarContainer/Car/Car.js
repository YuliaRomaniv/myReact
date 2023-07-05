import React, {useContext} from 'react';
import {Context} from "../CarContainer";
import {carService} from "../../../servises/carService";

const Car = ({car}) => {
    const {setCarForUpdate,setTrigger }= useContext(Context)
    const {id, brand, price, year} = car;
    const deleteCar = async ()=>{
        try{
            await carService.deleteByID(id)
        }catch (e){
            console.log(e.response.data);
        }finally {
         setTrigger()
        }

    }
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=> setCarForUpdate(car)}>UpDate</button>
            <button onClick={deleteCar}>Delete</button>
        </div>
    );
};

export {Car};