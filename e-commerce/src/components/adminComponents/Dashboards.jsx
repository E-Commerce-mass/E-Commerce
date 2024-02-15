import  React,{useState,useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Charts from './charts';
import axios from "axios"
const columns = [
    { field: 'iduser', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'role',
      headerName: 'Role',
      width: 60,
    },
    {
      field: 'emailPhone',
      headerName: 'Email',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 1000,
    }
  ];
  

const Dashboards =()=>{
const[data,setData]=useState([])
console.log(data);
useEffect(()=>{
axios.get('http://localhost:8080/user/getallusers')
.then((res)=>{
setData(res.data)
console.log(res.data);
})
.catch((err)=>{
    console.log(err);
})
},[])

return (
<>

<div style={{ height: "54%", width: '76%',marginLeft:"20%",position:"absolute",marginTop:"0%" }}>
      <DataGrid
      getRowId={(row) => row.iduser}
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>




</>

)
}
export default Dashboards