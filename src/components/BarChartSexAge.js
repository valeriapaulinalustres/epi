import {useRef, useCallback} from 'react';
import {FiDownload} from 'react-icons/fi';
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
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Chartjs register
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Chartjs plugin Datalabels register
Chart.register(ChartDataLabels);



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


//download chart button
const refBarChartSexAge = useRef(null)

const downloadImageBarChartSexAge = useCallback(()=>{
  const link = document.createElement("a");
  link.download = `${title}.png`;
  link.href = refBarChartSexAge.current.toBase64Image();
  link.click();
},[])



  return <div className='chart-container'>
 <Bar options={options} data={data} ref={refBarChartSexAge}/>
 <button type="button" onClick={downloadImageBarChartSexAge} className="download-btn">
      <FiDownload />
    </button>
  </div>
 
}

export default BarChartSexAge