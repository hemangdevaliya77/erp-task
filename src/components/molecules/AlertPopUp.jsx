import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import UserProfile from '../atoms/UserProfile';

function AlertPopUp() {
  return (
    <Stack sx={{ display:'block',minWidth:'100%',marginLeft:"10px"}} spacing={2}>
    <Alert severity="error" style={{ marginTop:'20px',left:0,color:'black'}}>
      Urgent Comment: 3    
  <div style={{display:'flex',marginTop:'20px',gap:'20px'}}>

      <UserProfile/>please complete this issue it is urgent
  </div>
    </Alert>
      
      </Stack>
  )
}

export default AlertPopUp