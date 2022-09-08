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



function BarChartSe({
  eje,
  title,
  barLabels,
  label1,
  data1,
  borderColor1,
  bgColor1,
}) {

  const options = {
    indexAxis: eje,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
   // maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
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
    ],
  };





  return <Bar options={options} data={data} />;
}

export default BarChartSe