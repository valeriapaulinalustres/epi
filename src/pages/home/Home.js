import {useState, useContext} from 'react';
import BarChart from '../../components/BarChart';
import DataContext from '../../context/DataContext';
import './home.css';



function Home() {

  const [ultimoMesHome, setUltimoMesHome] = useState(false)

  const { anio, numeroTotalGeneralNotificadosSifilis, numeroTotalGeneralNotificadosHiv, numeroTotalNotificadosTuberculosis, numeroTotalNotificadosDengue } = useContext(DataContext);

let anioEnCurso = 2022;
let mesPrevio = "18 a 22";
let ultimaSE = 30;


  return (
    <div className='home-container'>
      <h2>Vigilancia de Enfermedades de Notificación Obligatoria</h2>
      <h3>{anio}</h3>
      <div className='btnElegir-page'>
      <button className={ultimoMesHome ? "button" : "buttonActive"} onClick={()=>setUltimoMesHome(false)}>Acumulado 2022</button>
      <button className={ultimoMesHome ? "buttonActive" : "button"} onClick={()=>setUltimoMesHome(true)}>Ver último mes</button>
      </div>
      
   
      {ultimoMesHome 
     
     ?
      <div className='totalesGraphs-container'>
        <h3>SE x a {ultimaSE}</h3>
      <h3>Total de casos notificados:</h3>
        <div className='totales-page-container'>
          <div className='recuadro naranja'>Sífilis: <p className='totalNumber'>120</p></div>
          <div className='recuadro salmon'>Tuberculosis: {}</div>
          <div className='recuadro rosa'>Dengue: {}</div>
          <div className='recuadro lila'>HIV: {}</div>
          <div className='recuadro rosa'>ETI: {}</div>
          <div className='recuadro salmon'>x: {}</div>
        </div>
        <div className='graphs-container'>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>

        </div>
      </div>

      :
      <div className='totalesGraphs-container'>
        <h3>SE 1 a {ultimaSE}</h3>
      <h3>Total de casos notificados:</h3>
        <div className='totales-page-container'>
        <div className='recuadro naranja'>Sífilis: <p className='totalNumber'>{numeroTotalGeneralNotificadosSifilis}</p></div>
          <div className='recuadro salmon'>Tuberculosis: <p className='totalNumber'>{numeroTotalNotificadosTuberculosis}</p></div>
          <div className='recuadro rosa'>Dengue: <p className='totalNumber'>{numeroTotalNotificadosDengue}</p></div>
          <div className='recuadro lila'>HIV: <p className='totalNumber'>{numeroTotalGeneralNotificadosHiv}</p></div>
          <div className='recuadro rosa'>ETI: <p className='totalNumber'>{}</p></div>
          <div className='recuadro salmon'>x: <p className='totalNumber'>{}</p></div>
        </div>
        <div className='graphs-container'>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
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

export default Home
