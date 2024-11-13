import React, { useState } from 'react';
import { TableRow, TableCell, Checkbox, Avatar, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import AvatarGroup from '@mui/material/AvatarGroup';
import Badge from '@mui/material/Badge';
import '../styles/taskdetails.css'
import { useTaskContext } from '../../context/TaskContext';
import CustomChip from '../atoms/Chip/CustomChip';


function TaskRow({ task, onToggleStatus,activesection }) {
  const {handleTaskClick} =useTaskContext();
  const {handleTaskSection}=useTaskContext();
  const {handleActiveState}=useTaskContext();
 const {selectedSection}=useTaskContext();
  const {setSelectedTask}=useTaskContext();


    const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',                        
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));


const handleRowClick = () => {
  handleTaskClick(task);  // Pass the current task to context
  handleTaskSection(activesection)
  handleActiveState(true)


};



// const [selectedTask,setSelectedTask]=useState([])
// function handleRowClick(){
//   // console.log('Task selected with ID:', task); 
//   // setSelectedTask(task)
// }


// function changeSection(){
//   handleTaskSection(activesection)
// }


// console.log(handleTaskClick)
// console.log(selectedTask)
  return (
    <TableRow  onClick={handleRowClick} style={{cursor:'pointer'}}>
      <TableCell sx={{cursor:'pointer',padding:'2px'}}  >
        {task.task}
    
        </TableCell>
      <TableCell>
        <Checkbox
          checked={task.status}
          onChange={() => onToggleStatus(task.id)}
          color="primary"
        />
      </TableCell>
      <TableCell>{task.dueDate}</TableCell>
      <TableCell>{task.organization}</TableCell>
      <TableCell>
      <AvatarGroup total={10} sx={{display:'flex',justifyContent:'flex-end'}} >
      {task.assignees.map((user, index) => (

<div style={{ position: 'relative' }} key={index}>


       
                          <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                          >
          <Avatar key={index} alt={user.name} src={user.avatar} />

                          </StyledBadge>
                      
          </div>
        ))}
        </AvatarGroup>
      </TableCell>
      {/* <TableCell>{task.comments}</TableCell> */}
<TableCell>
<AvatarGroup total={3} sx={{display:'flex',justifyContent:'flex-end'}}>
{task.comments.map((user,index)=>(
  <div key={index}>


 <StyledBadge
 overlap="circular"
 anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
 variant="dot"
>
      <Avatar key={index} alt={user.name} src={user.avatar} />
      </StyledBadge>
      </div>
))}
    </AvatarGroup>
</TableCell>
      <TableCell >
        {task.tags.map((tag, index) => (
          // <Chip key={index} label={tag} variant="outlined" />
          
          <div style={{display:'inline-flex',marginRight:'5px'}}>

            <CustomChip key={index} label={tag}  ></CustomChip>
          </div>
          

        ))}
      </TableCell>
    </TableRow>
  );
}

export default TaskRow;
