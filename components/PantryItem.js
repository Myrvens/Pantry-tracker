// components/PantryItem.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const PantryItem = ({ item, onDelete }) => {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography color="text.secondary">
          Quantity: {item.quantity}
        </Typography>
        <Button variant="contained" color="secondary" onClick={() => onDelete(item.id)}>
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default PantryItem;
