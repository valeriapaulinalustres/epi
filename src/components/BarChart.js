import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



function BarChart({ title, barLabels, label1, label2, label3, data1, data2, data3, borderColor1, borderColor2, borderColor3, bgColor1, bgColor2, bgColor3}) {

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: title,
      },
    },
  };


  const labels = barLabels;

  const data = {
    labels,
    datasets: [
      {
        label: label1,
        data: data1,
        borderColor: borderColor1,
        backgroundColor: bgColor1,
      },
      {
        label: label2,
        data: data2,
        borderColor: borderColor2,
        backgroundColor: bgColor2,
      },
    
      {
        label: label3,
        data: data3,
        borderColor: borderColor3,
        backgroundColor: bgColor3,
      },
      
    ],
  };




  
  return <Bar options={options} data={data} />;
}

export default BarChart