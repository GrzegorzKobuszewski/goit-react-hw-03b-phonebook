import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import styles from './ContactForm.module.css';

const INITIAL_STATE = {
    id: '',
    name: '',
    number: '',
};

export class ContactForm extends Component {
    
    state = { ...INITIAL_STATE };
    id = nanoid();

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit({ ...this.state })
        this.reset();
    };

    reset = () => this.setState({ ...INITIAL_STATE });

    render() {
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <label className={styles.label} htmlFor={this.id}>Name</label>
                    <input
                        className={styles.input}
                        onChange={this.handleChange}
                        id={this.id}
                        type="text"
                        name="name"
                        value={this.state.name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
        
                <label className={styles.label} htmlFor={this.id}>Phone</label>
                    <input
                        className={styles.input}
                        onChange={this.handleChange}
                        id={this.id}
                        type="tel"
                        name="number"
                        value={this.state.number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                
                <button className={styles.button} type="submit">Add contact</button>

            </form>
        );
    }
}