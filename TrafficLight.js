import React, { useEffect, useState } from 'react';
import './TrafficLight.css';

const TrafficLight = () => {
    const [lightColor, setLightColor] = useState('red');

    useEffect(() => {
        const timer = setInterval(() => {
            setLightColor((prevColor) => {
                switch (prevColor) {
                    case 'red':
                        return 'green';
                    case 'green':
                        return 'yellow';
                    case 'yellow':
                        return 'red';
                    default:
                        return prevColor;
                }
            });
        }, getLightDuration(lightColor));

        return () => {
            clearInterval(timer);
        };
    }, [lightColor]);

    const getLightDuration = (color) => {
        switch (color) {
            case 'red':
                return 4000;
            case 'yellow':
                return 500;
            case 'green':
                return 3000;
            default:
                return 0;
        }
    };

    return (
        <div className="traffic-light">
            <div className={`light red ${lightColor === 'red' ? 'active' : ''}`} />
            <div className={`light yellow ${lightColor === 'yellow' ? 'active' : ''}`} />
            <div className={`light green ${lightColor === 'green' ? 'active' : ''}`} />
        </div>
    );
};

export default TrafficLight;
