import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div style={{ margin: '20px 0', display: 'flex', justifyContent: 'center' }}>
      <TextField
        label="Search for a book"
        variant= "filled"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginRight: '10px' }}
        className='search-input'
      />
      <Button className='search-button' variant="contained" color="primary" onClick={handleSearch}>
        <Search/>
      </Button>
    </div>
  );
};

export default SearchBar;
