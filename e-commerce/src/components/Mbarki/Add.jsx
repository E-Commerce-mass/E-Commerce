import React from 'react'
import { Typography } from '@mui/material'
import { Stack,TextField,Button} from '@mui/material'

import './Add.css';

const Add = () => {

  return (
    <>
     
      <Stack spacing={30} direction='row'>
        <Stack className='sellermanagin' spacing={1} direction='column'  >
        <Typography variant='h6' >manage my account</Typography>
       <Stack marginBottom='100px' spacing={0.5} direction='column'> 
        <Typography   variant='subtitle2' color='#f44336'>My Profile</Typography>
        <Typography variant='subtitle2' color='#546e7a'>Address Book</Typography>
        <Typography variant='subtitle2'color='#546e7a' >My Payment Options</Typography>
        </Stack>
        <Typography variant='h6' >My Orders</Typography>
        <Stack spacing={0.5} direction='column'>
        <Typography variant='subtitle2' color='#546e7a'>My Returns</Typography>
        <Typography variant='subtitle2' color='#546e7a' >My Cancellations</Typography>
        </Stack>

        </Stack>
        
        
        <Stack className='editprogileSeller' spacing={2} direction='column'>
        <Typography variant='subtitle2' color='#f44336'>Edit your profile</Typography>
        <Stack spacing={2} direction='row'>
        <TextField label='name' size='standard'>name</TextField>
        <TextField label='name' size='standard'>name</TextField>
        </Stack>
        <Stack spacing={2} direction='row'>
        <TextField label='name' size='standard'>name</TextField>
        <TextField label='name' size='standard'>name</TextField>
        </Stack>
        <Stack spacing={2} direction='column'>
        <TextField label='Password Changes' helperText='Do not share your password with anyone!' type='Password' size='standard'>Password Changes</TextField>
        <TextField label='New Password'  helperText='Do not share your password with anyone!' type='Password' size='standard'>New Password</TextField>
        <TextField label='Confirm Password'  helperText='Do not share your password with anyone!' type='Password' size='standard'>Confirm Password</TextField>
        </Stack> 
        <Stack spacing={0.5} direction='row'  alignItems='flex-end' textAlign='right' style={{marginLeft: 'auto'}}>
        <Typography variant='subtitle2' color='#212121' >Cancel</Typography>
        <Button variant='contained' color='error'>Save changes</Button>
        </Stack>
        </Stack>
       </Stack>

      
      
    </>
  )
}

export default Add




