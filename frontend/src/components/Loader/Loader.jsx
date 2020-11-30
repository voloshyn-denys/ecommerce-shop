import React from "react";
import s from './Loader.module.sass';

const Loader = () => {
    return (
        <div className={s.loader_row} >
            <i className={s.loader} />
        </div>
    )
}

export default Loader;