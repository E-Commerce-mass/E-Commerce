import React, { useState } from 'react'
import { Typography } from '@mui/material'
import { Stack,TextField,Button} from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const EditProduct = () => {
  const[editpro,setEditPro]=useState({
    
  })
  const navigate = useNavigate(); // Get the navigate function from React Router

  const edit=(id)=>{
   axios.put(`http://localhost:8080/product/getall/${id}`).then((result)=>{
    console.log(result)
   }).catch((err)=>{
    console.log(err);
   }) 
  }
  const goToProfile =()=>{
    navigate('/ProfileSeller')
  }

  return (
    <div>
         <Stack spacing={30} direction='row'>
        <Stack className='sellermanagin' spacing={1} direction='column'  >
        <Typography variant='h6' >manage my account</Typography>
       <Stack marginBottom='100px' spacing={0.5} direction='column'> 
        
        <Typography   variant='subtitle2' color='#f44336' onClick={goToProfile} >My Profile</Typography>
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
        <Typography variant='subtitle2' color='#f44336'>Edit your Product</Typography>
        <Stack spacing={2} direction='row'>
        <TextField label='name Product' size='standard'>name Product</TextField>
        <TextField label='product Image' size='standard'>product Image</TextField>
        </Stack>
        <Stack spacing={2} direction='row'>
        <TextField label='Price' size='standard'>price</TextField>
        <input type='color'/>   
        </Stack>
        <Stack spacing={2} direction='column'>
        <TextField label='Size' size='standard'>size</TextField>
         <input style={{height:'40px'}} type="number"  placeholder='Quantity'/>
        <TextField label='Promotion' size='standard'>promotion</TextField>
        <TextField label='Description' size='standard'>description</TextField>
        <TextField label='Exclusive' size='standard'>Exclusive</TextField>
        </Stack> 
        <Stack spacing={0.5} direction='row'  alignItems='flex-end' textAlign='right' style={{marginLeft: 'auto'}}>
        <Typography variant='subtitle2' color='#212121' >Cancel</Typography>
        <Button variant='contained' color='error'>Submit</Button>
        </Stack>
        </Stack>
       </Stack>  
    </div>
  )
}

export default EditProduct