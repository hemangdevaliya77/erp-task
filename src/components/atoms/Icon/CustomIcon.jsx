import React from 'react'
// import Icon from '@mui/material/Icon';
function CustomIcon({ IconComponent, color = 'primary', size = 'medium', sx, ...props}) {
  return (
    <div>

      <IconComponent color={color} fontSize={size} sx={sx}  {...props} />
    </div>
  )
}

export default CustomIcon