import {useState, useContext} from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';

function Hiv() {

  const [ultimoMesHiv, setUltimoMesHiv] = useState(false)

  const { anio,  numeroTotalGeneralNotificadosHiv, numeroTotalGeneralNotificadosHivFemenino, numeroTotalGeneralNotificadosHivMasculino, numeroTotalGeneralNotificadosHivSd, numeroTotalNotificadosHivPerinatal, numeroTotalNotificadosHivEmbarazo  } = useContext(DataContext);


  let tbcTotalMasculino = 90;
  let tbcTotalFemenino = 10;

  const totalPorSexoTbc = [numeroTotalGeneralNotificadosHivMasculino, numeroTotalGeneralNotificadosHivFemenino, numeroTotalGeneralNotificadosHivSd]
  return (
    <div className='page-container'>
      <h2>HIV</h2>
      <div className='btnElegir-page'>
      <button className={ultimoMesHiv ? "button" : "buttonActive"} onClick={()=>setUltimoMesHiv(false)}>Acumulado 2022</button>
      <button className={ultimoMesHiv ? "buttonActive" : "button"} onClick={()=>setUltimoMesHiv(true)}>Ver último mes</button>
      </div>

     {ultimoMesHiv 
     
     ?
      <div className='totalesGraphs-container'>
        <div className='totales-page-container'>
          <div className='recuadro amarillo'>Total último mes: <p className='totalNumber'>{}</p></div>
          <div className='recuadro rojo'>Confirmados: <p className='totalNumber'>{}</p></div>
          <div className='recuadro naranja'>Probables: <p className='totalNumber'>{}</p></div>
          <div className='recuadro verde'>Descartados: <p className='totalNumber'>{}</p></div>
          <div className='recuadro turquesa'>Gestantes: <p className='totalNumber'>{}</p></div>
          <div className='recuadro violeta'>Congénitos: <p className='totalNumber'>{}</p></div>
        </div>
        <div className='graphs-container'>
        <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoTbc} /></div>
        <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoTbc} /></div>

        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        </div>
      </div>

      :
      <div className='totalesGraphs-container'>
        <div className='totales-page-container'>
        <div className='recuadro amarillo'>Total 2022: <p className='totalNumber'>{numeroTotalGeneralNotificadosHiv}</p></div>
          <div className='recuadro rojo'>Confirmados: <p className='totalNumber'>{}</p></div>
          <div className='recuadro naranja'>Probables: <p className='totalNumber'>{}</p></div>
          <div className='recuadro verde'>Descartados: <p className='totalNumber'>{}</p></div>
          <div className='recuadro turquesa'>Gestantes:<p className='totalNumber'>{numeroTotalNotificadosHivEmbarazo}</p></div>
          <div className='recuadro violeta'>Congénitos: <p className='totalNumber'>{numeroTotalNotificadosHivPerinatal}</p></div>
        </div>
        <div className='graphs-container'>
        <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoTbc} /></div>
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

export default Hiv

/*

 <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoTbc} /></div>
        <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoTbc} /></div>

        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>

        */