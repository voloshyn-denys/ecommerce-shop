import React, { useEffect, useState } from 'react';
import s from './Counter.module.sass'

const Counter = (props) => {
    const {maxValue, onChange, defaultValue = 1} = props;
    const [value, setValue] = useState(defaultValue);

    useEffect(()=>{
        onChange(value);
    }, [value])

    const handleMinusButton = () => {
        const restrictedValue = value > 1 ? value - 1 : value;
        setValue(restrictedValue);
    }

    const handlePlusButton = () => {
        const restrictedValue = value < maxValue ? value + 1 : value;
        setValue(restrictedValue);
    }

    return (
        <div className={s.counter}>
            <button
                onClick={handleMinusButton}
                className={s.counter_button}>
                    -
            </button>
            <span className={s.counter_value}>{value}</span>
            <button 
                className={s.counter_button}
                onClick={handlePlusButton}>
                    +
            </button>
        </div>
    )
}

export default Counter;
