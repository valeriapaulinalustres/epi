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
//SE IMPORTA EL PLUGIN PARA VER VALORES EN LOS GRÁFICOS, SUFICIENTE CON PONER ESTE IMPORT SÓLO UNA VEZ
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

// Chartjs plugin Datalabels register ES SUFICIENTE CON PONERLO SOLAMENTE UNA VEZ
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
       // Change options for ALL labels of THIS CHART
      datalabels: {
        color: function (context) {
          var index = context.dataIndex;
          var value = context.dataset.data[index];
          return value < 1 ? 'white' :  // draw negative values in red
            index % 2 ? 'grey' :      // else, alternate values in blue and green
              'grey';
        }
      }
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