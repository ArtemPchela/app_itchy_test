import React, {useEffect, useState} from 'react';
import styles from "./style.module.scss";

export default function Time() {

    const [date, setDate] = useState(new Date());


    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date());
    }

    return (
        <div className={`${styles.time}`}>
            <span>{date.toLocaleTimeString()}</span>
        </div>
    );
}

