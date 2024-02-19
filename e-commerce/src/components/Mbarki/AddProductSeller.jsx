import React, { useEffect, useState, useRef } from 'react'
import { Typography } from '@mui/material'
import { Stack, TextField, Button } from '@mui/material'
import './AddProductSeller.css'
import { Link, useNavigate } from 'react-router-dom';  // Import Link and useNavigate
import axios from 'axios';
import Images from './Images';


const AddProductSeller = () => {
 
  const [namePro, setNamepRO] = useState('')
  const [price, setPrice] = useState('')
  const [color,setColor]=useState('')
  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState("")
  const [promotion, setPromotion] = useState('')
  const [description, setDescription] = useState('')
  const [exclusive, setExclusive] = useState('')
  const [categoryy,setCategoryy] = useState('')
  const [ref, setRef] = useState(false)

  const navigate = useNavigate();  // Get the navigate function from React Router

  const cloudinaryRef = useRef()
  const widgetRef = useRef()
  const [view, setView] = useState(false)
  const [images, setImages] = useState([])
  const [prodId, setProdId] = useState(0)

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: "dtdnjwyoc",
      uploadPreset: "dxiarb7gg"
    }, (error, result) => {
      if (error) {
        console.log(error);
      }
      else {
        if (result.info.files.length > 1) {
          setImages(result.info.files)
          console.log(images,'imageeseses');
        }
      }
    })
  }, [ref])

  const Addpro = (dataa) => {
    const id = localStorage.getItem("id")
    axios.post(`http://localhost:8080/product/addpro/${id}`,dataa )
    .then((result) => {
      console.log(result);
      const id = result.data.idproducts
      axios.post(`http://localhost:8080/image/add/${id}`, {image: images})
        .then(() => {
          console.log('done');
        })
        .catch((err) => {
          console.log(err);
        })
    }).catch((err) => {
      console.log(err);
    })
  }

  const goToProfile = () => {
    navigate('/ProfileSeller')
  };
  return (
    <div>
    <Stack spacing={30} direction='row'>
      <Stack className='sellermanagin' spacing={1} direction='column'>
        <Typography variant='h6'>manage my account</Typography>
        <Stack marginBottom='100px' spacing={0.5} direction='column'>
          <Link to="/ProfileSeller">
            <Typography variant='subtitle2' color='#f44336'>My Profile</Typography>
          </Link>
          <Typography variant='subtitle2' color='#546e7a'>Address Book</Typography>
          <Typography variant='subtitle2' color='#546e7a'>My Payment Options</Typography>
        </Stack>
        <Typography variant='h6'>My Orders</Typography>
        <Stack spacing={0.5} direction='column'>
          <Typography variant='subtitle2' color='#546e7a'>My Returns</Typography>
          <Typography variant='subtitle2' color='#546e7a'>My Cancellations</Typography>
        </Stack>
      </Stack>
  
      <Stack className='editprogileSeller' spacing={2} direction='column'>
        <Typography variant='subtitle2' color='#f44336'>Add Product</Typography>
        <Stack spacing={2} direction='row'>
          <input className='styled-input' type='text' placeholder='name Product' onChange={(e)=>setNamepRO(e.target.value)} />
          <button onClick={() => widgetRef.current.open()}>photos</button>
          {view ? <img src={file} alt="file" width={100} height={100} /> : <></>}
        </Stack>
        <Stack spacing={2} direction='row'>
          <input className='styled-input' type='text' placeholder='Price' onChange={(e)=>setPrice(e.target.value)} />
          <input  type='color' />
        </Stack>
        <Stack spacing={2} direction='column'>
          <input className='styled-input' type='text' placeholder='Size' onChange={(e) => setSize(e.target.value)} />
          <input className='styled-input' type='text' placeholder='Quantity' onChange={(e) => setQuantity(e.target.value)} />
          <input className='styled-input' type='text' placeholder='Promotion' onChange={(e) => setPromotion(e.target.value)} />
          <input className='styled-input' type='text' placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
          <input className='styled-input' type='text' placeholder='Exclusive' onChange={(e) => setExclusive(e.target.value)} />
          <input className='styled-input' type='text' placeholder='Category' onChange={(e) => setCategoryy(e.target.value)} />
        </Stack>
        <Stack spacing={0.5} direction='row' alignItems='flex-end' textAlign='right' style={{ marginLeft: 'auto' }}>
          <Link to="/ProfileSeller">
            <Typography variant='subtitle2' color='#212121'>Cancel</Typography>
          </Link>
          <Link to="/ProfileSeller">
            <Button variant='contained' color='error' onClick={() => Addpro(
              {
                productName:namePro,
                price:price,
                color:color,
                size:size,
                quantity:quantity,
                promotion:promotion,
                description:description,
                categoryname: categoryy
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

export default AddProductSeller