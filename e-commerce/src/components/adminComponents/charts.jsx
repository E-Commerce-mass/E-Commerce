import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';


const chartSetting = {
  xAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 500,
  height: 400,
};
const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: 'Jan',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'Fev',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: 'Mar',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: 'Apr',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: 'June',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: 'July',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: 'Aug',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: 'Sept',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: 'Oct',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: 'Nov',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: 'Dec',
  },
];

const valueFormatter = (value) => `${value}mm`;
const Charts = () => {

  const [data,setData]=useState([])
  
  const[clientsdata,setClientsData]=useState([])
  const[sellers,setSellers]=useState([])
  useEffect(()=>{
  axios.get('http://localhost:8080/user/getclients')
  .then((res)=>{
    setClientsData(res.data)
  console.log(res.data);
  })
  .catch((err)=>{
      console.log(err);
  })
  },[])
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

  useEffect(()=>{
    axios.get('http://localhost:8080/user/getsellers')
    .then((res)=>{
      setSellers(res.data)
    console.log(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
    },[])
  
  return (
    <div style={{paddingTop: "150px",paddingRight: "10px", marginTop: "-30px"}}>
    <div style={{display:"flex", flexDirection:"row",gap:"90px",marginLeft:"260px" }}>
      
    <div style={{backgroundColor:"white",color:"black",boxShadow:"initial",borderRadius:"10px",width:"250px",height:"150px",flexDirection:"column",alignItems:"center",display:"flex"}}>
    <PersonIcon style={{fontSize:"50px",color:"#1AB07B",borderRadius:"50px",backgroundColor:"#BFE8DA",borderColor:"#B4CDEC",marginTop:"20px"}}/>
        <h6>Users</h6>
        {data.length}
        
 
    </div>
    <div style={{borderRadius:"10px",width:"250px",height:"150px",flexDirection:"column",alignItems:"center",display:"flex",backgroundColor:"white"}}>
      <ProductionQuantityLimitsIcon style={{fontSize:"70px",color:"#F9BB31"}}/>
        <h6>Products</h6>
 
    </div>
    <div style={{borderRadius:"10px",width:"250px",height:"150px",flexDirection:"column",alignItems:"center",display:"flex",backgroundColor:"white"}}>
        <ReviewsIcon style={{fontSize:"70px",color:"#4390ED"}}/>
        <h5>Reviews</h5>
       
    </div>
    <div style={{borderRadius:"10px",width:"250px",height:"150px",flexDirection:"column",alignItems:"center",display:"flex",backgroundColor:"white"}}>
      <ReportProblemIcon style={{fontSize:"70px", color:"red"}}/>
        <h6>Reports</h6>
 
    </div>
  </div>

  <div style={{display:"flex",gap:"30px",marginLeft:"160px",marginTop:"70px", }}>
   
      <BarChart sx={{borderRadius:"15px",backgroundColor:"white"}}
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />

    <PieChart sx={{borderRadius:"15px",backgroundColor:"#FFFFFF"}} 
    colors={['#F9BB31', '#4390ED']}
     series={[{data: [
        { id: 0, value: sellers.length, label: 'sellers' },
        { id: 1, value: clientsdata.length, label: 'clients' },],},]} width={400} height={400}/>
     
  </div>
</div>
  )
}

export default Charts