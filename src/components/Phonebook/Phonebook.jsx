import { useDispatch, useSelector } from 'react-redux';
import {
  addContactAction,
  deleteContactAction,
  filterChangeAction,
} from '../store/actions';
import React from 'react';
import css from './style.module.css';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import { Filter } from './filter.jsx';

const Phonebook = () => {
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector(state => state);

  const handleAddContact = ({ name, number }) => {
    if (isContactExist(name, number)) {
      alert(`Name ${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: Date.now(),
      name,
      number,
    };
    dispatch(addContactAction(newContact));
  };

  const isContactExist = (name, number) => {
    if (contacts && contacts.length > 0) {
      return contacts.some(
        contact =>
          contact.name && contact.name.toLowerCase() === name.toLowerCase()
      );
    }
    return false;
  };

  const handleFilterChange = event => {
    dispatch(filterChangeAction(event.target.value));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContactAction(contactId));
  };

  return (
    <div className={css.section}>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      {contacts.length > 0 && (
        <div>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={handleFilterChange} />
          <ContactList
            contacts={contacts}
            filter={filter}
            onDeleteContact={handleDeleteContact}
          />
        </div>
      )}
      {contacts.length === 0 && <p>No contacts yet.</p>}
    </div>
  );
};

export default Phonebook;
