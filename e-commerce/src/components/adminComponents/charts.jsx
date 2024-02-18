import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';

const Charts = () => {
  
  
  
  return (
    <>
  
    <PieChart sx ={{ position:"relative" ,borderStyle:"groove",width:"fit-content",borderRadius:"15px",zIndex:"1"}} series={[{data: [
        { id: 0, value: 111, label: 'sellers' },
        { id: 1, value: 15, label: 'clients' },],},]} width={400} height={200}/>
      
</>
  )
}

export default Charts