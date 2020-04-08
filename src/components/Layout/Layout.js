import React from 'react';
import styles from './Layout.module.scss';
import Aux from '../../hoc/Auxiliary';

const layout = (props) => (
    <Aux>
        <div className={styles.container}>Toolbar, SideDrawer, Backdrop
        </div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;