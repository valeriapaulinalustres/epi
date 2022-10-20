import {useRef, useCallback} from 'react';
import {FiDownload} from 'react-icons/fi'
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



function BarChartFourData({
  title,
  barLabels,
  label1,
  label2,
  label3,
  label4,
  data1,
  data2,
  data3,
  data4,
  data5,
  borderColor1,
  borderColor2,
  borderColor3,
  borderColor4,
  bgColor1,
  bgColor2,
  bgColor3,
  bgColor4,
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


    ],
  };


//download chart button
const refChartFourData = useRef(null)

const downloadImageBarChartFour = useCallback(()=>{
  const link = document.createElement("a");
  link.download = `${title}.png`;
  link.href = refChartFourData.current.toBase64Image();
  link.click();
},[])




  return <div className='chart-container'>
  <Bar options={options} data={data} ref={refChartFourData}/>
  <button type="button" onClick={downloadImageBarChartFour} className="download-btn">
      <FiDownload />
    </button>
  </div>
 
}

export default BarChartFourData