import React from 'react';
import styles from './Order.module.scss';

const order = (props) => {

    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }
    const ingredientsOutput = ingredients.filter(ig => ig.amount > 0)
        .map(ig => {
            return <span key={ig.name} className={styles.Ingredients} >{ig.name} (<strong>{ig.amount}</strong>)</span>
        })

    return (<div className={styles.Order}>
        <p>Ingredients: {ingredientsOutput}</p>
        <p>Price: <strong>$ {Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>);
};

export default order;