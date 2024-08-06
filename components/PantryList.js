// components/PantryList.js
import React from 'react';
import PantryItem from './PantryItem';

const PantryList = ({ items, onDelete }) => {
  return (
    <div>
      {items.map(item => (
        <PantryItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default PantryList;
