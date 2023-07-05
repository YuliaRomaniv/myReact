import {useState} from "react";

const  useToggle = (defaultVale)=>{
const [value, setValue]=useState(defaultVale);
const change = ()=>{
    setValue(prev=>!prev)

}
return {value, change}
}
export {useToggle}