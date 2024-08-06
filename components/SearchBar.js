// components/SearchBar.js
import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <TextField
        label="Search Items"
        variant="outlined"
        fullWidth
        onChange={(e) => onSearch(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
