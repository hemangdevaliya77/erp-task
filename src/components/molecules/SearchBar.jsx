import React, { useState } from 'react';

import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CustomButton from '../atoms/Button/CustomButton';
import CustomInput from '../atoms/Input/CustomInput';
import { fontSize, textAlign } from '@mui/system';


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


  function taskadd(){
    console.log('task added');
  }
  return (
    <>
    
  
<div style={{display:'flex'}}>
  
        <CustomInput id="outlined-start-adornment" 
         sx={{ m: 1, width: '25ch','& .MuiInputBase-root': { height: '40px' }}}
         slotprops={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
         placeholder='search task'
         onChange={handleChange}
         />

     
    <CustomButton label='Add Section' onClick={taskadd} color='primary' sx={{m: 1,height:'40px', width: '108px',fontSize:'11px'}}/>
   
</div>
       </>
  );
}

export default SearchBar;
