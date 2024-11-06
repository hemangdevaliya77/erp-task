import React from 'react'
import logoutbtn from '../../images/logout.png'
function LogoutButton() {
  return (
    <div style={{cursor:'pointer'}}>
        <img src={logoutbtn} height={30} width={30} alt="" />
    </div>
  )
}

export default LogoutButton