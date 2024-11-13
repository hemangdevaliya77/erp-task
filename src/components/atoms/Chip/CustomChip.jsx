import React from 'react'
import { Chip } from '@mui/material'
function CustomChip({label,variant,sx,onClick}) {
  return (
    <div>
         <Chip label={label} variant={variant} sx={sx} onClick={onClick} />
        
    </div>
  )
}

export default CustomChip