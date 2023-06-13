import React from 'react';
import { useDispatch } from 'react-redux';
import { filterChangeAction } from '../store/phonebookReducer';

// Використання createReducer
// import { filterChangeAction } from '../store/actions';
// Використання createReducer

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(filterChangeAction(e.target.value));
  };

  return (
    <label>
      Filter contacts by name:
      <input type="text" onChange={handleChange} />
    </label>
  );
};
