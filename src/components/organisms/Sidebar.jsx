import React from 'react'
import TaskButton from '../atoms/TaskButton';
import UserButton from '../atoms/UserButton';
import '../styles/sidebar.css'
import UserProfile from '../atoms/UserProfile';
import LogoutButton from '../atoms/LogoutButton';

function Sidebar() {
  return (
    <div className='sidebar'>
<h2 style={{color:'blue'}}>LOGO</h2>
<TaskButton/>
<UserButton/>

<div className="bottom">
<UserProfile/>
<LogoutButton/>
</div>

    </div>
  )
}

export default Sidebar