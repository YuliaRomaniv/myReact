import React, {useState} from 'react';
import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";

const CarContainer = () => {
    const [onSave, setOnSave ]=useState(null)
    return (
        <div>
            <CarForm setOnSave={setOnSave} />
            <hr/>
            <Cars onSave={onSave}/>
        </div>
    );
};

export {CarContainer};