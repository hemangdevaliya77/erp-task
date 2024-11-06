import React from 'react';
import { TableRow, TableCell, Checkbox, Avatar, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import AvatarGroup from '@mui/material/AvatarGroup';
import Badge from '@mui/material/Badge';
function TaskRow({ task, onToggleStatus }) {
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
  return (
    <TableRow>
      <TableCell>{task.task}</TableCell>
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
      <AvatarGroup total={10}>
      {task.assignees.map((user, index) => (

<div style={{ position: 'relative' }} key={index}>


          <Avatar key={index} alt={user.name} src={user.avatar} />
       
                          <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                          />
                      
          </div>
        ))}
        </AvatarGroup>
      </TableCell>
      {/* <TableCell>{task.comments}</TableCell> */}
<TableCell>
<AvatarGroup total={2}>
{task.comments.map((user,index)=>(
 <StyledBadge
 overlap="circular"
 anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
 variant="dot"
>
      <Avatar key={index} alt={user.name} src={user.avatar} />
      </StyledBadge>
))}
    </AvatarGroup>
</TableCell>
      <TableCell sx={{display:'flex'}}>
        {task.tags.map((tag, index) => (
          <Chip key={index} label={tag} variant="outlined" />
        ))}
      </TableCell>
    </TableRow>
  );
}

export default TaskRow;
