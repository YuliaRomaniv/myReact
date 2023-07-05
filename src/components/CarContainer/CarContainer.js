import React, {createContext, useState} from 'react';
import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";
const Context=createContext(null)
const CarContainer = () => {
    const [trigger, setTrigger] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null)
    return (
        <Context.Provider value={{
        trigger,
        carForUpdate,
        setTrigger:()=>setTrigger(prev=>!prev),
        setCarForUpdate}}>
        <div>
        <CarForm/>
        <hr/>
        <Cars/>
        </div>
        </Context.Provider>
    );
};

export {
    CarContainer,
    Context
};