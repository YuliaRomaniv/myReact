import React from 'react';
import {Characters} from "../../components";
import {useNavigate} from "react-router-dom";

const CharactersPage = () => {
    const navigate=useNavigate();
    return (
        <div>
            <button onClick={()=>navigate(-1)}>Back</button>
            <Characters/>
        </div>
    );
};

export {CharactersPage};