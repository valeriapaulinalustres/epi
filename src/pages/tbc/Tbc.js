import {useState, useContext} from 'react'
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';
import Colors from '../../components/Colors'

function Tbc() {

  const [ultimoMesTbc, setUltimoMesTbc] = useState(false)

  const { anio, numeroTotalNotificadosTuberculosis,  numeroTotalNotificadosTuberculosisFemenino, numeroTotalNotificadosTuberculosisMasculino, numeroTotalNotificadosTuberculosisSd, numeroConfirmadosTotalTuberculosis, numeroDescartadosTotalTuberculosis, numeroEmbarazadasNotificadasTotalTuberculosis, numeroEmbarazadasConfirmadasTuberculosis, numeroEmbarazadasDescartadasTuberculosis, numeroEnEstudioTotalTuberculosis, numeroTotalGeneralTuberculosisMoron, numeroTotalGeneralTuberculosisNoMoron, porcentajeNotificadosTuberculosisMoron, numeroTotalPositivosTuberculosis, numeroTotalNegativosTuberculosis, numeroTotalSinResultadoTuberculosis  } = useContext(DataContext);

  const [salmonTransparente, salmon, lilaTransparente, lila, rosaTransparente, rosa] = Colors

  let tbcTotalMasculino = 90;
  let tbcTotalFemenino = 10;

  //const totalPorSexoTbc = [numeroTotalNotificadosTuberculosisMasculino, numeroTotalNotificadosTuberculosisFemenino, numeroTotalNotificadosTuberculosisSd]

//Gráfico notificados según sexo

const totalPorSexoTbc = [numeroTotalNotificadosTuberculosisMasculino, numeroTotalNotificadosTuberculosisFemenino, numeroTotalNotificadosTuberculosisSd]
const labelsSexoTbc =['Maculino', 'Femenino', 'SD']
const backgroundColorTbc = [salmonTransparente, lilaTransparente, rosaTransparente]
const borderColorTbc = [salmon, lila, rosa]
const titleSexoTbc = "Casos notificados según sexo. Morón, 2022."

 //Gráfico notificados Morón/Total

 const notificadosTbcEstablecimientoCarga = [numeroTotalGeneralTuberculosisMoron, numeroTotalGeneralTuberculosisNoMoron]
 const labelsEstablecimientoTbc =['Establecimientos de Morón', 'Establecimientos no pertenecientes a Morón',]
 const backgroundColorEstablecimientoTbc= [lilaTransparente, rosaTransparente]
 const borderColorEstablecimientoTbc = [lila, rosa]
 const titleEstablecimientoTbc = "Casos notificados de Tuberculosis según Establecimiento de carga. Morón, 2022."

//Tabla resultados

const titleResultadoTuberculosis = "Casos notificados de Tuberculosis según resultado de laboratorio. Morón, 2022."
const labelsRestultadoTuberculosis = ["Resultados de laboratorio"]
const label1RestultadoTuberculosis = "Positivos"
const label2RestultadoTuberculosis = "Negativos"
const label3RestultadoTuberculosis = "En estudio"
const dataPositivosTuberculosis = [numeroTotalPositivosTuberculosis]
const dataNegativosTuberculosis = [numeroTotalNegativosTuberculosis]
const dataSinResultadosTuberculosis = [numeroTotalSinResultadoTuberculosis]






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

        <div className='barChart-sifilis'><BarChart title={titleResultadoTuberculosis} barLabels={labelsRestultadoTuberculosis} label1={label1RestultadoTuberculosis} label2={label2RestultadoTuberculosis} label3={label3RestultadoTuberculosis}  data1={dataPositivosTuberculosis} data2={dataNegativosTuberculosis} data3={dataSinResultadosTuberculosis} borderColor1={lila} borderColor2={salmon} borderColor3={rosa} bgColor1={lilaTransparente} bgColor2={salmonTransparente} bgColor3={rosaTransparente}/></div>
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
