import React from 'react';
import styles from './Button.module.scss';

const button = props => (
    <button
        className={[styles.Button, styles[props.btnType]].join(' ')}
        onClick={props.clicked}
        disabled={props.disabled}
    >{props.children}</button>
);

export default button;