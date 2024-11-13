import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

function CustomAvtarGroup({ users}) {
  return (
    <AvatarGroup max={5} >
      {users.map((item, index) => (
        <Avatar 
          key={index} 
          alt={item.name} 
          src={item.avatar} 
          sx={{ height: 30, width: 30 }} 
      
        />
      ))}
    </AvatarGroup>
  );
}

export default CustomAvtarGroup;
