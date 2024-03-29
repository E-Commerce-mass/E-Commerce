import React, { useEffect, useState } from 'react'
import { Stack,TextField,Rating,Button} from '@mui/material'
import { Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './ProfileSeller.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const ProifleSeller = () => {
  const [dataSeller,setDataSeller]=useState([])
  useEffect((id)=>{
    axios.get(`http://localhost:8080/product/getall/${id}`).then((res)=>{
      setDataSeller(res.dataSeller)
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  const deleteProd=()=>{
    axios.delete(``).then(()=>{
      console.log('deleted');
    }).catch((err)=>{
      console.log(err);
    })
  }
  const navigate = useNavigate(); // Get the navigate function from React Router
  
  const goToEditProduct = () => {
    navigate('/editProductSeller'); // Navigate to the desired path
  };
  const goToAdd=()=>{
    navigate('/addProductSeller')
  }
  


  return (
    <div>
       <div>
        <Stack spacing={30} direction='row'>
       <div className='selernav'>
        <Stack className='sellermanagin' spacing={1} direction='column'  >
       <Typography variant='h5'  color='#f44336' >My Product</Typography>
        <Typography variant='h6' >manage my account</Typography>
       <Stack marginBottom='100px' spacing={0.5} direction='column'> 
        <Typography   variant='subtitle2' color='#f44336'  >My Profile</Typography>
        <Typography variant='subtitle2' color='#546e7a'>Address Book</Typography>
        <Typography variant='subtitle2'color='#546e7a' >My Payment Options</Typography>
        </Stack>
        <Typography variant='h6' >My Orders</Typography>
        <Stack spacing={0.5} direction='column'>
        <Typography variant='subtitle2' color='#546e7a'>My Returns</Typography>
        <Typography variant='subtitle2' color='#546e7a' >My Cancellations</Typography>
        </Stack>
        
        </Stack>
        </div>
        <div className='ListProfile'>
            <Stack direction='row'>
            <TextField
                fullWidth
                id="standard-bare"
                variant="outlined"
               placeholder='searsh'
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchOutlinedIcon  />
                    </IconButton>
                  )
                }}
              />


            </Stack>
        <Stack className='editprogileSeller' spacing={2} direction='column'>
          
          <Stack spacing={8} direction='row'>      
        <Typography variant='subtitle2' color='#f44336'> my List</Typography>
        <AddCircleIcon button onClick={goToAdd}/>
        </Stack>
        
        {/* map data */}

    
        <div className='salah' style={{paddingTop:'20px'}}>
        <div style={{height:"300px", width:"260px"}} className='listItemSeller'>
       
        <Stack spacing={1} direction='column'> 
        <div className="iconDelete">
        <DeleteOutlineIcon className='deletebuttonseller'/>
       </div>
       <Stack spacing={1} direction='column'>
        </Stack>
       <img style={{marginTop:"-11px"}} className='imagecontentseller' src="https://www.scoopgaming.com.tn/9661-large_default/play-station-4-sony-manette-dual-shock-blanche.jpg" alt="no content" /> 
       <Button variant='contained' color='error'  onClick={goToEditProduct}>Edit</Button>
       <div style={{marginTop:"7px"}}>
       <Stack spacing={2} direction='row'>
        <Typography  variant='subtitle2' > Accessoires PS4 Sony </Typography>
        <Typography  variant='subtitle2' > (15) </Typography>
        </Stack>
        </div>
      <div >
        <Typography variant='subtitle2' color='#f44336'>$ 550</Typography>
        </div>
       <Stack>
        <div style={{marginTop:"-12px"}}  > <Rating />
        </div>
        </Stack>
        </Stack>  
          </div>
         </div>


        </Stack>
        </div>
       </Stack>
       </div>
    </div>
  )
}

export default ProifleSeller