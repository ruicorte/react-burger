import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';

import styles from './ContactData.module.scss';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        }
    }

    render() {
        return (
            <div className={styles.ContactData}>
                <h4>enter your contact data</h4>
                <form>
                    <input type="text" name="name" placeholder="your name" />
                    <input type="email" name="email" placeholder="your email" />
                    <input type="text" name="street" placeholder="street" />
                    <input type="text" name="postalCode" placeholder="postal code" />
                    <Button btnType="Success">order</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;