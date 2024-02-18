import React,{useState,useEffect} from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from "@mui/material/TextField";
import DeleteIcon from '@mui/icons-material/Delete';
import { Drawer, List, ListItem, ListItemText, Tooltip, AppBar, Toolbar, Input } from '@mui/material'

const Categories =()=>{
const [categories,setCategories]=useState([])
const[addfield,setAddfield]=useState(false)
const[categoryname,setCategoryname]=useState("")
const[refresh,setRefresh]=useState(false)
useEffect(()=>{
    axios.get('http://localhost:8080/categories/getcategories')
    .then((res)=>{
        console.log(res.data);
setCategories(res.data)
    })
    .catch((err)=>{
console.log(err);
    })
},[refresh])

const del=(id)=>{
axios.delete(`http://localhost:8080/categories/deletecategorie/${id}`)
.then(()=>{
    setRefresh(!refresh)
    console.log("deleted");
})
.catch((err)=>{
    console.log(err);
})
}

const add=()=>{
    axios.post('http://localhost:8080/categories/addcategorie',{
        categoryname:categoryname
    })
    .then(()=>{
        setRefresh(!refresh)
        console.log("added");
    })
    .catch((err)=>{
        console.log(err);
    })
  }


return (
<div style={{display:"grid",gridTemplateColumns:"33% 33% 33%",gap:"0px"}} >
{categories.map((el)=>{return(
    <div style={{marginLeft:"260px",marginTop:"50px"}}>
    <Card sx={{ width: 200}}>
        
      <CardContent>
        <Typography variant="h6" component="div">
             {el.categoryname}
        </Typography>
        <Typography sx={{}} color="text.secondary">
         
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button size="small">Products</Button>
        <ListItem button onClick={()=>{del(el.idcategories)}}>
        <DeleteIcon sx={{marginLeft:"60px"}}  />
        </ListItem>
      </CardActions>
    </Card>
    </div>)})}
    <div style={{paddingLeft:"260px",paddingTop:"50px",justifyContent:"center"}}>
    <Card sx={{ height: 130,justifyContent:"center",width:200}}>
      <CardContent>
        {addfield===false ? 
    <Fab color="secondary" aria-label="add" sx={{backgroundColor:"red",marginLeft:"55px",marginTop:"20px"}} onClick={()=>{setAddfield(true)}} >
    <AddIcon />
    </Fab> : 
    <div style={{justifyContent:"center"}} > 
         <TextField
          id="filled-textarea"
          label="Add a categorie"
          multiline
          variant="filled"
          onChange={(e)=>{setCategoryname(e.target.value)}}
        />
        <Button variant="contained" sx={{marginLeft:"50px",marginTop:"10px"}} onClick={()=>{setAddfield(false),add()}} >ADD</Button>
        </div>
        }
    </CardContent>
    </Card>
    </div>
    </div>
)
}

export default Categories