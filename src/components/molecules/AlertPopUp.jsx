import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import ProfileImage from '../atoms/Image/ProfileImage';
function AlertPopUp() {
  return (
    <Stack sx={{ display:'block',minWidth:'80%',marginLeft:"10px"}} spacing={2}>
    <Alert severity="error" style={{ marginTop:'20px',left:0,color:'black',borderRadius:'10px'}}>
    
   Urgent Comment: 3   


  <div style={{display:'flex',marginTop:'20px',gap:'20px'}}>

  <ProfileImage src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png" 
height={30}
width={30}
style={{borderRadius:'50%'}}
/>
      please complete this issue it is urgent
  </div>
    </Alert>
      
      </Stack>
  )
}

export default AlertPopUp