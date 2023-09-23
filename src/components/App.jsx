import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import styles from './App.module.css';


const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Krzysiek Chojnicki', number: '752-365-987' },
    { id: 'id-2', name: 'Zosia Makowiecka', number: '443-892-121' },
    { id: 'id-3', name: 'Michał Jackiewicz', number: '569-645-079' },
    { id: 'id-4', name: 'Tomek Kujawa', number: '227-391-260' },
  ],
  filter: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };


  componentDidUpdate() {
    // console.log(this.state.filter);
  }


  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };


  add = ({ name, number }) => {
    const toLowerCase = name.toLowerCase();
    const contacts = this.state.contacts;
    let nameOntheList = false;

    const newContact = { id: nanoid(), name: name, number: number };

    this.setState({ filter: '' });

    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === toLowerCase) {
        alert(`${contact.name} is already in contacts`);
        nameOntheList = true;
      }
    });

    if (nameOntheList) return;

    this.setState(prevState => ({
      contacts: prevState.contacts.concat(newContact),
    }));

  };


  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };


  filterItems = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    ).sort((a, b) => a.name.localeCompare(b.name));
  };


  deleteContact = idToDelete => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idToDelete),
    }));
  };


  render() {
    const { filter } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.tittle}>Phonebook</h1>
        <ContactForm onSubmit={this.add} />
        <Filter value={filter} onChange={this.handleChangeFilter} />
        <ContactList
          contacts={this.filterItems()}
          toDelete={this.deleteContact}
        />
      </div>  
    );
  }
}