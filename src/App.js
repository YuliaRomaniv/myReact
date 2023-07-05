
import React, { createContext, useState } from 'react';
import {Child2} from "./Child2/Child2";
import {Child1} from "./Child1/Child1";

const Context = createContext(null);

const App = () => {
    const [data, setData] = useState([1, 2, 3]);

    return (
        <Context.Provider value={{ setData, data }}>
            <div>
                <Child1 />
                <hr />
                <Child2 />
            </div>
        </Context.Provider>
    );
};

export { App, Context };


