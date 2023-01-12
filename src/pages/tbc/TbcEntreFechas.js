import { useContext } from 'react'
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';
import Colors from '../../components/Colors';
import { Link } from 'react-router-dom';

function TbcEntreFechas() {

  //destructuring from context

  const {
    semanaFinal,
    semanaInicial,
    numeroTotalNotificadosTuberculosisEntreFechas,
    numeroTotalNotificadosTuberculosisFemeninoEntreFechas,
    numeroTotalNotificadosTuberculosisMasculinoEntreFechas,
    numeroTotalNotificadosTuberculosisSdEntreFechas,
    numeroConfirmadosTotalTuberculosisEntreFechas,
    numeroDescartadosTotalTuberculosisEntreFechas,
    numeroEnEstudioTotalTuberculosisEntreFechas,
    numeroEmbarazadasConfirmadasTuberculosisEntreFechas,
    numeroEmbarazadasDescartadasTuberculosisEntreFechas,
    porcentajeNotificadosTuberculosisMoronEntreFechas,
    numeroTotalGeneralTuberculosisMoronEntreFechas,
    numeroTotalGeneralTuberculosisNoMoronEntreFechas,
  } = useContext(DataContext);

  const [salmonTransparente, salmon, lilaTransparente, lila, rosaTransparente, rosa] = Colors

  //Gráfico notificados según sexo
  const labelsSexoTbc = ['Maculino', 'Femenino', 'SD']
  const backgroundColorTbc = [salmonTransparente, lilaTransparente, rosaTransparente]
  const borderColorTbc = [salmon, lila, rosa]
  const totalPorSexoTbcEntreFechas = [numeroTotalNotificadosTuberculosisMasculinoEntreFechas, numeroTotalNotificadosTuberculosisFemeninoEntreFechas, numeroTotalNotificadosTuberculosisSdEntreFechas]
  const titleSexoTbcEntreFechas = `Casos notificados según sexo. Morón, SE ${semanaInicial} a ${semanaFinal}.`

  //Gráfico notificados Morón/Total
  const labelsEstablecimientoTbc = ['Establecimientos de Morón', 'Establecimientos no pertenecientes a Morón',]
  const backgroundColorEstablecimientoTbc = [lilaTransparente, rosaTransparente]
  const borderColorEstablecimientoTbc = [lila, rosa]
  const notificadosTbcEstablecimientoCargaEntreFechas = [numeroTotalGeneralTuberculosisMoronEntreFechas, numeroTotalGeneralTuberculosisNoMoronEntreFechas]
  const titleEstablecimientoTbcEntreFechas = `Casos notificados de Tuberculosis según Establecimiento de carga. Morón, SE ${semanaInicial} a ${semanaFinal}.`

  //Tabla resultados
  const labelsRestultadoTuberculosis = ["Resultados de laboratorio"]
  const label1RestultadoTuberculosis = "Positivos"
  const label2RestultadoTuberculosis = "Negativos"
  const label3RestultadoTuberculosis = "En estudio"
  const titleResultadoTuberculosisEntreFechas = `Casos notificados de Tuberculosis según resultado de laboratorio. Morón, SE ${semanaInicial} a ${semanaFinal}.`
  const dataPositivosTuberculosisEntreFechas = [numeroConfirmadosTotalTuberculosisEntreFechas]
  const dataNegativosTuberculosisEntreFechas = [numeroDescartadosTotalTuberculosisEntreFechas]
  const dataSinResultadosTuberculosisEntreFechas = [numeroEnEstudioTotalTuberculosisEntreFechas]

  //Alerts

  function handleEmbarazadasTbcEntreFechas() {
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
    <div className='totalesGraphs-container'>
      {
        semanaInicial
          ? <h3>Semanas Epidemiológicas {semanaInicial} a {semanaFinal}</h3>
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
            {numeroConfirmadosTotalTuberculosisEntreFechas}
          </p>
        </div>
        <div className='recuadro rosa'>
          Descartados:
          <p className='totalNumber'>
            {numeroDescartadosTotalTuberculosisEntreFechas}
          </p>
        </div>
        <div className='recuadro lila'>
          En estudio:
          <p className='totalNumber'>
            {numeroEnEstudioTotalTuberculosisEntreFechas}
          </p>
        </div>
        <div className='recuadro salmon' onClick={handleEmbarazadasTbcEntreFechas}>
          Gestantes:
          <p className='totalNumber'>
            {numeroEmbarazadasDescartadasTuberculosisEntreFechas}
          </p>
        </div>
        <div className='recuadro rosa'>
          Notificados por Morón:
          <p className='totalNumber'>
            {porcentajeNotificadosTuberculosisMoronEntreFechas}%
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
  )
}

export default TbcEntreFechas
