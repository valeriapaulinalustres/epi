import { useState, useContext } from 'react'
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';
import Colors from '../../components/Colors';
import BarChartSexAge from '../../components/BarChartSexAge';
import BarChartSe from '../../components/BarChartSe';
import { Link } from 'react-router-dom';

function Tbc() {

  const [ultimoMesTbc, setUltimoMesTbc] = useState(false)

  //destructuring from context

  const {
    anioActual,
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
    numeroTotalNotificadosTuberculosisFemeninoEntreFechas, 
    numeroTotalNotificadosTuberculosisMasculinoEntreFechas,
    numeroTotalNotificadosTuberculosisSdEntreFechas,
    numeroConfirmadosTotalTuberculosisEntreFechas, 
    numeroDescartadosTotalTuberculosisEntreFechas,
    numeroEnEstudioTotalTuberculosisEntreFechas,
    numeroEmbarazadasNotificadasTotalTuberculosisEntreFechas, 
    numeroEmbarazadasConfirmadasTuberculosisEntreFechas, 
    numeroEmbarazadasDescartadasTuberculosisEntreFechas,
    porcentajeNotificadosTuberculosisMoronEntreFechas,
    numeroTotalGeneralTuberculosisMoronEntreFechas,
    numeroTotalGeneralTuberculosisNoMoronEntreFechas
  } = useContext(DataContext);

  const [salmonTransparente, salmon, lilaTransparente, lila, rosaTransparente, rosa] = Colors

  //---Agrupados por sexo y edad

  const [
    tuberculosisFmenor1m,
    tuberculosisF2m12m,
    tuberculosisF13m24m,
    tuberculosisF2a4a,
    tuberculosisF5a9a,
    tuberculosisF10a14a,
    tuberculosisF15a19a,
    tuberculosisF20a24a,
    tuberculosisF25a34a,
    tuberculosisF35a44a,
    tuberculosisF45a65a,
    tuberculosisFmay65,
    tuberculosisMmenor1m,
    tuberculosisM2m12m,
    tuberculosisM13m24m,
    tuberculosisM2a4a,
    tuberculosisM5a9a,
    tuberculosisM10a14a,
    tuberculosisM15a19a,
    tuberculosisM20a24a,
    tuberculosisM25a34a,
    tuberculosisM35a44a,
    tuberculosisM45a65a,
    tuberculosisMmay65
  ] = tuberculosisSexoEdad


  //Gráfico notificados según sexo

  const totalPorSexoTbc = [numeroTotalNotificadosTuberculosisMasculino, numeroTotalNotificadosTuberculosisFemenino, numeroTotalNotificadosTuberculosisSd]
  const labelsSexoTbc = ['Maculino', 'Femenino', 'SD']
  const backgroundColorTbc = [salmonTransparente, lilaTransparente, rosaTransparente]
  const borderColorTbc = [salmon, lila, rosa]
  const titleSexoTbc = `Casos notificados según sexo. Morón, SE 1 a ${se}, ${anioActual}.`

  //Gráfico notificados Morón/Total

  const notificadosTbcEstablecimientoCarga = [numeroTotalGeneralTuberculosisMoron, numeroTotalGeneralTuberculosisNoMoron]
  const labelsEstablecimientoTbc = ['Establecimientos de Morón', 'Establecimientos no pertenecientes a Morón',]
  const backgroundColorEstablecimientoTbc = [lilaTransparente, rosaTransparente]
  const borderColorEstablecimientoTbc = [lila, rosa]
  const titleEstablecimientoTbc = `Casos notificados de Tuberculosis según Establecimiento de carga. Morón, SE 1 a ${se}, ${anioActual}.`

  //Tabla resultados

  const titleResultadoTuberculosis = `Casos notificados de Tuberculosis según resultado de laboratorio. Morón, SE 1 a ${se}, ${anioActual}.`
  const labelsRestultadoTuberculosis = ["Resultados de laboratorio"]
  const label1RestultadoTuberculosis = "Positivos"
  const label2RestultadoTuberculosis = "Negativos"
  const label3RestultadoTuberculosis = "En estudio"
  const dataPositivosTuberculosis = [numeroTotalPositivosTuberculosis]
  const dataNegativosTuberculosis = [numeroTotalNegativosTuberculosis]
  const dataSinResultadosTuberculosis = [numeroTotalSinResultadoTuberculosis]

  //Gráfico Edad x sexo

  const titleEdadSexoTuberculosis = `Casos notificados de Tuberculosis, según sexo y edad. Morón, SE 1 a ${se}, ${anioActual}.`
  const labelsEdadSexoTuberculosis = ['< 1 mes', '2 a 12 m', '1 a 2 años', '2 a 4 años', '5 a 9 años', '10 a 14 años', '15 a 19', '20 a 24 años', '25 a 34 años', '35 a 44 años', '44 a 65 años', '> 65 años']
  const label1Tuberculosis = "Mujeres";
  const label2Tuberculosis = "Varones";
  const femeninoTuberculosis = [tuberculosisFmenor1m, tuberculosisF2m12m, tuberculosisF13m24m, tuberculosisF2a4a, tuberculosisF5a9a, tuberculosisF10a14a, tuberculosisF15a19a, tuberculosisF20a24a, tuberculosisF25a34a, tuberculosisF35a44a, tuberculosisF45a65a, tuberculosisFmay65];
  const masculinoTuberculosis = [tuberculosisMmenor1m, tuberculosisM2m12m, tuberculosisM13m24m, tuberculosisM2a4a, tuberculosisM5a9a, tuberculosisM10a14a, tuberculosisM15a19a, tuberculosisM20a24a, tuberculosisM25a34a, tuberculosisM35a44a, tuberculosisM45a65a, tuberculosisMmay65];

  //Gráfico notificados x SE

  const titleSeTuberculosis = `Casos notificados de Tuberculosis, según Semana Epidemiológica. Morón, SE 1 a ${se}, ${anioActual}.`
  const labelsSeTuberculosis = semanas;
  const labelSeTuberculosis = "SE";
  const seTuberculosis = tuberculosisXse;

  //--------------entre fechas-----------------
  //Gráfico notificados según sexo

  const totalPorSexoTbcEntreFechas = [numeroTotalNotificadosTuberculosisMasculinoEntreFechas, numeroTotalNotificadosTuberculosisFemeninoEntreFechas, numeroTotalNotificadosTuberculosisSdEntreFechas]
  const titleSexoTbcEntreFechas = `Casos notificados según sexo. Morón, ${calendar.dateFrom} al ${calendar.dateTo}.`

//Gráfico notificados Morón/Total

const notificadosTbcEstablecimientoCargaEntreFechas = [numeroTotalGeneralTuberculosisMoronEntreFechas, numeroTotalGeneralTuberculosisNoMoronEntreFechas]
const titleEstablecimientoTbcEntreFechas = `Casos notificados de Tuberculosis según Establecimiento de carga. Morón, ${calendar.dateFrom} al ${calendar.dateTo}.`

 //Tabla resultados

 const titleResultadoTuberculosisEntreFechas = `Casos notificados de Tuberculosis según resultado de laboratorio. Morón, ${calendar.dateFrom} al ${calendar.dateTo}.`
 const dataPositivosTuberculosisEntreFechas = [numeroConfirmadosTotalTuberculosisEntreFechas]
 const dataNegativosTuberculosisEntreFechas = [numeroDescartadosTotalTuberculosisEntreFechas]
 const dataSinResultadosTuberculosisEntreFechas = [numeroEnEstudioTotalTuberculosisEntreFechas]

  //Alerts

function handleEmbarazadasTbc (){
  detallarEmbarazadasTuberculosis(numeroEmbarazadasConfirmadasTuberculosis, numeroEmbarazadasDescartadasTuberculosis)
}

function handleEmbarazadasTbcEntreFechas (){
  detallarEmbarazadasTuberculosis(numeroEmbarazadasConfirmadasTuberculosisEntreFechas, numeroEmbarazadasDescartadasTuberculosisEntreFechas)
}

  function detallarEmbarazadasTuberculosis(conf, desc) {
    Toast.fire({
      title: `Gestantes confirmadas: ${conf}, \n 
    Gestantes descartadas: ${desc}. \n
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
          Acumulado {anioActual}
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
          {
            calendar.dateFrom
              ? <h3>{calendar.dateFrom} al {calendar.dateTo}</h3>
              : <div>
                <p>No hay fechas ingresadas</p>
<Link to="/upload"><button className='button'>Ingresar fechas</button></Link>
              </div>
              
          }

          <div className='totales-page-container'>
            <div className='recuadro naranja'>
              Total entre fechas:
              <p className='totalNumber'>
                {numeroTotalNotificadosTuberculosisEntreFechas}
              </p>
            </div>
            <div className='recuadro salmon'>
              Confirmados:
              <p className='totalNumber'>
                { numeroConfirmadosTotalTuberculosisEntreFechas}
              </p>
            </div>
            <div className='recuadro rosa'>
              Descartados:
              <p className='totalNumber'>
                {numeroDescartadosTotalTuberculosisEntreFechas }
              </p>
            </div>
            <div className='recuadro lila'>
              En estudio:
              <p className='totalNumber'>
                {numeroEnEstudioTotalTuberculosisEntreFechas }
              </p>
            </div>
            <div className='recuadro salmon' onClick={handleEmbarazadasTbcEntreFechas}>
              Gestantes:
              <p className='totalNumber'>
                {numeroEmbarazadasNotificadasTotalTuberculosisEntreFechas }
              </p>
            </div>
            <div className='recuadro rosa'>
              Notificados por Morón:
              <p className='totalNumber'>
                {porcentajeNotificadosTuberculosisMoronEntreFechas }%
              </p>
            </div>
          </div>
          <div className='graphs-container'>

          <div className='doughnutChart-sifilis'>
              <DoughnutChart
                title={titleSexoTbcEntreFechas}
                datos={totalPorSexoTbcEntreFechas}
                labels={labelsSexoTbc}
                backgroundColor={backgroundColorTbc}
                borderColor={borderColorTbc}
              />
            </div>

            <div className='doughnutChart-sifilis'>
              <DoughnutChart
                title={titleEstablecimientoTbcEntreFechas}
                datos={notificadosTbcEstablecimientoCargaEntreFechas}
                labels={labelsEstablecimientoTbc}
                backgroundColor={backgroundColorEstablecimientoTbc}
                borderColor={borderColorEstablecimientoTbc}
              />
            </div>

            <div className='barChart-sifilis'>
              <BarChart
                title={titleResultadoTuberculosisEntreFechas}
                barLabels={labelsRestultadoTuberculosis}
                label1={label1RestultadoTuberculosis}
                label2={label2RestultadoTuberculosis}
                label3={label3RestultadoTuberculosis}
                data1={dataPositivosTuberculosisEntreFechas}
                data2={dataNegativosTuberculosisEntreFechas}
                data3={dataSinResultadosTuberculosisEntreFechas}
                borderColor1={lila}
                borderColor2={salmon}
                borderColor3={rosa}
                bgColor1={lilaTransparente}
                bgColor2={salmonTransparente}
                bgColor3={rosaTransparente}
              />
            </div>

           
          </div>
        </div>


        :
        <div className='totalesGraphs-container'>

          <div className='totales-page-container'>
            <div className='recuadro naranja'>
              Total {anioActual}:
              <p className='totalNumber'>
                {numeroTotalNotificadosTuberculosis}
              </p>
            </div>
            <div className='recuadro salmon'>
              Confirmados:
              <p className='totalNumber'>
                {numeroConfirmadosTotalTuberculosis}
              </p>
            </div>
            <div className='recuadro rosa'>
              Descartados:
              <p className='totalNumber'>
                {numeroDescartadosTotalTuberculosis}
              </p>
            </div>
            <div className='recuadro lila'>
              En estudio:
              <p className='totalNumber'>
                {numeroEnEstudioTotalTuberculosis}
              </p>
            </div>
            <div className='recuadro salmon' onClick={handleEmbarazadasTbc}>
              Gestantes:
              <p className='totalNumber'>
                {numeroEmbarazadasNotificadasTotalTuberculosis}
              </p>
            </div>
            <div className='recuadro rosa'>
              Notificados por Morón:
              <p className='totalNumber'>
                {porcentajeNotificadosTuberculosisMoron}%
              </p>
            </div>
          </div>


          <div className='graphs-container'>
            <div className='doughnutChart-sifilis'>
              <DoughnutChart
                title={titleSexoTbc}
                datos={totalPorSexoTbc}
                labels={labelsSexoTbc}
                backgroundColor={backgroundColorTbc}
                borderColor={borderColorTbc}
              />
            </div>
            <div className='doughnutChart-sifilis'>
              <DoughnutChart
                title={titleEstablecimientoTbc}
                datos={notificadosTbcEstablecimientoCarga}
                labels={labelsEstablecimientoTbc}
                backgroundColor={backgroundColorEstablecimientoTbc}
                borderColor={borderColorEstablecimientoTbc}
              />
            </div>

            <div className='barChart-sifilis'>
              <BarChart
                title={titleResultadoTuberculosis}
                barLabels={labelsRestultadoTuberculosis}
                label1={label1RestultadoTuberculosis}
                label2={label2RestultadoTuberculosis}
                label3={label3RestultadoTuberculosis}
                data1={dataPositivosTuberculosis}
                data2={dataNegativosTuberculosis}
                data3={dataSinResultadosTuberculosis}
                borderColor1={lila}
                borderColor2={salmon}
                borderColor3={rosa}
                bgColor1={lilaTransparente}
                bgColor2={salmonTransparente}
                bgColor3={rosaTransparente}
              />
            </div>

            <div className='barChart-sifilis'>
              <BarChartSexAge
                title={titleEdadSexoTuberculosis}
                barLabels={labelsEdadSexoTuberculosis}
                label1={label1Tuberculosis}
                label2={label2Tuberculosis}
                data1={femeninoTuberculosis}
                data2={masculinoTuberculosis}
                borderColor1={lila}
                borderColor2={salmon}
                bgColor1={lilaTransparente}
                bgColor2={salmonTransparente}
              />
            </div>

            <div className='barChart-sifilis'>
              <BarChartSe eje={'x'}
                title={titleSeTuberculosis}
                barLabels={labelsSeTuberculosis}
                label1={labelSeTuberculosis}
                data1={seTuberculosis}
                borderColor1={salmon}
                bgColor1={salmonTransparente}
              />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Tbc
