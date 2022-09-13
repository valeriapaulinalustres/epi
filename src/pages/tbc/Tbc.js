import { useState, useContext } from 'react'
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';
import Colors from '../../components/Colors';
import BarChartSexAge from '../../components/BarChartSexAge';
import BarChartSe from '../../components/BarChartSe';
import { FaCalendar } from 'react-icons/fa';

function Tbc() {

  const [ultimoMesTbc, setUltimoMesTbc] = useState(false)

  //destructuring from context
  const {
    anio,
    se,
    calendar,
    semanas,
    numeroTotalNotificadosTuberculosis,
    numeroTotalNotificadosTuberculosisFemenino,
    numeroTotalNotificadosTuberculosisMasculino,
    numeroTotalNotificadosTuberculosisSd,
    numeroConfirmadosTotalTuberculosis,
    numeroDescartadosTotalTuberculosis,
    numeroEmbarazadasNotificadasTotalTuberculosis,
    numeroEmbarazadasConfirmadasTuberculosis,
    numeroEmbarazadasDescartadasTuberculosis,
    numeroEnEstudioTotalTuberculosis,
    numeroTotalGeneralTuberculosisMoron,
    numeroTotalGeneralTuberculosisNoMoron,
    porcentajeNotificadosTuberculosisMoron,
    numeroTotalPositivosTuberculosis,
    numeroTotalNegativosTuberculosis,
    numeroTotalSinResultadoTuberculosis,
    tuberculosisSexoEdad,
    tuberculosisXse,
    numeroTotalNotificadosTuberculosisEntreFechas,
  } = useContext(DataContext);

  const [salmonTransparente, salmon, lilaTransparente, lila, rosaTransparente, rosa] = Colors

  const [tuberculosisFmenor1m, tuberculosisF2m12m, tuberculosisF13m24m, tuberculosisF2a4a, tuberculosisF5a9a, tuberculosisF10a14a, tuberculosisF15a19a, tuberculosisF20a24a, tuberculosisF25a34a, tuberculosisF35a44a, tuberculosisF45a65a, tuberculosisFmay65, tuberculosisMmenor1m, tuberculosisM2m12m, tuberculosisM13m24m, tuberculosisM2a4a, tuberculosisM5a9a, tuberculosisM10a14a, tuberculosisM15a19a, tuberculosisM20a24a, tuberculosisM25a34a, tuberculosisM35a44a, tuberculosisM45a65a, tuberculosisMmay65] = tuberculosisSexoEdad



  //Gráfico notificados según sexo

  const totalPorSexoTbc = [numeroTotalNotificadosTuberculosisMasculino, numeroTotalNotificadosTuberculosisFemenino, numeroTotalNotificadosTuberculosisSd]
  const labelsSexoTbc = ['Maculino', 'Femenino', 'SD']
  const backgroundColorTbc = [salmonTransparente, lilaTransparente, rosaTransparente]
  const borderColorTbc = [salmon, lila, rosa]
  const titleSexoTbc = `Casos notificados según sexo. Morón, SE 1 a ${se}, 2022.`

  //Gráfico notificados Morón/Total

  const notificadosTbcEstablecimientoCarga = [numeroTotalGeneralTuberculosisMoron, numeroTotalGeneralTuberculosisNoMoron]
  const labelsEstablecimientoTbc = ['Establecimientos de Morón', 'Establecimientos no pertenecientes a Morón',]
  const backgroundColorEstablecimientoTbc = [lilaTransparente, rosaTransparente]
  const borderColorEstablecimientoTbc = [lila, rosa]
  const titleEstablecimientoTbc = `Casos notificados de Tuberculosis según Establecimiento de carga. Morón, SE 1 a ${se}, 2022.`

  //Tabla resultados

  const titleResultadoTuberculosis = `Casos notificados de Tuberculosis según resultado de laboratorio. Morón, SE 1 a ${se}, 2022.`
  const labelsRestultadoTuberculosis = ["Resultados de laboratorio"]
  const label1RestultadoTuberculosis = "Positivos"
  const label2RestultadoTuberculosis = "Negativos"
  const label3RestultadoTuberculosis = "En estudio"
  const dataPositivosTuberculosis = [numeroTotalPositivosTuberculosis]
  const dataNegativosTuberculosis = [numeroTotalNegativosTuberculosis]
  const dataSinResultadosTuberculosis = [numeroTotalSinResultadoTuberculosis]

  //Gráfico Edad x sexo
  const titleEdadSexoTuberculosis = `Casos notificados de Tuberculosis, según sexo y edad. Morón, SE 1 a ${se}, 2022.`
  const labelsEdadSexoTuberculosis = ['< 1 mes', '2 a 12 m', '1 a 2 años', '2 a 4 años', '5 a 9 años', '10 a 14 años', '15 a 19', '20 a 24 años', '25 a 34 años', '35 a 44 años', '44 a 65 años', '> 65 años']
  const label1Tuberculosis = "Mujeres";
  const label2Tuberculosis = "Varones";
  const femeninoTuberculosis = [tuberculosisFmenor1m, tuberculosisF2m12m, tuberculosisF13m24m, tuberculosisF2a4a, tuberculosisF5a9a, tuberculosisF10a14a, tuberculosisF15a19a, tuberculosisF20a24a, tuberculosisF25a34a, tuberculosisF35a44a, tuberculosisF45a65a, tuberculosisFmay65];
  const masculinoTuberculosis = [tuberculosisMmenor1m, tuberculosisM2m12m, tuberculosisM13m24m, tuberculosisM2a4a, tuberculosisM5a9a, tuberculosisM10a14a, tuberculosisM15a19a, tuberculosisM20a24a, tuberculosisM25a34a, tuberculosisM35a44a, tuberculosisM45a65a, tuberculosisMmay65];

  //Gráfico notificados x SE
  const titleSeTuberculosis = `Casos notificados de Tuberculosis, según Semana Epidemiológica. Morón, SE 1 a ${se}, 2022.`
  const labelsSeTuberculosis = semanas;
  const labelSeTuberculosis = "SE";
  const seTuberculosis = tuberculosisXse;




  //Alerts

  function detallarEmbarazadasTuberculosis() {

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
        <button 
        className={ultimoMesTbc ? "button" : "buttonActive"} 
        onClick={() => setUltimoMesTbc(false)}
        >
          Acumulado 2022
          </button>
        <button 
        className={ultimoMesTbc ? "buttonActive" : "button"} 
        onClick={() => setUltimoMesTbc(true)}
        >
          Ver entre fechas
          </button>
      </div>
     

      {ultimoMesTbc

        ?
        <div className='totalesGraphs-container'>
          <h3>{calendar.dateFrom} al {calendar.dateTo}</h3>
          <div className='totales-page-container'>
            <div className='recuadro naranja'>Total entre fechas: <p className='totalNumber'>{ numeroTotalNotificadosTuberculosisEntreFechas}</p></div>
            <div className='recuadro salmon'>Confirmados: <p className='totalNumber'>{ }</p></div>
            <div className='recuadro rosa'>Descartados: <p className='totalNumber'>{ }</p></div>
            <div className='recuadro lila'>Sospechosos: <p className='totalNumber'>{ }</p></div>
            <div className='recuadro salmon'>Gestantes: <p className='totalNumber'>{ }</p></div>
            <div className='recuadro rosa'>Notificados por Morón: <p className='totalNumber'>{ }%</p></div>
          </div>
          <div className='graphs-container'>
           

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
            <div className='doughnutChart-sifilis'><DoughnutChart title={titleSexoTbc} datos={totalPorSexoTbc} labels={labelsSexoTbc} backgroundColor={backgroundColorTbc} borderColor={borderColorTbc} /></div>
            <div className='doughnutChart-sifilis'><DoughnutChart title={titleEstablecimientoTbc} datos={notificadosTbcEstablecimientoCarga} labels={labelsEstablecimientoTbc} backgroundColor={backgroundColorEstablecimientoTbc} borderColor={borderColorEstablecimientoTbc} /></div>

            <div className='barChart-sifilis'><BarChart title={titleResultadoTuberculosis} barLabels={labelsRestultadoTuberculosis} label1={label1RestultadoTuberculosis} label2={label2RestultadoTuberculosis} label3={label3RestultadoTuberculosis} data1={dataPositivosTuberculosis} data2={dataNegativosTuberculosis} data3={dataSinResultadosTuberculosis} borderColor1={lila} borderColor2={salmon} borderColor3={rosa} bgColor1={lilaTransparente} bgColor2={salmonTransparente} bgColor3={rosaTransparente} /></div>

            <div className='barChart-sifilis'><BarChartSexAge title={titleEdadSexoTuberculosis} barLabels={labelsEdadSexoTuberculosis} label1={label1Tuberculosis} label2={label2Tuberculosis} data1={femeninoTuberculosis} data2={masculinoTuberculosis} borderColor1={lila} borderColor2={salmon} bgColor1={lilaTransparente} bgColor2={salmonTransparente} /></div>

            <div className='barChart-sifilis'><BarChartSe eje={'x'} title={titleSeTuberculosis} barLabels={labelsSeTuberculosis} label1={labelSeTuberculosis} data1={seTuberculosis} borderColor1={salmon} bgColor1={salmonTransparente} /></div>
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
