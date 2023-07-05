import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../App';

const SubChild1_1 = () => {
    const { data } = useContext(Context);
    const [show, setShow] = useState(data);

    useEffect(() => {
        setShow(data);
    }, [data]);

    return (
        <div>
            {show.map((item) => (
                <div key={item}>{item}</div>
            ))}
        </div>
    );
};

export { SubChild1_1 };
