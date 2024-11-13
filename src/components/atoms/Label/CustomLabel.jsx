import React from 'react'
import { Typography } from '@mui/material';

function CustomLabel({label,...props}) {
  return (
    <div>

        <Typography {...props}>{label}</Typography>
    </div>
  )
}

export default CustomLabel