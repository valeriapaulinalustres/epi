import {useState, useContext} from 'react'
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import './sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';
import Colors from '../../components/Colors'


function Sifilis() {

const [ultimoMesSifilis, setUltimoMesSifilis] = useState(false)

const { anio, numeroTotalGeneralNotificadosSifilis, numeroTotalGeneralNotificadosSifilisFemenino, numeroTotalGeneralNotificadosSifilisMasculino, numeroTotalGeneralNotificadosSifilisSd, numeroTotalNotificadosSifilisCongenita, numeroTotalNotificadosSifilisEmbarazadas, numeroConfirmadosTotalGeneralSifilis, numeroConfirmadosTotalSiflisCongenita, numeroConfirmadosTotalSifilisEmbarazadas, numeroConfirmadosTotalSifilis, numeroProbablesTotalGeneralSifilis,  numeroProbablesTotalSifilis, numeroProbablesTotalSifilisCongenita, numeroProbablesTotalSifilisEmbarazadas, numeroDescartadosTotalGeneralSifilis, numeroDescartadosTotalSifilis, numeroDescartadosTotalSifilisCongenita, numeroDescartadosTotalSifilisEmbarazadas, numeroTotalGeneralSifilisNoMoron, numeroTotalGeneralSifilisMoron, porcentajeNotificadosSifilisMoron, numeroConfirmadosMasculinosSifilis, numeroConfirmadosFemeninosSifilis, numeroConfirmadosSDSifilis } = useContext(DataContext);

const [salmonTransparente, salmon, lilaTransparente, lila, rosaTransparente, rosa] = Colors


  //Gráfico notificados según sexo

  const totalPorSexoSifilis = [numeroTotalGeneralNotificadosSifilisMasculino, numeroTotalGeneralNotificadosSifilisFemenino, numeroTotalGeneralNotificadosSifilisSd]
  const labelsSexoSifilis =['Maculino', 'Femenino', 'SD']
  const backgroundColorSifilis = [salmonTransparente, lilaTransparente, rosaTransparente]
  const borderColorSifilis = [salmon, lila, rosa]
  const titleSexoSifilis = "Casos notificados según sexo. Morón, 2022."

  //Gráfico embarazadas sobre total de notificadas mujeres

  const embarazadasEnMujeresSifilis = [numeroTotalNotificadosSifilisEmbarazadas, parseInt(numeroTotalGeneralNotificadosSifilisFemenino-numeroTotalNotificadosSifilisEmbarazadas)]
  const labelsEmbarazoSifilis =['Gestantes', 'No gestantes',]
  const backgroundColorEmbarazoSifilis= [lilaTransparente, rosaTransparente]
  const borderColorEmbarazoSifilis = [lila, rosa]
  const titleEmbarazoSifilis = "Casos notificados en gestantes, sobre personas con posibilidad de gestar. Morón, 2022."

  //Gráfico notificados Morón/Total

  const notificadosSifilisEstablecimientoCarga = [numeroTotalGeneralSifilisMoron, numeroTotalGeneralSifilisNoMoron]
  const labelsEstablecimientoSifilis =['Establecimientos de Morón', 'Establecimientos no pertenecientes a Morón',]
  const backgroundColorEstablecimientoSifilis= [salmonTransparente, rosaTransparente]
  const borderColorEstablecimientoSifilis = [salmon, rosa]
  const titleEstablecimientoSifilis = "Casos notificados según Establecimiento de carga. Morón, 2022."
  

  //Gráfico tabla probables y confirmados

  const titleConfProbSifilis = "Casos confirmados y probables. Morón, 2022"
  const labelsConfProbSifilis = ['Confirmados','Probables']
  const label1Sifilis = "Mujeres";
const label2Sifilis = "Varones";
const label3Sifilis = "SD";
const femeninoConfProbSifilis = [numeroConfirmadosFemeninosSifilis, ];
const masculinoConfProbSifilis = [numeroConfirmadosMasculinosSifilis, ];
const sdConfProbSifilis = [numeroConfirmadosSDSifilis, ]


//--------ALERTS----------------

function detallarConfirmadosSifilis (){
  
  Toast.fire({
    title: `Confirmados en gestantes: ${numeroConfirmadosTotalSifilisEmbarazadas}, \n 
    Confirmados congénitos: ${numeroConfirmadosTotalSiflisCongenita}, \n
    Confirmados restantes: ${numeroConfirmadosTotalSifilis}` 
  
  })

}

function detallarProbablesSifilis (){
  Toast.fire({
    title: `Probables en gestantes: ${numeroProbablesTotalSifilisEmbarazadas}, \n 
    Probables en congénitos: ${numeroProbablesTotalSifilisCongenita}, \n
    Probables en restantes: ${numeroProbablesTotalSifilis}` 
  
  })
}

function detallarDescartadosSifilis () {
  Toast.fire({
    title: `Descartados en gestantes: ${numeroDescartadosTotalSifilisEmbarazadas}, \n 
    Descartados en congénitos: ${numeroDescartadosTotalSifilisCongenita}, \n
    Descartados en restantes: ${numeroDescartadosTotalSifilis}` 
  
  })
}


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
          <div className='recuadro naranja'>Total último mes: <p className='totalNumber'>{}</p></div>
          <div className='recuadro salmon' >Confirmados: <p className='totalNumber'>{}</p></div>
          <div className='recuadro rosa'>Probables: <p className='totalNumber'>{}</p></div>
          <div className='recuadro lila'>Descartados: <p className='totalNumber'>{}</p></div>
          <div className='recuadro salmon'>Gestantes: <p className='totalNumber'>{}</p></div>
          <div className='recuadro rosa'>Congénitos: <p className='totalNumber'>{}</p></div>
          <div className='recuadro lila'>Notificados por Morón: <p className='totalNumber'>{}</p></div>
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
        <div className='recuadro naranja'>Total 2022: <p className='totalNumber'>{numeroTotalGeneralNotificadosSifilis}</p></div>
          <div className='recuadro salmon' onClick={detallarConfirmadosSifilis}>Confirmados: <p className='totalNumber'>{numeroConfirmadosTotalGeneralSifilis}</p></div>
          <div className='recuadro rosa' onClick={detallarProbablesSifilis}>Probables: <p className='totalNumber'>{numeroProbablesTotalGeneralSifilis}</p></div>
          <div className='recuadro lila' onClick={detallarDescartadosSifilis}>Descartados: <p className='totalNumber'>{numeroDescartadosTotalGeneralSifilis}</p></div>
          <div className='recuadro salmon'>Gestantes: <p className='totalNumber'>{numeroTotalNotificadosSifilisEmbarazadas}</p></div>
          <div className='recuadro rosa'>Congénitos: <p className='totalNumber'>{numeroTotalNotificadosSifilisCongenita}</p></div>
        </div>
        <div className='recuadro lila'>Notificados por Morón: <p className='totalNumber'>{porcentajeNotificadosSifilisMoron}%</p></div>
        <div className='graphs-container'>
        <div className='doughnutChart-sifilis'><DoughnutChart title={titleSexoSifilis} datos={totalPorSexoSifilis} labels={labelsSexoSifilis} backgroundColor={backgroundColorSifilis} borderColor={borderColorSifilis}/></div>
        <div className='doughnutChart-sifilis'><DoughnutChart title={titleEmbarazoSifilis} datos={embarazadasEnMujeresSifilis} labels={labelsEmbarazoSifilis} backgroundColor={backgroundColorEmbarazoSifilis} borderColor={borderColorEmbarazoSifilis} /></div>
        <div className='doughnutChart-sifilis'><DoughnutChart  title={titleEstablecimientoSifilis} datos={notificadosSifilisEstablecimientoCarga} labels={labelsEstablecimientoSifilis} backgroundColor={backgroundColorEstablecimientoSifilis} borderColor={borderColorEstablecimientoSifilis}/></div>
        <div className='barChart-sifilis'><BarChart title={titleConfProbSifilis}barLabels={labelsConfProbSifilis} label1={label1Sifilis} label2={label2Sifilis} label3={label3Sifilis} data1={femeninoConfProbSifilis} data2={masculinoConfProbSifilis} data3={sdConfProbSifilis} borderColor1={lila} borderColor2={salmon} borderColor3={rosa} bgColor1={lilaTransparente} bgColor2={salmonTransparente} bgColor3={rosaTransparente}/></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
</div>
      </div>
}


    </div>
  )
}

export default Sifilis