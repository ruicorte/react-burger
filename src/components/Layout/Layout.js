import React from 'react';
import styles from './Layout.module.scss';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';


const layout = (props) => (
    <Aux>
        {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
        <Toolbar />
        <main className={styles.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;