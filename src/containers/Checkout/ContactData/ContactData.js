import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import styles from './ContactData.module.scss';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false,
    }

    componentDidMount() {
        console.log('props on contact data', this.props);
    }

    orderHandler = (event) => {
        event.preventDefault();
        // console.log('order handler clicked', this.props.ingredients);
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price, // recalculate on server
            customer: {
                name: 'Rui',
                address: {
                    street: 'test street 1',
                    zipcode: '',
                    country: 'Portugal'
                },
                email: 'rui@mail.com',
            },
            deliveryMethod: 'fastest',
        };
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({
                    loading: false,
                    // purchasing: false,
                });
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    loading: false,
                    // purchasing: false,
                });
            });
    }

    render() {
        let form = (
            <form>
                <input type="text" name="name" placeholder="your name" />
                <input type="email" name="email" placeholder="your email" />
                <input type="text" name="street" placeholder="street" />
                <input type="text" name="postalCode" placeholder="postal code" />
                <Button btnType="Success" clicked={this.orderHandler}>order</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={styles.ContactData}>
                <h4>enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;