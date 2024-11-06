import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';


function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search query:', searchQuery);
  };

  return (
    <>
    
    <FormControl sx={{ m: 0, width: '30ch' }} variant="outlined">
   <TextField
           id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch','& .MuiInputBase-root': { height: '40px' } }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">    <SearchIcon /></InputAdornment>,
            },
          }}
          placeholder='search task'
        />
     </FormControl>
        <Button variant='contained'   sx={{ m: 1, width: '20ch','& .MuiInputBase-root': { height: '15px' },fontSize:'12px' }}>Add Section</Button>
    </>
  );
}

export default SearchBar;
