import React from 'react'
import { Button } from '@mui/material'
function CustomButton({label,onClick,color,sx}) {

  return (
    <div>
     <Button variant='contained' color={color} sx={sx} onClick={onClick}>{label}</Button>
         </div>
  )
}

export default CustomButton