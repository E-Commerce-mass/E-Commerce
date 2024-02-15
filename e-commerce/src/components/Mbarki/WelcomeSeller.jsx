import React from 'react'
import { Stack,TextField} from '@mui/material'

const WelcomeSeller = () => {
  return (
    <div>
        <Stack direction='row' >
        <TextField>Welcome</TextField>
        <TextField>User</TextField>
        </Stack>
    </div>
  )
}

export default WelcomeSeller