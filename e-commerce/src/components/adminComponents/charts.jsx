import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';

const Charts = () => {
  
  
  
  return (
    <>
       



    <div style={{ height: 400, width: '76%',marginLeft:"20%",position:"absolute" }} >
    <PieChart series={[{data: [
        { id: 0, value: 111, label: 'sellers' },
        { id: 1, value: 15, label: 'clients' },],},]} width={400} height={200}/>
        </div>
    <div style={{ height: 50, width: '20%',marginLeft:"60%",position:"absolute" }}>
        <BarChart
      series={[
        { data: [35] },
        { data: [51] },
      ]}
      height={290}
      xAxis={[{ data: ['Q1'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
    </div>
    <div style={{ height: 50, width: '20%',marginLeft:"60%",position:"absolute",marginTop:"20%" }} >
    <LineChart
  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
  series={[
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
    },
  ]}
  width={500}
  height={300}
/>

    </div>
</>
  )
}

export default Charts