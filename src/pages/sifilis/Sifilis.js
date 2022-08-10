import {useState, useContext} from 'react'
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import './sifilis.css';
import DataContext from '../../context/DataContext';

function Sifilis() {

const [ultimoMesSifilis, setUltimoMesSifilis] = useState(false)

const { anio, numeroTotalGeneralNotificadosSifilis, numeroTotalGeneralNotificadosSifilisFemenino, numeroTotalGeneralNotificadosSifilisMasculino, numeroTotalGeneralNotificadosSifilisSd, numeroTotalNotificadosSifilisCongenita, numeroTotalNotificadosSifilisEmbarazadas  } = useContext(DataContext);


  

  const totalPorSexoSifilis = [numeroTotalGeneralNotificadosSifilisMasculino, numeroTotalGeneralNotificadosSifilisFemenino, numeroTotalGeneralNotificadosSifilisSd]

  return (
    <div className='page-container'>
      <h2>Sífilis</h2>
      <div className='btnElegir-page'>
      <button className={ultimoMesSifilis ? "button" : "buttonActive"} onClick={()=>setUltimoMesSifilis(false)}>Acumulado 2022</button>
      <button className={ultimoMesSifilis ? "buttonActive" : "button"} onClick={()=>setUltimoMesSifilis(true)}>Ver último mes</button>
      </div>

     {ultimoMesSifilis 
     
     ?
      <div className='totalesGraphs-container'>
        <div className='totales-page-container'>
          <div className='recuadro amarillo'>Total último mes: <p className='totalNumber'>120</p></div>
          <div className='recuadro rojo'>Confirmados: <p className='totalNumber'>{}</p></div>
          <div className='recuadro naranja'>Probables: <p className='totalNumber'>{}</p></div>
          <div className='recuadro verde'>Descartados: <p className='totalNumber'>{}</p></div>
          <div className='recuadro turquesa'>Gestantes: <p className='totalNumber'>{}</p></div>
          <div className='recuadro violeta'>Congénitos: <p className='totalNumber'>{}</p></div>
        </div>
        <div className='graphs-container'>
        <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoSifilis} /></div>
        <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoSifilis} /></div>
        <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoSifilis} /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        </div>
      </div>

      :
      <div className='totalesGraphs-container'>
        <div className='totales-page-container'>
        <div className='recuadro amarillo'>Total 2022: <p className='totalNumber'>{numeroTotalGeneralNotificadosSifilis}</p></div>
          <div className='recuadro rojo'>Confirmados: <p className='totalNumber'>{}</p></div>
          <div className='recuadro naranja'>Probables: <p className='totalNumber'>{}</p></div>
          <div className='recuadro verde'>Descartados: <p className='totalNumber'>{}</p></div>
          <div className='recuadro turquesa'>Gestantes: <p className='totalNumber'>{numeroTotalNotificadosSifilisEmbarazadas}</p></div>
          <div className='recuadro violeta'>Congénitos: <p className='totalNumber'>{numeroTotalNotificadosSifilisCongenita}</p></div>
        </div>
        <div className='graphs-container'>
        <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoSifilis} /></div>
        <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoSifilis} /></div>
        <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoSifilis} /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
</div>
      </div>
}


    </div>
  )
}

export default Sifilis