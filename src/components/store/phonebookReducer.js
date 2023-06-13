// Використання createReducer

// import { createReducer } from '@reduxjs/toolkit';

// import {
//   addContactAction,
//   deleteContactAction,
//   filterChangeAction,
// } from './actions';

// export const phonebookReducer = createReducer(
//   {
//     contacts: [],
//     filter: '',
//   },
//   {
//     [addContactAction.type]: (state, { payload }) => {
//       state.contacts.push(payload);
//     },
//     [deleteContactAction.type]: (state, { payload }) => {
//       state.contacts = state.contacts.filter(contact => contact.id !== payload);
//     },
//     [filterChangeAction.type]: (state, { payload }) => {
//       state.filter = payload;
//     },
//   }
// );  В

// Використання createReducer

import { createSlice } from '@reduxjs/toolkit';

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContactAction: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContactAction: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    filterChangeAction: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContactAction, deleteContactAction, filterChangeAction } =
  phonebookSlice.actions;
export default phonebookSlice.reducer;
