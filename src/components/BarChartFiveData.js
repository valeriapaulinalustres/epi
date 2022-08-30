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



function BarChartFiveData({
  title,
  barLabels,
  label1,
  label2,
  label3,
  label4,
  label5,
  data1,
  data2,
  data3,
  data4,
  data5,
  borderColor1,
  borderColor2,
  borderColor3,
  borderColor4,
  borderColor5,
  bgColor1,
  bgColor2,
  bgColor3,
  bgColor4,
  bgColor5,
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
      {
        label: label3,
        data: data3,
        borderColor: borderColor3,
        backgroundColor: bgColor3,
      },
      {
        label: label4,
        data: data4,
        borderColor: borderColor4,
        backgroundColor: bgColor4,
      },
      {
        label: label5,
        data: data5,
        borderColor: borderColor5,
        backgroundColor: bgColor5,
      },


    ],
  };





  return <Bar options={options} data={data} />;
}

export default BarChartFiveData