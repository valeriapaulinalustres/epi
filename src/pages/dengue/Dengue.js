import {useState, useContext} from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';

function Dengue() {

const [ultimoMesDengue, setUltimoMesDengue] = useState(false)

const { anio, numeroTotalNotificadosDengue,  numeroTotalNotificadosDengueFemenino, numeroTotalNotificadosDengueMasculino, numeroTotalNotificadosDengueSd, numeroConfirmadosTotalDengue, numeroProbablesTotalDengue, numeroDescartadosTotalDengue, numeroEmbarazadasNotificadoTotalDengue, numeroEmbarazadasConfirmadasDengue, numeroEmbarazadasDescartadasDengue, numeroSospechososTotalDengue, numeroTotalGeneralDengueMoron, numeroTotalGeneralDengueNoMoron, porcentajeNotificadosDengueMoron } = useContext(DataContext);


  const totalPorSexoTbc = [numeroTotalNotificadosDengueFemenino, numeroTotalNotificadosDengueMasculino, numeroTotalNotificadosDengueSd]
 
//Gráfico notificados según sexo

const totalPorSexoDengue = [numeroTotalNotificadosDengueMasculino, numeroTotalNotificadosDengueFemenino, numeroTotalNotificadosDengueSd]
const labelsSexoDengue =['Maculino', 'Femenino', 'SD']
const backgroundColorDengue = ['rgba(255, 151, 0, 0.2)', 'rgba(136, 19, 255, 0.2)', 'rgba(255, 0, 60, 0.2)']
const borderColorDengue = ['rgba(255, 151, 0, 1)', 'rgba(136, 19, 255, 1)', 'rgba(255, 0, 60, 1)']
const titleSexoDengue = "Casos notificados según sexo. Morón, 2022."


//Gráfico notificados Morón/Total

const notificadosDengueEstablecimientoCarga = [numeroTotalGeneralDengueMoron, numeroTotalGeneralDengueNoMoron]
const labelsEstablecimientoDengue =['Establecimientos de Morón', 'Establecimientos no pertenecientes a Morón',]
const backgroundColorEstablecimientoDengue= ['rgba(136, 19, 255, 0.2)', 'rgba(255, 0, 60, 0.2)']
const borderColorEstablecimientoDengue = ['rgba(136, 19, 255, 1)', 'rgba(255, 0, 60, 1)']
const titleEstablecimientoDengue = "Casos notificados según Establecimiento de carga. Morón, 2022."


//Alerts

function detallarEmbarazadasDengue (){
  
  Toast.fire({
    title: `Gestantes confirmadas: ${numeroEmbarazadasConfirmadasDengue}, \n 
    Gestantes descartadas: ${numeroEmbarazadasDescartadasDengue}. \n
    ` 
  })
}

  return (
    <div className='page-container'>
    <h2>Dengue</h2>
    <div className='btnElegir-page'>
    <button className={ultimoMesDengue ? "button" : "buttonActive"} onClick={()=>setUltimoMesDengue(false)}>Acumulado 2022</button>
    <button className={ultimoMesDengue ? "buttonActive" : "button"} onClick={()=>setUltimoMesDengue(true)}>Ver último mes</button>
    </div>

   {ultimoMesDengue 
   
   ?
   <div className='totalesGraphs-container'>
   <div className='totales-page-container'>
     <div className='recuadro naranja'>Total último mes: <p className='totalNumber'>{}</p></div>
     <div className='recuadro salmon'>Confirmados: <p className='totalNumber'>{}</p></div>
     <div className='recuadro rosa'>Probables: <p className='totalNumber'>{}</p></div>
     <div className='recuadro lila'>Descartados: <p className='totalNumber'>{}</p></div>
     <div className='recuadro salmon'>Gestantes: <p className='totalNumber'>{}</p></div>
     <div className='recuadro rosa'>Sospechosos: <p className='totalNumber'>{}</p></div>
     <div className='recuadro lila'>Notificados por Morón: <p className='totalNumber'>{}%</p></div>
   </div>

   <div className='graphs-container'>
   <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoTbc} /></div>
        <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoTbc} /></div>

        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
   </div>
 </div>

    :
    <div className='totalesGraphs-container'>
      <div className='totales-page-container'>
      <div className='recuadro naranja'>Total 2022: <p className='totalNumber'>{numeroTotalNotificadosDengue}</p></div>
        <div className='recuadro salmon'>Confirmados: <p className='totalNumber'>{numeroConfirmadosTotalDengue}</p></div>
        <div className='recuadro rosa'>Probables: <p className='totalNumber'>{numeroProbablesTotalDengue}</p></div>
        <div className='recuadro lila'>Descartados: <p className='totalNumber'>{numeroDescartadosTotalDengue}</p></div>
        <div className='recuadro salmon' onClick={detallarEmbarazadasDengue}>Gestantes: <p className='totalNumber'>{numeroEmbarazadasNotificadoTotalDengue}</p></div>
        <div className='recuadro rosa'>Sospechosos: <p className='totalNumber'>{numeroSospechososTotalDengue}</p></div>
        <div className='recuadro lila'>Notificados por Morón: <p className='totalNumber'>{porcentajeNotificadosDengueMoron}%</p></div>
      </div>
      <div className='graphs-container'>
      <div className='doughnutChart-sifilis'><DoughnutChart title={titleSexoDengue} datos={totalPorSexoDengue} labels={labelsSexoDengue} backgroundColor={backgroundColorDengue} borderColor={borderColorDengue}/></div>
        <div className='doughnutChart-sifilis'><DoughnutChart  title={titleEstablecimientoDengue} datos={notificadosDengueEstablecimientoCarga} labels={labelsEstablecimientoDengue} backgroundColor={backgroundColorEstablecimientoDengue} borderColor={borderColorEstablecimientoDengue}/></div>

        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
</div>
    </div>
}


  </div>
  )
}

export default Dengue

/*
 <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoTbc} /></div>
        <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoTbc} /></div>

        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        */