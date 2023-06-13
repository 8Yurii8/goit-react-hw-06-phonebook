import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './style.module.css';
import { deleteContactAction } from '../store/phonebookReducer';

// Використання createReducer
// // import { deleteContactAction } from '../store/actions';
// Використання createReducer

function ContactList() {
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContactAction(contactId));
  };

  const { contacts, filter } = useSelector(state => state);
  const filterCor = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterCor)
  );

  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id} className={css.list}>
          {`${contact.name}: ${contact.number}  `}
          <button onClick={() => onDeleteContact(contact.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
