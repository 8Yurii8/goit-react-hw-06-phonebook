import React from 'react';
import css from './style.module.css';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import { Filter } from './filter.jsx';
import { UseContacsState } from '../store/useContacsState';
const Phonebook = () => {
  const { contacts } = UseContacsState();

  return (
    <div className={css.section}>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && (
        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      )}
      {contacts.length === 0 && <p>No contacts yet.</p>}
    </div>
  );
};

export default Phonebook;
