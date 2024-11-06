import React from 'react'
import '../styles/sidebar.css'
import manicon from '../../images/man.png'
function UserProfile() {
  return (
    <div className='user-icon' style={{marginBottom:'20px',cursor:'pointer'}}>

        <img src={manicon} height={30} width={30} alt="" />
    </div>
  )
}

export default UserProfile