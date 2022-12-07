import React from "react";
import {Line } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";
import { useSelector } from "react-redux";

const DataDashboard = () => {
    // const random = () => Math.round(Math.random() * 100);
   
    const labels = useSelector((state)=> state.tempLight.labels)
    const datasets = useSelector((state) => state.tempLight.datasets)

    const state = {
        labels,
        datasets
    }
    return (
      <div>
        <Line 
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
}

export default DataDashboard;