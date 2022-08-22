import {useState, useContext} from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';

function Dengue() {

const [ultimoMesDengue, setUltimoMesDengue] = useState(false)

const { anio, numeroTotalNotificadosDengue,  numeroTotalNotificadosDengueFemenino, numeroTotalNotificadosDengueMasculino, numeroTotalNotificadosDengueSd, numeroConfirmadosTotalDengue, numeroProbablesTotalDengue, numeroDescartadosTotalDengue, numeroEmbarazadasNotificadoTotalDengue, numeroEmbarazadasConfirmadasDengue, numeroEmbarazadasDescartadasDengue, numeroSospechososTotalDengue } = useContext(DataContext);


  const totalPorSexoTbc = [numeroTotalNotificadosDengueFemenino, numeroTotalNotificadosDengueMasculino, numeroTotalNotificadosDengueSd]
 
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