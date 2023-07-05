import React, { useContext } from 'react';
import { Context } from '../../App';

const SubChild2_2 = () => {
    const { setData } = useContext(Context);

    return (
        <div>
            SubChild2_2
            <button onClick={() => setData((prev) => [...prev, 5])}>Push 5</button>
        </div>
    );
};

export { SubChild2_2 };
