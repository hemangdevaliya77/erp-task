import React from 'react'
import CustomIcon from '../atoms/Icon/CustomIcon';
import '../styles/sidebar.css'
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';
import ProfileImage from '../atoms/Image/ProfileImage';
import LogoutIcon from '@mui/icons-material/Logout';
import Timeline from '../molecules/Timeline';


function Sidebar() {
  function logout(){
    console.log('logged out...')
  }
  return (
    <div className='sidebar'>
<h2 style={{color:'blue',top:0}}>LOGO</h2>



<div style={{textAlign:'center'}}>

<CustomIcon  IconComponent={AssignmentIcon} color="primary" size="large" sx={{  cursor:'pointer',margin: '10px' }}  />
Task
</div>

<div style={{textAlign:'center'}}>

<CustomIcon  IconComponent={GroupIcon} color="primary" size="large" sx={{ cursor:'pointer', margin: '10px' }}  />
Gropus
</div>



<div className="bottom">


<div style={{textAlign:'center'}}>

<ProfileImage src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png" 
height={40}
width={40}
style={{borderRadius:'50%', cursor:'pointer'}}
/>
</div>


<div style={{textAlign:'center'}}>

<CustomIcon  IconComponent={LogoutIcon}  size="large" sx={{  cursor:'pointer',margin: '10px',color:'black' }} onClick={logout} />
Logout


</div>

</div>

    </div>
  )
}

export default Sidebar