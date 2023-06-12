import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  addContactAction,
  deleteContactAction,
  filterChangeAction,
} from './actions';

export const phonebookReducer = createReducer(initialState, {
  [addContactAction.type]: (state, { payload }) => {
    state.contacts.push(payload);
  },
  [deleteContactAction.type]: (state, { payload }) => {
    state.contacts = state.contacts.filter(contact => contact.id !== payload);
  },
  [filterChangeAction.type]: (state, { payload }) => {
    state.filter = payload;
  },
});
