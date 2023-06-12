import { createAction } from '@reduxjs/toolkit';

export const addContactAction = createAction('addContact');
export const deleteContactAction = createAction('deleteContact');
export const filterChangeAction = createAction('filterChange');
