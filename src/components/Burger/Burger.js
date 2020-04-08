import React from 'react';
import styles from './Burger.module.scss';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"/>
        </div>
    );
};

export default burger;