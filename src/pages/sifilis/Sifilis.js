import {useState, useContext} from 'react'
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import './sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';



function Sifilis() {

const [ultimoMesSifilis, setUltimoMesSifilis] = useState(false)

const { anio, numeroTotalGeneralNotificadosSifilis, numeroTotalGeneralNotificadosSifilisFemenino, numeroTotalGeneralNotificadosSifilisMasculino, numeroTotalGeneralNotificadosSifilisSd, numeroTotalNotificadosSifilisCongenita, numeroTotalNotificadosSifilisEmbarazadas, numeroConfirmadosTotalGeneralSifilis, numeroConfirmadosTotalSiflisCongenita, numeroConfirmadosTotalSifilisEmbarazadas, numeroConfirmadosTotalSifilis, numeroProbablesTotalGeneralSifilis,  numeroProbablesTotalSifilis, numeroProbablesTotalSifilisCongenita, numeroProbablesTotalSifilisEmbarazadas, numeroDescartadosTotalGeneralSifilis, numeroDescartadosTotalSifilis, numeroDescartadosTotalSifilisCongenita, numeroDescartadosTotalSifilisEmbarazadas } = useContext(DataContext);


  //Gráfico notificados según sexo

  const totalPorSexoSifilis = [numeroTotalGeneralNotificadosSifilisMasculino, numeroTotalGeneralNotificadosSifilisFemenino, numeroTotalGeneralNotificadosSifilisSd]

  const labelsSexoSifilis =['maculino', 'femenino', 'SD']

  const backgroundColorSifilis = ['rgba(255, 151, 0, 0.2)', 'rgba(136, 19, 255, 0.2)', 'rgba(255, 0, 60, 0.2)']

  const borderColorSifilis = ['rgba(255, 151, 0, 1)', 'rgba(136, 19, 255, 1)', 'rgba(255, 0, 60, 1)']

  const titleSexoSifilis = "Casos notificados según sexo. Morón, 2022."

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
        <div className='graphs-container'>
        <div className='doughnutChart-sifilis'><DoughnutChart title={titleSexoSifilis} datos={totalPorSexoSifilis} labels={labelsSexoSifilis} backgroundColor={backgroundColorSifilis} borderColor={borderColorSifilis}/></div>
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