import {useState, useContext} from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';

function Hiv() {

  const [ultimoMesHiv, setUltimoMesHiv] = useState(false)

  const { anio,  numeroTotalGeneralNotificadosHiv, numeroTotalGeneralNotificadosHivFemenino, numeroTotalGeneralNotificadosHivMasculino, numeroTotalGeneralNotificadosHivSd, numeroTotalNotificadosHivPerinatal, numeroTotalNotificadosHivEmbarazo, numeroConfirmadosTotalGeneralHiv, numeroConfirmadosTotalHiv, numeroConfirmadosTotalHivEmbarazo, numeroConfirmadosTotalHivPerinatal, numeroProbablesTotalGeneralHiv, numeroProbablesTotalHivEmbarazo, numeroProbablesTotalHivPerinatal, numeroProbablesTotalHiv, numeroDescartadosTotalGeneralHiv, numeroDescartadosTotalHiv, numeroDescartadosTotalHivPerinatal, numeroDescartadosTotalHivEmbarazadas, porcentajeNotificadosHivMoron, numeroTotalGeneralHivNoMoron, numeroTotalGeneralHivMoron  } = useContext(DataContext);


  let tbcTotalMasculino = 90;
  let tbcTotalFemenino = 10;

  const totalPorSexoTbc = [numeroTotalGeneralNotificadosHivMasculino, numeroTotalGeneralNotificadosHivFemenino, numeroTotalGeneralNotificadosHivSd]

//Gráfico notificados según sexo

const totalPorSexoHiv = [numeroTotalGeneralNotificadosHivMasculino, numeroTotalGeneralNotificadosHivFemenino, numeroTotalGeneralNotificadosHivSd]
const labelsSexoHiv =['Maculino', 'Femenino', 'SD']
const backgroundColorHiv = ['rgba(255, 151, 0, 0.2)', 'rgba(136, 19, 255, 0.2)', 'rgba(255, 0, 60, 0.2)']
const borderColorHiv = ['rgba(255, 151, 0, 1)', 'rgba(136, 19, 255, 1)', 'rgba(255, 0, 60, 1)']
const titleSexoHiv = "Casos notificados según sexo. Morón, 2022."

 //Gráfico embarazadas sobre total de notificadas mujeres

 const embarazadasEnMujeresHiv = [numeroTotalNotificadosHivEmbarazo, parseInt(numeroTotalGeneralNotificadosHivFemenino-numeroTotalNotificadosHivEmbarazo)]
 const labelsEmbarazoHiv =['Gestantes', 'No gestantes',]
 const backgroundColorEmbarazoHiv= ['rgba(255, 151, 0, 0.2)', 'rgba(255, 0, 60, 0.2)']
 const borderColorEmbarazoHiv = ['rgba(255, 151, 0, 1)', 'rgba(255, 0, 60, 1)']
 const titleEmbarazoHiv = "Casos notificados en gestantes, sobre personas con posibilidad de gestar. Morón, 2022."
//Gráfico notificados Morón/Total

const notificadosHivEstablecimientoCarga = [numeroTotalGeneralHivMoron, numeroTotalGeneralHivNoMoron]
const labelsEstablecimientoHiv =['Establecimientos de Morón', 'Establecimientos no pertenecientes a Morón',]
const backgroundColorEstablecimientoHiv= ['rgba(136, 19, 255, 0.2)', 'rgba(255, 0, 60, 0.2)']
const borderColorEstablecimientoHiv = ['rgba(136, 19, 255, 1)', 'rgba(255, 0, 60, 1)']
const titleEstablecimientoHiv = "Casos notificados según Establecimiento de carga. Morón, 2022."

//----------ALERTS-----------------------

  function detallarConfirmadosHiv (){
  
    Toast.fire({
      title: `Confirmados en gestantes: ${numeroConfirmadosTotalHivEmbarazo}, \n 
      Confirmados perinatal: ${numeroConfirmadosTotalHivPerinatal}, \n
      Confirmados restantes: ${numeroConfirmadosTotalHiv}` 
    
    })
  
  }
  
  function detallarProbablesHiv () {
    Toast.fire({
      title: `Probables en gestantes: ${numeroProbablesTotalHivEmbarazo}, \n 
      Probables perinatal: ${numeroProbablesTotalHivPerinatal}, \n
      Probables restantes: ${numeroProbablesTotalHiv}` 
    
    })
  }

  function detallarDescartadosHiv () {
    Toast.fire({
      title: `Descartados en gestantes: ${numeroDescartadosTotalHivEmbarazadas}, \n 
      Descartados perinatal: ${numeroDescartadosTotalHivPerinatal}, \n
      Descartados restantes: ${numeroDescartadosTotalHiv}` 
    
    })
  }

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
          <div className='recuadro naranja'>Total último mes: <p className='totalNumber'>{}</p></div>
          <div className='recuadro salmon'>Confirmados: <p className='totalNumber'>{}</p></div>
          <div className='recuadro rosa'>Probables: <p className='totalNumber'>{}</p></div>
          <div className='recuadro lila'>Descartados: <p className='totalNumber'>{}</p></div>
          <div className='recuadro salmon'>Gestantes: <p className='totalNumber'>{}</p></div>
          <div className='recuadro rosa'>Congénitos: <p className='totalNumber'>{}</p></div>
          <div className='recuadro lila'>Notificados por Morón: <p className='totalNumber'>{}</p></div>
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
        <div className='recuadro naranja'>Total 2022: <p className='totalNumber'>{numeroTotalGeneralNotificadosHiv}</p></div>
          <div className='recuadro salmon' onClick={detallarConfirmadosHiv}>Confirmados: <p className='totalNumber'>{numeroConfirmadosTotalGeneralHiv}</p></div>
          <div className='recuadro rosa' onClick={detallarProbablesHiv}>Probables: <p className='totalNumber'>{numeroProbablesTotalGeneralHiv}</p></div>
          <div className='recuadro lila' onClick={detallarDescartadosHiv}>Descartados: <p className='totalNumber'>{numeroDescartadosTotalGeneralHiv}</p></div>
          <div className='recuadro salmon'>Gestantes:<p className='totalNumber'>{numeroTotalNotificadosHivEmbarazo}</p></div>
          <div className='recuadro rosa'>Congénitos: <p className='totalNumber'>{numeroTotalNotificadosHivPerinatal}</p></div>
          <div className='recuadro lila'>Notificados por Morón: <p className='totalNumber'>{porcentajeNotificadosHivMoron}%</p></div>
        </div>
        <div className='graphs-container'>
        <div className='doughnutChart-sifilis'><DoughnutChart title={titleSexoHiv} datos={totalPorSexoHiv} labels={labelsSexoHiv} backgroundColor={backgroundColorHiv} borderColor={borderColorHiv} /></div>
        <div className='doughnutChart-sifilis'><DoughnutChart title={titleEmbarazoHiv} datos={embarazadasEnMujeresHiv} labels={labelsEmbarazoHiv} backgroundColor={backgroundColorEmbarazoHiv} borderColor={borderColorEmbarazoHiv}/></div>
        <div className='doughnutChart-sifilis'><DoughnutChart  title={titleEstablecimientoHiv} datos={notificadosHivEstablecimientoCarga} labels={labelsEstablecimientoHiv} backgroundColor={backgroundColorEstablecimientoHiv} borderColor={borderColorEstablecimientoHiv}/></div>

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