import React from 'react';
import css from './TestUseToggle.module.css'
import {useToggle} from "../../hooks/useToggle";
const TestUseToggle = () => {
   const {value, change} =useToggle(true)
    return (
        <div className={[css.TestUseToggle, value?css.red:css.blue].join(' ')}>
            TestUseToggle
            <button onClick={change}>{!value?'blue':'red'}</button>
        </div>
    );
};

export {TestUseToggle};