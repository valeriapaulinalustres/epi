import { useState, useContext } from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';
import Colors from '../../components/Colors';
import BarChartSexAge from '../../components/BarChartSexAge';
import BarChartSe from '../../components/BarChartSe';
import { Link } from 'react-router-dom';

function Hiv() {

  const [ultimoMesHiv, setUltimoMesHiv] = useState(false)

  //destructuring from context
  const {
    anioActual,
    se,
    semanas,
    calendar,
    numeroTotalGeneralNotificadosHiv,
    numeroTotalGeneralNotificadosHivFemenino,
    numeroTotalGeneralNotificadosHivMasculino,
    numeroTotalGeneralNotificadosHivSd,
    numeroTotalNotificadosHivPerinatal,
    numeroTotalNotificadosHivEmbarazo,
    numeroConfirmadosTotalGeneralHiv,
    numeroConfirmadosTotalHiv,
    numeroConfirmadosTotalHivEmbarazo,
    numeroConfirmadosTotalHivPerinatal,
    numeroProbablesTotalGeneralHiv,
    numeroProbablesTotalHivEmbarazo,
    numeroProbablesTotalHivPerinatal,
    numeroProbablesTotalHiv,
    numeroDescartadosTotalGeneralHiv,
    numeroDescartadosTotalHiv,
    numeroDescartadosTotalHivPerinatal,
    numeroDescartadosTotalHivEmbarazadas,
    porcentajeNotificadosHivMoron,
    numeroTotalGeneralHivNoMoron,
    numeroTotalGeneralHivMoron,
    hivSexoEdad,
    hivXse,
    numeroTotalGeneralNotificadosHivEntreFechas,
    numeroTotalNotificadosHivEmbarazoEntreFechas,
    numeroTotalGeneralNotificadosHivFemeninoEntreFechas,
    numeroTotalGeneralNotificadosHivMasculinoEntreFechas,
    numeroTotalGeneralNotificadosHivSdEntreFechas,
    numeroConfirmadosTotalGeneralHivEntreFechas,
    numeroProbablesTotalGeneralHivEntreFechas,
    numeroDescartadosTotalGeneralHivEntreFechas,
    numeroTotalNotificadosHivPerinatalEntreFechas,
    porcentajeNotificadosHivMoronEntreFechas,
    numeroTotalGeneralHivMoronEntreFechas,
    numeroTotalGeneralHivNoMoronEntreFechas

  } = useContext(DataContext);

  const [salmonTransparente, salmon, lilaTransparente, lila, rosaTransparente, rosa] = Colors

  const [
    hivFmenor1m,
    hivF2m12m,
    hivF13m24m,
    hivF2a4a,
    hivF5a9a,
    hivF10a14a,
    hivF15a19a,
    hivF20a24a,
    hivF25a34a,
    hivF35a44a,
    hivF45a65a,
    hivFmay65,
    hivMmenor1m,
    hivM2m12m,
    hivM13m24m,
    hivM2a4a,
    hivM5a9a,
    hivM10a14a,
    hivM15a19a,
    hivM20a24a,
    hivM25a34a,
    hivM35a44a,
    hivM45a65a,
    hivMmay65
  ] = hivSexoEdad

  //Gráfico notificados según sexo

  const totalPorSexoHiv = [numeroTotalGeneralNotificadosHivMasculino, numeroTotalGeneralNotificadosHivFemenino, numeroTotalGeneralNotificadosHivSd]
  const labelsSexoHiv = ['Maculino', 'Femenino', 'SD']
  const backgroundColorHiv = [salmonTransparente, lilaTransparente, rosaTransparente]
  const borderColorHiv = [salmon, lila, rosa]
  const titleSexoHiv = `Casos notificados según sexo. Morón, SE 1 a ${se}, ${anioActual}.`

  //Gráfico embarazadas sobre total de notificadas mujeres

  const embarazadasEnMujeresHiv = [numeroTotalNotificadosHivEmbarazo, parseInt(numeroTotalGeneralNotificadosHivFemenino - numeroTotalNotificadosHivEmbarazo)]
  const labelsEmbarazoHiv = ['Gestantes', 'No gestantes',]
  const backgroundColorEmbarazoHiv = [rosaTransparente, salmonTransparente]
  const borderColorEmbarazoHiv = [rosa, salmon]
  const titleEmbarazoHiv = `Casos notificados en gestantes, sobre personas con posibilidad de gestar. Morón, SE 1 a ${se}, ${anioActual}.`

  //Gráfico notificados Morón/Total

  const notificadosHivEstablecimientoCarga = [numeroTotalGeneralHivMoron, numeroTotalGeneralHivNoMoron]
  const labelsEstablecimientoHiv = ['Establecimientos de Morón', 'Establecimientos no pertenecientes a Morón',]
  const backgroundColorEstablecimientoHiv = [lilaTransparente, rosaTransparente]
  const borderColorEstablecimientoHiv = [lila, rosa]
  const titleEstablecimientoHiv = `Casos notificados según Establecimiento de carga. Morón, SE 1 a ${se}, ${anioActual}.`

  //Gráfico Edad x sexo

  const titleEdadSexoHiv = `Casos notificados de HIV, según sexo y edad. Morón, SE 1 a ${se}, ${anioActual}.`
  const labelsEdadSexoHiv = ['< 1 mes', '2 a 12 m', '1 a 2 años', '2 a 4 años', '5 a 9 años', '10 a 14 años', '15 a 19', '20 a 24 años', '25 a 34 años', '35 a 44 años', '44 a 65 años', '> 65 años']
  const label1Hiv = "Mujeres";
  const label2Hiv = "Varones";
  const femeninoHiv = [hivFmenor1m, hivF2m12m, hivF13m24m, hivF2a4a, hivF5a9a, hivF10a14a, hivF15a19a, hivF20a24a, hivF25a34a, hivF35a44a, hivF45a65a, hivFmay65,];
  const masculinoHiv = [hivMmenor1m, hivM2m12m, hivM13m24m, hivM2a4a, hivM5a9a, hivM10a14a, hivM15a19a, hivM20a24a, hivM25a34a, hivM35a44a, hivM45a65a, hivMmay65];

  //Gráfico notificados x SE

  const titleSeHiv = `Casos notificados de HIV, según Semana Epidemiológica. Morón, SE 1 a ${se}, ${anioActual}.`
  const labelsSeHiv = semanas;
  const labelSeHiv = "SE";
  const seHiv = hivXse;


  //Gráficos entre fechas
  //Gráfico notificados según sexo entre fechas

  const totalPorSexoHivEntreFechas = [numeroTotalGeneralNotificadosHivMasculinoEntreFechas, numeroTotalGeneralNotificadosHivFemeninoEntreFechas, numeroTotalGeneralNotificadosHivSdEntreFechas]
  const titleSexoHivEntreFechas = `Casos notificados según sexo. Morón, ${calendar.dateFrom} al ${calendar.dateTo}.`

  //Gráfico embarazadas sobre total de notificadas mujeres entre fechas

  const embarazadasEnMujeresHivEntreFechas = [numeroTotalNotificadosHivEmbarazoEntreFechas, parseInt(numeroTotalGeneralNotificadosHivFemeninoEntreFechas - numeroTotalNotificadosHivEmbarazoEntreFechas)]
  const titleEmbarazoHivEntreFechas = `Casos notificados en gestantes, sobre personas con posibilidad de gestar. Morón, ${calendar.dateFrom} al ${calendar.dateTo}.`

   //Gráfico notificados Morón/Total entre fechas 

   const notificadosHivEstablecimientoCargaEntreFechas = [numeroTotalGeneralHivMoronEntreFechas, numeroTotalGeneralHivNoMoronEntreFechas]
   const titleEstablecimientoHivEntreFechas = `Casos notificados según Establecimiento de carga. Morón, ${calendar.dateFrom} al ${calendar.dateTo}.`

  //----------ALERTS-----------------------

  function detallarConfirmadosHiv() {
    Toast.fire({
      title: `Confirmados en gestantes: ${numeroConfirmadosTotalHivEmbarazo}, \n 
      Confirmados perinatal: ${numeroConfirmadosTotalHivPerinatal}, \n
      Confirmados restantes: ${numeroConfirmadosTotalHiv}`
    })
  }

  function detallarProbablesHiv() {
    Toast.fire({
      title: `Probables en gestantes: ${numeroProbablesTotalHivEmbarazo}, \n 
      Probables perinatal: ${numeroProbablesTotalHivPerinatal}, \n
      Probables restantes: ${numeroProbablesTotalHiv}`
    })
  }

  function detallarDescartadosHiv() {
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
        <button
          className={ultimoMesHiv ? "button" : "buttonActive"}
          onClick={() => setUltimoMesHiv(false)}
        >
          Acumulado {anioActual}
        </button>
        <button
          className={ultimoMesHiv ? "buttonActive" : "button"}
          onClick={() => setUltimoMesHiv(true)}
        >
          Ver entre fechas
        </button>
      </div>

      {ultimoMesHiv

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
              Notificados:
              <p className='totalNumber'>
                { numeroTotalGeneralNotificadosHivEntreFechas}
              </p>
            </div>
            <div className='recuadro salmon'>
              Confirmados:
              <p className='totalNumber'>
                { numeroConfirmadosTotalGeneralHivEntreFechas}
              </p>
            </div>
            <div className='recuadro rosa'>
              Probables:
              <p className='totalNumber'>
                { numeroProbablesTotalGeneralHivEntreFechas}
              </p>
            </div>
            <div className='recuadro lila'>
              Descartados:
              <p className='totalNumber'>
                { numeroDescartadosTotalGeneralHivEntreFechas}
                </p>
                </div>
            <div className='recuadro salmon'>
              Gestantes:
              <p className='totalNumber'>
                {numeroTotalNotificadosHivEmbarazoEntreFechas }
              </p>
            </div>
            <div className='recuadro rosa'>
              Congénitos:
              <p className='totalNumber'>
                { numeroTotalNotificadosHivPerinatalEntreFechas}
              </p>
            </div>
            <div className='recuadro lila'>
              Notificados por Morón:
              <p className='totalNumber'>
                { porcentajeNotificadosHivMoronEntreFechas}%
              </p>
            </div>
          </div>
          <div className='graphs-container'>


          <div className='doughnutChart-sifilis'>
              <DoughnutChart
                title={titleSexoHivEntreFechas}
                datos={totalPorSexoHivEntreFechas}
                labels={labelsSexoHiv}
                backgroundColor={backgroundColorHiv}
                borderColor={borderColorHiv}
              />
            </div>

            <div className='doughnutChart-sifilis'>
              <DoughnutChart
                title={titleEmbarazoHivEntreFechas}
                datos={embarazadasEnMujeresHivEntreFechas}
                labels={labelsEmbarazoHiv}
                backgroundColor={backgroundColorEmbarazoHiv}
                borderColor={borderColorEmbarazoHiv}
              />
            </div>

            <div className='doughnutChart-sifilis'>
              <DoughnutChart
                title={titleEstablecimientoHivEntreFechas}
                datos={notificadosHivEstablecimientoCargaEntreFechas}
                labels={labelsEstablecimientoHiv}
                backgroundColor={backgroundColorEstablecimientoHiv}
                borderColor={borderColorEstablecimientoHiv}
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
                {numeroTotalGeneralNotificadosHiv}
              </p>
            </div>
            <div className='recuadro salmon' onClick={detallarConfirmadosHiv}>
              Confirmados:
              <p className='totalNumber'>
                {numeroConfirmadosTotalGeneralHiv}
              </p>
            </div>
            <div className='recuadro rosa' onClick={detallarProbablesHiv}>
              Probables:
              <p className='totalNumber'>
                {numeroProbablesTotalGeneralHiv}
              </p>
            </div>
            <div className='recuadro lila' onClick={detallarDescartadosHiv}>
              Descartados:
              <p className='totalNumber'>
                {numeroDescartadosTotalGeneralHiv}
              </p>
            </div>
            <div className='recuadro salmon'>
              Gestantes:<p className='totalNumber'>
                {numeroTotalNotificadosHivEmbarazo}
              </p>
            </div>
            <div className='recuadro rosa'>
              Congénitos:
              <p className='totalNumber'>
                {numeroTotalNotificadosHivPerinatal}
              </p>
            </div>
            <div className='recuadro lila'>
              Notificados por Morón:
              <p className='totalNumber'>
                {porcentajeNotificadosHivMoron}%
              </p>
            </div>
          </div>


          <div className='graphs-container'>
            <div className='doughnutChart-sifilis'>
              <DoughnutChart
                title={titleSexoHiv}
                datos={totalPorSexoHiv}
                labels={labelsSexoHiv}
                backgroundColor={backgroundColorHiv}
                borderColor={borderColorHiv}
              />
            </div>

            <div className='doughnutChart-sifilis'>
              <DoughnutChart
                title={titleEmbarazoHiv}
                datos={embarazadasEnMujeresHiv}
                labels={labelsEmbarazoHiv}
                backgroundColor={backgroundColorEmbarazoHiv}
                borderColor={borderColorEmbarazoHiv}
              />
            </div>

            <div className='doughnutChart-sifilis'>
              <DoughnutChart
                title={titleEstablecimientoHiv}
                datos={notificadosHivEstablecimientoCarga}
                labels={labelsEstablecimientoHiv}
                backgroundColor={backgroundColorEstablecimientoHiv}
                borderColor={borderColorEstablecimientoHiv}
              />
            </div>

            <div className='barChart-sifilis'>
              <BarChartSexAge
                title={titleEdadSexoHiv}
                barLabels={labelsEdadSexoHiv}
                label1={label1Hiv}
                label2={label2Hiv}
                data1={femeninoHiv}
                data2={masculinoHiv}
                borderColor1={lila}
                borderColor2={salmon}
                bgColor1={lilaTransparente}
                bgColor2={salmonTransparente}
              />
            </div>

            <div className='barChart-sifilis'>
              <BarChartSe
                eje={'x'}
                title={titleSeHiv}
                barLabels={labelsSeHiv}
                label1={labelSeHiv}
                data1={seHiv}
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

export default Hiv
