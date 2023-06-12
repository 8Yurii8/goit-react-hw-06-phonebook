import React from 'react';
import { useDispatch } from 'react-redux';
import { filterChangeAction } from '../store/actions';

export const Filter = ({ value }) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(filterChangeAction(e.target.value));
  };

  return (
    <label>
      Filter contacts by name:
      <input type="text" value={value} onChange={handleChange} />
    </label>
  );
};
