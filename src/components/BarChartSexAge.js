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



function BarChartSexAge({
  title,
  barLabels,
  label1,
  label2,
  data1,
  data2,
  borderColor1,
  borderColor2,
  bgColor1,
  bgColor2,
}) {

  const options = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
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
      {
        label: label2,
        data: data2,
        borderColor: borderColor2,
        backgroundColor: bgColor2,
      },


    ],
  };





  return <Bar options={options} data={data} />;
}

export default BarChartSexAge