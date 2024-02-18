import React, { useState } from 'react'
import { Typography } from '@mui/material'
import { Stack,TextField,Button} from '@mui/material'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'; // Import useNavigate
import './EditProduct.css';
import Images from './Images';



const EditProduct = () => {
  const [nameProo, setNamepROO] = useState('')
  const [pricee, setPricee] = useState('')
  const [colorr,setColorr]=useState('')
  const [sizee, setSizee] = useState('')
  const [quantityy, setQuantityy] = useState("")
  const [promotionn, setPromotionn] = useState('')
  const [descriptionn, setDescriptionn] = useState('')
  const [exclusivee, setExclusivee] = useState('')

  const navigate = useNavigate(); // Get the navigate function from React Router

  const edit=(id)=>{
   axios.put(`http://localhost:8080/product/getall/${id}`,data).then((result)=>{
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
        <Typography variant='subtitle2' color='#f44336'>Add Product</Typography>
        <Stack spacing={2} direction='row'>
          <input className='styled-inputt' type='text' placeholder='name Product' onChange={(e)=>setNamepROO(e.target.value)} />
          
        </Stack>
        <Stack spacing={2} direction='row'>
          <input className='styled-inputt' type='text' placeholder='Price' onChange={(e)=>setPricee(e.target.value)} />
          <input  type='color' onChange={(e) => setColorr(e.target.value)} />
        </Stack>
        <Stack spacing={2} direction='column'>
          <input className='styled-inputt' type='text' placeholder='Size' onChange={(e) => setSizee(e.target.value)} />
          <input className='styled-inputt' type='text' placeholder='Quantity' onChange={(e) => setQuantityy(e.target.value)} />
          <input className='styled-inputt' type='text' placeholder='Promotion' onChange={(e) => setPromotionn(e.target.value)} />
          <input className='styled-inputt' type='text' placeholder='Description' onChange={(e) => setDescriptionn(e.target.value)} />
          <input className='styled-inputt' type='text' placeholder='Exclusive' onChange={(e) => setExclusivee(e.target.value)} />
        </Stack>
        <Stack spacing={0.5} direction='row' alignItems='flex-end' textAlign='right' style={{ marginLeft: 'auto' }}>
          <Link to="/ProfileSeller">
            <Typography variant='subtitle2' color='#212121'>Cancel</Typography>
          </Link>
          <Link to="/ProfileSeller">
            <Button variant='contained' color='error' onClick={() => Addpro(
              {
                productName:nameProo,
                price:pricee,
                color:colorr,
                size:sizee,
                quantity:quantityy,
                promotion:promotionn,
                description:descriptionn
              }
            )}>
              Submit
            </Button>
          </Link>
        </Stack>
      </Stack>
              <div style={{paddingTop:'150px'}}>
              <Images/>
              </div>
       </Stack>  
    </div>
  )
}

export default EditProduct