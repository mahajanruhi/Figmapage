import React from 'react'
import Chart from 'react-apexcharts'
const Giveaways = () => {
  const data={
  
    series:[
      {
        name: "Review",
        data: [5,4,30,8,25,5,6],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      fill:{
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "text",
        },
      },
      grid: {
        show: false,
      },
      xaxis:{
        type: "text",
        categories: [

          "Sun",
          "Mon",
          "Tues",
          "Wed",
          "Thurs",
          "Fri",
          "Sat",
        ],
      },
      yaxis: {
        show:false
      },
      toolbar:{
        show:false
      }
    },
  };



  return (
    <>
      <div className="Giveaways"></div>
   <h3>Total Giveaways </h3>
   <Chart series = {data.series} options={data.options} type="area"/>
    </>
 
  )
}
 
export default Giveaways