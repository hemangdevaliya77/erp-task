import React from 'react'
import { TextField } from '@mui/material'

function CustomInput(props) {
  return (
    <div>

        <TextField
      {...props} 
        />
    </div>
  )
}

export default CustomInput