import React from 'react';
import { useSelector } from 'react-redux';
import css from './style.module.css';

function ContactList({ onDeleteContact }) {
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
