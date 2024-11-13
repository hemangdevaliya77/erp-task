import React from 'react'
import { TextField } from '@mui/material'

function CustomTextArea({rows,placeholder,value,sx}) {
  return (
    <div>
    <TextField    id="my-textarea" value={value} multiline  rows={rows} placeholder={placeholder}  sx={sx}/>
    </div>
  )
}

export default CustomTextArea