// Створити  компоненту TestUseMemo в та викликати її в Апп
// TestUseMemo має пропсу data (довільне занчення та данні)
// Створити в середині TestUseMemo функцію, з "важкою" логікою (наприклад великий цикл). та мемомізувати її за допомоги useMemo якщо data змінюється
//
// Зробити те саме, але з використанням useCallback
//
// Створити хук useToggle, котрий буде міняти статус компоненти з true на false і навпаки.
//     Сигнатура хука function useToggle(defaultValue)
//
// створити хук useFetch, котрий спроможний робити запит на jsonplaceholder на /users, /posts, /comments в залежності від аргументу.
//     Сигнатура хука function(endpoint)
//
// створити хук function useArray(defaultValue), котрий спроможний маніпулювати станом масива певної копмоненти
// В середині хука реалізувати методи add(item), remove(id)


import './App.css';
import {useState} from "react";
import {TestUseMemo} from "./components/TestUseMemo";
import {TestUseCallBack} from "./components/TestUseCallBack";
import {TestUseToggle} from "./components/TestUseToggle/TestUseToggle";
import {TestUseFetch} from "./components/TestUseFetch";
import {TestUseArray} from "./components/TestUseArray";

const App = ()=> {
  // const [count1, setCount1]=useState(0)
  return (
    <div >
      {/*<button onClick={()=>setCount1(prev=>++prev)}>inc1</button>*/}
        {/*<TestUseMemo count1={count1}/>*/}
        {/*<TestUseCallBack count1={count1}/>*/}
        {/*<TestUseToggle/>*/}
        {/*<TestUseFetch/>*/}
        <TestUseArray/>
    </div>
  );
}

export {App};
