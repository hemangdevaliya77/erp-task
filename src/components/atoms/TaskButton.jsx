import React from 'react'
import '../styles/sidebar.css'
import AssignmentIcon from '@mui/icons-material/Assignment';
function TaskButton() {
  return (
    <div>

<div className='task-logo-container'>
    <AssignmentIcon/>
    {/* <img src={AssignmentIcon} height={30} width={30} className='taskicon' alt="" /> */}
    Task
</div>

    </div>
  )
}

export default TaskButton