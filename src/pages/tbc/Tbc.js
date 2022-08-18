import {useState, useContext} from 'react'
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';

function Tbc() {

  const [ultimoMesTbc, setUltimoMesTbc] = useState(false)

  const { anio, numeroTotalNotificadosTuberculosis,  numeroTotalNotificadosTuberculosisFemenino, numeroTotalNotificadosTuberculosisMasculino, numeroTotalNotificadosTuberculosisSd, numeroConfirmadosTotalTuberculosis } = useContext(DataContext);


  let tbcTotalMasculino = 90;
  let tbcTotalFemenino = 10;

  const totalPorSexoTbc = [numeroTotalNotificadosTuberculosisMasculino, numeroTotalNotificadosTuberculosisFemenino, numeroTotalNotificadosTuberculosisSd]

  return (
    <div className='page-container'>
    <h2>Tuberculosis</h2>
    <div className='btnElegir-page'>
    <button className={ultimoMesTbc ? "button" : "buttonActive"} onClick={()=>setUltimoMesTbc(false)}>Acumulado 2022</button>
    <button className={ultimoMesTbc ? "buttonActive" : "button"} onClick={()=>setUltimoMesTbc(true)}>Ver último mes</button>
    </div>

   {ultimoMesTbc 
   
   ?
    <div className='totalesGraphs-container'>
      <div className='totales-page-container'>
        <div className='recuadro naranja'>Total último mes: <p className='totalNumber'>{}</p></div>
        <div className='recuadro salmon'>Confirmados: <p className='totalNumber'>{}</p></div>
        <div className='recuadro rosa'>Probables: <p className='totalNumber'>{}</p></div>
        <div className='recuadro lila'>Descartados: <p className='totalNumber'>{}</p></div>
        <div className='recuadro rosa'>Gestantes: <p className='totalNumber'>{}</p></div>
        <div className='recuadro salmon'>Congénitos: <p className='totalNumber'>{}</p></div>
      </div>
      <div className='graphs-container'>
      <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoTbc} /></div>

        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
      </div>
    </div>

    :
    <div className='totalesGraphs-container'>
      <div className='totales-page-container'>
      <div className='recuadro naranja'>Total 2022: <p className='totalNumber'>{numeroTotalNotificadosTuberculosis}</p></div>
        <div className='recuadro salmon'>Confirmados: <p className='totalNumber'>{numeroConfirmadosTotalTuberculosis}</p></div>
        <div className='recuadro rosa'>Probables: <p className='totalNumber'>{}</p></div>
        <div className='recuadro lila'>Descartados: <p className='totalNumber'>{}</p></div>
        <div className='recuadro rosa'>Gestantes: <p className='totalNumber'>{}</p></div>
        <div className='recuadro salmon'>Congénitos: <p className='totalNumber'>{}</p></div>
      </div>
      <div className='graphs-container'>
      <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoTbc} /></div>

        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
</div>
    </div>
}


  </div>


  )
}

export default Tbc

/*
  <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoTbc} /></div>
        <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoTbc} /></div>

        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        */
