import React from 'react';
import styles from './DrawerToggle.module.scss';

const drawerToggle = (props) => (
    <div className={styles.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;