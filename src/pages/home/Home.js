import { useState, useContext } from 'react';
import BarChart from '../../components/BarChart';
import DataContext from '../../context/DataContext';
import './home.css';
import BarChartSe from '../../components/BarChartSe';
import Colors from '../../components/Colors';



function Home() {

  const [ultimoMesHome, setUltimoMesHome] = useState(false)

  const {
    anio,
    numeroTotalGeneralNotificadosSifilis,
    numeroTotalGeneralNotificadosHiv,
    numeroTotalNotificadosTuberculosis,
    numeroTotalNotificadosDengue,
    notificadosEno,
  } = useContext(DataContext);

  const [salmonTransparente, salmon, lilaTransparente, lila, rosaTransparente, rosa] = Colors

  let anioEnCurso = 2022;
  let mesPrevio = "18 a 22";
  let ultimaSE = 30;

  //Gráfico notificados de todas las ENOs
  const titleEnos = "Casos notificados de Enfermedades de Notificación Obligatoria . Morón, 2022"
  const labelsEnos = ["Accidente potencialmente rábico (APR)", "Alacranismo", "Brucelosis", "Caso sospechoso de intoxicación por consumo de cocaína contaminada", "Celiaquía", "Chagas agudo congénito", "Chagas crónico", "Chagas en embarazadas", "Coqueluche", "Dengue", "Diarrea aguda", "Encefalitis de San Luis", "Enfermedad Febril Exantemática-EFE (Sarampión/Rubéola)", "Enfermedad Pie-Mano-Boca", "Estudio de SARS-COV-2 en situaciones especiales", "Fiebre del Nilo Occidental", "Gonorrea", "Hantavirosis", "Hepatitis B", "Hepatitis C", "Hepatitis E", "Hidatidosis", "HTLV", "Infección respiratoria aguda viral sin especificar", "Intoxicación con otros tóxicos", "Intoxicación/Exposición a Mercurio", "Intoxicación/Exposición por Monóxido de Carbono", "IRAG", "Leptospirosis", "Meningoencefalitis", "Otras infecciones invasivas (bacterianas y otras)", "Poliomielitis-Parálisis flácida aguda en menores de 15 años", "SARS-COV-2 en puntos de entrada y casos relacionados con importación", "Sífilis", "Sífilis congénita", "Sífilis en Embarazadas", "Sindrome inflamatorio multisistémico (SIM)", "Streptococcus agalactiae grupo B en embarazadas", "SUH - Sindrome Urémico Hemolítico", "Toxoplasmosis congénita", "Toxoplasmosis en embarazadas", "Tuberculosis", "Vigilancia genómica de SARS-CoV-2", "VIH", "VIH - Expuesto perinatal", "VIH en embarazo", "Viruela símica",]
  const labelEnos = "Casos notificados";
  const enos = notificadosEno;


  return (
    <div className='home-container'>
      <h2>Vigilancia de Enfermedades de Notificación Obligatoria</h2>
      <h3>{anio}</h3>
      <div className='btnElegir-page'>
        <button className={ultimoMesHome ? "button" : "buttonActive"} onClick={() => setUltimoMesHome(false)}>Acumulado 2022</button>
        <button className={ultimoMesHome ? "buttonActive" : "button"} onClick={() => setUltimoMesHome(true)}>Ver último mes</button>
      </div>


      {ultimoMesHome

        ?
        <div className='totalesGraphs-container'>
          <h3>SE x a {ultimaSE}</h3>
          <h3>Total de casos notificados:</h3>
          <div className='totales-page-container'>
            <div className='recuadro lila'>Sífilis: <p className='totalNumber'>120</p></div>
            <div className='recuadro salmon'>Tuberculosis: { }</div>
            <div className='recuadro rosa'>Dengue: { }</div>
            <div className='recuadro lila'>HIV: { }</div>
            <div className='recuadro rosa'>ETI: { }</div>
            <div className='recuadro salmon'>x: { }</div>
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
            <div className='recuadro lila'>Sífilis: <p className='totalNumber'>{numeroTotalGeneralNotificadosSifilis}</p></div>
            <div className='recuadro salmon'>Tuberculosis: <p className='totalNumber'>{numeroTotalNotificadosTuberculosis}</p></div>
            <div className='recuadro rosa'>Dengue: <p className='totalNumber'>{numeroTotalNotificadosDengue}</p></div>
            <div className='recuadro lila'>HIV: <p className='totalNumber'>{numeroTotalGeneralNotificadosHiv}</p></div>
            <div className='recuadro rosa'>ETI: <p className='totalNumber'>{ }</p></div>
            <div className='recuadro salmon'>x: <p className='totalNumber'>{ }</p></div>
          </div>
          <div className='graphs-container'>
            <div className='barChartENO-sifilis'><BarChartSe eje={'y'} title={titleEnos} barLabels={labelsEnos} label1={labelEnos} data1={enos} borderColor1={salmon} bgColor1={salmonTransparente} /></div>
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
