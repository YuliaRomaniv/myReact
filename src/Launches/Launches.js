
// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
import React, { useEffect, useState } from 'react';


const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        const fetchLaunches = async () => {
            try {
                const response = await fetch('https://api.spacexdata.com/v3/launches');
                const data = await response.json();
                const filteredLaunches = data.filter((launch) => new Date(launch.launch_date_utc).getFullYear() !== 2020);
                setLaunches(filteredLaunches);
            } catch (error) {
                console.log('Error fetching launches:', error);
            }
        };

        fetchLaunches();
    }, []);

    return (
        <div >
            <h2>Launches</h2>
            {launches.map((launch) => (
                <div key={launch.flight_number}>
                    <h3>Mission Name: {launch.mission_name}</h3>
                    <p>Launch Year: {launch.launch_year}</p>
                    <image> Mission patch small: {launch.mission_patch_small}</image>

                </div>
            ))}
        </div>
    );
};

export default Launches;
