import React, {useState} from 'react';
import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";

const CarContainer = () => {
    const [onSave, setOnSave ]=useState(null)
    const [carForUpdate, setCarForUpdate]=useState()
    return (
        <div>
            <CarForm setOnSave={setOnSave} carForUpdate={carForUpdate}setCarForUpdate={setCarForUpdate} />
            <hr/>
            <Cars onSave={onSave} setOnSave={setOnSave} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {CarContainer};