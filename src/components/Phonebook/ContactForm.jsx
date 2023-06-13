import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { UseContacsState } from '../store/useContacsState';
import css from './style.module.css';
import { useDispatch } from 'react-redux';
import { addContactAction } from '../store/phonebookReducer';
import { validationSchema } from './validationSchema';

// Використання createReducer
// import { addContactAction } from '../store/actions';
// Використання createReducer

function ContactForm() {
  const dispatch = useDispatch();

  const { contacts } = UseContacsState();

  const onSubmit = ({ name, number }, actions) => {
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

    actions.resetForm();
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

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form className={css.contact}>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" />

            <label htmlFor="number">Number</label>
            <Field type="tel" id="number" name="number" />
            <ErrorMessage name="number" />
          </div>
          <button type="submit" disabled={!formik.isValid}>
            add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
