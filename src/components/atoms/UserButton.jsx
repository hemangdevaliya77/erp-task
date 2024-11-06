import React from 'react'
import '../styles/sidebar.css'
import usericon from '../../images/group.png'

function UserButton() {
  return (
    <div>

    <div className='task-logo-container'>
        <img src={usericon} height={30} width={30} className='taskicon' alt="" />
        Users
    </div>
    
        </div>
  )
}

export default UserButton