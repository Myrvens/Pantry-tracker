// components/AddPantryItem.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const AddPantryItem = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && quantity) {
      onAdd({ name, quantity: parseInt(quantity) });
      setName('');
      setQuantity('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        label="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mr: 2 }}
      />
      <TextField
        label="Quantity"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        sx={{ mr: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Item
      </Button>
    </Box>
  );
};

export default AddPantryItem;
