import React from 'react';
import styles from './Layout.module.scss';
import Aux from '../../hoc/Auxiliary';

const layout = (props) => (
    <Aux>
        <div >Toolbar, SideDrawer, Backdrop
        </div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;