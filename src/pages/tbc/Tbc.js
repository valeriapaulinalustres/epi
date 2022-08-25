import {useState, useContext} from 'react'
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';

function Tbc() {

  const [ultimoMesTbc, setUltimoMesTbc] = useState(false)

  const { anio, numeroTotalNotificadosTuberculosis,  numeroTotalNotificadosTuberculosisFemenino, numeroTotalNotificadosTuberculosisMasculino, numeroTotalNotificadosTuberculosisSd, numeroConfirmadosTotalTuberculosis, numeroDescartadosTotalTuberculosis, numeroEmbarazadasNotificadasTotalTuberculosis, numeroEmbarazadasConfirmadasTuberculosis, numeroEmbarazadasDescartadasTuberculosis, numeroEnEstudioTotalTuberculosis, numeroTotalGeneralTuberculosisMoron, numeroTotalGeneralTuberculosisNoMoron, porcentajeNotificadosTuberculosisMoron  } = useContext(DataContext);


  let tbcTotalMasculino = 90;
  let tbcTotalFemenino = 10;

  //const totalPorSexoTbc = [numeroTotalNotificadosTuberculosisMasculino, numeroTotalNotificadosTuberculosisFemenino, numeroTotalNotificadosTuberculosisSd]

//Gráfico notificados según sexo

const totalPorSexoTbc = [numeroTotalNotificadosTuberculosisMasculino, numeroTotalNotificadosTuberculosisFemenino, numeroTotalNotificadosTuberculosisSd]
const labelsSexoTbc =['Maculino', 'Femenino', 'SD']
const backgroundColorTbc = ['rgba(255, 151, 0, 0.2)', 'rgba(136, 19, 255, 0.2)', 'rgba(255, 0, 60, 0.2)']
const borderColorTbc = ['rgba(255, 151, 0, 1)', 'rgba(136, 19, 255, 1)', 'rgba(255, 0, 60, 1)']
const titleSexoTbc = "Casos notificados según sexo. Morón, 2022."

 //Gráfico notificados Morón/Total

 const notificadosTbcEstablecimientoCarga = [numeroTotalGeneralTuberculosisMoron, numeroTotalGeneralTuberculosisNoMoron]
 const labelsEstablecimientoTbc =['Establecimientos de Morón', 'Establecimientos no pertenecientes a Morón',]
 const backgroundColorEstablecimientoTbc= ['rgba(136, 19, 255, 0.2)', 'rgba(255, 0, 60, 0.2)']
 const borderColorEstablecimientoTbc = ['rgba(136, 19, 255, 1)', 'rgba(255, 0, 60, 1)']
 const titleEstablecimientoTbc = "Casos notificados según Establecimiento de carga. Morón, 2022."

//Alerts

function detallarEmbarazadasTuberculosis (){
  
  Toast.fire({
    title: `Gestantes confirmadas: ${numeroEmbarazadasConfirmadasTuberculosis}, \n 
    Gestantes descartadas: ${numeroEmbarazadasDescartadasTuberculosis}. \n
    ` 
  })
}


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
        <div className='recuadro rosa'>Descartados: <p className='totalNumber'>{}</p></div>
        <div className='recuadro lila'>Sospechosos: <p className='totalNumber'>{}</p></div>
        <div className='recuadro salmon'>Gestantes: <p className='totalNumber'>{}</p></div>
        <div className='recuadro rosa'>Notificados por Morón: <p className='totalNumber'>{}%</p></div>
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
        <div className='recuadro rosa'>Descartados: <p className='totalNumber'>{numeroDescartadosTotalTuberculosis}</p></div>
        <div className='recuadro lila'>En estudio: <p className='totalNumber'>{numeroEnEstudioTotalTuberculosis}</p></div>
        <div className='recuadro salmon' onClick={detallarEmbarazadasTuberculosis}>Gestantes: <p className='totalNumber'>{numeroEmbarazadasNotificadasTotalTuberculosis}</p></div>
        <div className='recuadro rosa'>Notificados por Morón: <p className='totalNumber'>{porcentajeNotificadosTuberculosisMoron}%</p></div>
      </div>
      
      <div className='graphs-container'>
      <div className='doughnutChart-sifilis'><DoughnutChart title={titleSexoTbc} datos={totalPorSexoTbc} labels={labelsSexoTbc} backgroundColor={backgroundColorTbc} borderColor={borderColorTbc}/></div>
        <div className='doughnutChart-sifilis'><DoughnutChart  title={titleEstablecimientoTbc} datos={notificadosTbcEstablecimientoCarga} labels={labelsEstablecimientoTbc} backgroundColor={backgroundColorEstablecimientoTbc} borderColor={borderColorEstablecimientoTbc}/></div>

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
