import React from 'react';
import styles from './CheckoutSummary.module.scss';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
    console.log(props);
    return (
        <div className={styles.CheckoutSummary}>
            <h1>hope it tastes well!</h1>
            <div style={{
                width: '100%',
                // height: '300px',
                margin: 'auto',
            }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                btnType="Danger"
                clicked={null}>Cancel</Button>
            <Button
                btnType="Success"
                clicked={null}>Continue</Button>
        </div>
    );
}

export default checkoutSummary;