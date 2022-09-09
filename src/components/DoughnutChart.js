import { useRef, useCallback } from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { FiDownload } from 'react-icons/fi';



ChartJS.register(ArcElement, Tooltip, Legend, Title);



function DoughnutChart({ title, datos, labels, backgroundColor, borderColor, }) {

  //download chart button
  const ref = useRef(null)

  const downloadImage = useCallback(() => {
    const link = document.createElement("a");
    link.download = `${title}.png`;
    link.href = ref.current.toBase64Image();
    link.click();
    console.log(link.href);
  }, [])

  const data = {
    labels: labels,
    datasets: [
      {
        label: "hola",
        data: datos,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
    
  };

  const options = {
    
      plugins: {
        title: {
          display: true,
          text: title,
          align: "center",
          padding: {
            top: 10,
            bottom: 30,
          },
        },
        legend: {
          display: true,
          position: "top",
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
   
  }

 

  return (
    <div className='chart-container'>
       <Doughnut ref={ref} data={data}  options={options}/>
      <button type="button" onClick={downloadImage} className="download-btn">
        <FiDownload />
      </button>
    </div>
  )
}

export default DoughnutChart

/*

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function App() {
  return <Doughnut data={data} />;
}
*/