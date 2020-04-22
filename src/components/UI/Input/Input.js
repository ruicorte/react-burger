import React from 'react';
import styles from './Input.module.scss';

const input = (props) => {

    let inputElement = null;
    switch (props.inputType) {
        case ('input'):
            inputElement = <input className={styles.inputElement} {...props} />;
            break;
        case ('textarea'):
            inputElement = <textarea {...props} />
            break;
        default:
            inputElement = <input {...props} />
    }

    return (
        <div className={styles.Input}>
            <label className={styles.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
};

export default input