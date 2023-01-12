import { useContext } from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';
import Colors from '../../components/Colors';
import BarChartSexAge from '../../components/BarChartSexAge';
import BarChartSe from '../../components/BarChartSe';

function HivTotal() {

  //destructuring from context
  const {
    anioActual,
    se,
    semanas,
    numeroTotalGeneralNotificadosHiv,
    numeroTotalGeneralNotificadosHivFemenino,
    numeroTotalGeneralNotificadosHivMasculino,
    numeroTotalGeneralNotificadosHivSd,
    numeroTotalNotificadosHivPerinatal,
    numeroTotalNotificadosHivEmbarazo,
    numeroConfirmadosTotalGeneralHiv,
    numeroProbablesTotalGeneralHiv,
    numeroDescartadosTotalGeneralHiv,
    porcentajeNotificadosHivMoron,
    numeroTotalGeneralHivNoMoron,
    numeroTotalGeneralHivMoron,
    hivSexoEdad,
    hivXse,
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


  return (
    <div className='totalesGraphs-container'>
      <div className='totales-page-container'>
        <div className='recuadro naranja'>
          Total {anioActual}:
          <p className='totalNumber'>
            {numeroTotalGeneralNotificadosHiv}
          </p>
        </div>
        <div className='recuadro salmon'>
          Confirmados:
          <p className='totalNumber'>
            {numeroConfirmadosTotalGeneralHiv}
          </p>
        </div>
        <div className='recuadro rosa' >
          Probables:
          <p className='totalNumber'>
            {numeroProbablesTotalGeneralHiv}
          </p>
        </div>
        <div className='recuadro lila'>
          Descartados:
          <p className='totalNumber'>
            {numeroDescartadosTotalGeneralHiv}
          </p>
        </div>
        <div className='recuadro rosa'>
          Expuesto perinatal:
          <p className='totalNumber'>
            {numeroTotalNotificadosHivPerinatal}
          </p>
        </div>
        <div className='recuadro salmon'>
          Gestantes del total:<p className='totalNumber'>
            {numeroTotalNotificadosHivEmbarazo}
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
  )
}

export default HivTotal
