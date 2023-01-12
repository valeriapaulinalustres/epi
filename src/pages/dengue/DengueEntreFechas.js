import { useContext } from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import BarChartFiveData from '../../components/BarChartFiveData';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';
import Colors from '../../components/Colors';
import { Link } from 'react-router-dom';

function DengueEntreFechas() {

  //destructuring from context
  const {
    semanaInicial,
    semanaFinal,
    numeroEmbarazadasConfirmadasDengue,
    numeroEmbarazadasDescartadasDengue,
    numeroTotalNotificadosDengueEntreFechas,
    numeroTotalNotificadosDengueFemeninoEntreFechas,
    numeroTotalNotificadosDengueMasculinoEntreFechas,
    numeroTotalNotificadosDengueSdEntreFechas,
    numeroConfirmadosTotalDengueEntreFechas,
    numeroProbablesTotalDengueEntreFechas,
    numeroDescartadosTotalDengueEntreFechas,
    numeroSospechososTotalDengueEntreFechas,
    porcentajeNotificadosDengueMoronEntreFechas,
    numeroTotalGeneralDengueMoronEntreFechas,
    numeroTotalGeneralDengueNoMoronEntreFechas,
    numeroEmbarazadasNotificadoTotalDengueEntreFechas,
  } = useContext(DataContext);

  const [salmonTransparente, salmon, lilaTransparente, lila, rosaTransparente, rosa, amarillo, amarilloTransparente, verde, verdeTransparente] = Colors


  //Gráfico notificados según sexo entre fechas
  const labelsSexoDengue = ['Maculino', 'Femenino', 'SD']
  const backgroundColorDengue = [salmonTransparente, lilaTransparente, rosaTransparente]
  const borderColorDengue = [salmon, lila, rosa]
  const totalPorSexoDengueEntreFechas = [numeroTotalNotificadosDengueMasculinoEntreFechas, numeroTotalNotificadosDengueFemeninoEntreFechas, numeroTotalNotificadosDengueSdEntreFechas]
  const titleSexoDengueEntreFechas = `Casos notificados de Dengue según sexo. Morón, SE ${semanaInicial} a ${semanaFinal}.`

  //Gráfico clasificación entre fechas
  const labelsClasificacionDengue = ["Clasificación"]
  const label1ClasificacionDengue = "Confirmados"
  const label2ClasificacionDengue = "Probables"
  const label3ClasificacionDengue = "Sospechosos no conclusivos"
  const label4ClasificacionDengue = "Sospechosos"
  const label5ClasificacionDengue = "Descartados"
  const titleClasificacionDengueEntreFechas = `Clasificación de los casos de Dengue. Morón, SE ${semanaInicial} a ${semanaFinal}.`
  const dataConfirmadosClasificacionDengueEntreFechas = [numeroConfirmadosTotalDengueEntreFechas]
  const dataProbablesClasificacionDengueEntreFechas = [numeroProbablesTotalDengueEntreFechas]
  const dataSospechososNoConcClasificacionDengueEntreFechas = [numeroConfirmadosTotalDengueEntreFechas]
  const dataSospechososClasificacionDengueEntreFechas = [numeroSospechososTotalDengueEntreFechas]
  const dataDescartadosClasificacionDengueEntreFechas = [numeroDescartadosTotalDengueEntreFechas]

  //Gráfico notificados Morón/Total entre fechas
  const labelsEstablecimientoDengue = ['Establecimientos de Morón', 'Establecimientos no pertenecientes a Morón',]
  const backgroundColorEstablecimientoDengue = [lilaTransparente, rosaTransparente]
  const borderColorEstablecimientoDengue = [lila, rosa]
  const notificadosDengueEstablecimientoCargaEntreFechas = [numeroTotalGeneralDengueMoronEntreFechas, numeroTotalGeneralDengueNoMoronEntreFechas]
  const titleEstablecimientoDengueEntreFechas = `Casos notificados de Dengue según Establecimiento de carga. Morón, SE ${semanaInicial} a ${semanaFinal}..`

  //Alerts

  function detallarEmbarazadasDengue() {

    Toast.fire({
      title: `Gestantes confirmadas: ${numeroEmbarazadasConfirmadasDengue}, \n 
    Gestantes descartadas: ${numeroEmbarazadasDescartadasDengue}. \n
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
          Total notificados:
          <p className='totalNumber'>
            {numeroTotalNotificadosDengueEntreFechas}
          </p>
        </div>
        <div className='recuadro salmon'>
          Confirmados:
          <p className='totalNumber'>
            {numeroConfirmadosTotalDengueEntreFechas}
          </p>
        </div>
        <div className='recuadro rosa'>
          Probables:
          <p className='totalNumber'>
            {numeroProbablesTotalDengueEntreFechas}
          </p>
        </div>
        <div className='recuadro lila'>
          Descartados:
          <p className='totalNumber'>
            {numeroDescartadosTotalDengueEntreFechas}
          </p>
        </div>
        <div className='recuadro rosa'>
          Sospechosos:
          <p className='totalNumber'>
            {numeroSospechososTotalDengueEntreFechas}
          </p>
        </div>
        <div className='recuadro salmon'>
          Gestantes:
          <p className='totalNumber'>
            {numeroEmbarazadasNotificadoTotalDengueEntreFechas}
          </p>
        </div>
        <div className='recuadro lila'>
          Notificados por Morón:
          <p className='totalNumber'>
            {porcentajeNotificadosDengueMoronEntreFechas}%
          </p>
        </div>
      </div>

      <div className='graphs-container'>

        <div className='doughnutChart-sifilis'>
          <DoughnutChart
            title={titleSexoDengueEntreFechas}
            datos={totalPorSexoDengueEntreFechas}
            labels={labelsSexoDengue}
            backgroundColor={backgroundColorDengue}
            borderColor={borderColorDengue}
          />
        </div>

        <div className='doughnutChart-sifilis'>
          <DoughnutChart
            title={titleEstablecimientoDengueEntreFechas}
            datos={notificadosDengueEstablecimientoCargaEntreFechas}
            labels={labelsEstablecimientoDengue}
            backgroundColor={backgroundColorEstablecimientoDengue}
            borderColor={borderColorEstablecimientoDengue}
          />
        </div>

        <div className='barChart-sifilis'>
          <BarChartFiveData
            title={titleClasificacionDengueEntreFechas}
            barLabels={labelsClasificacionDengue}
            label1={label1ClasificacionDengue}
            label2={label2ClasificacionDengue}
            label3={label3ClasificacionDengue}
            label4={label4ClasificacionDengue}
            label5={label5ClasificacionDengue}
            data1={dataConfirmadosClasificacionDengueEntreFechas}
            data2={dataProbablesClasificacionDengueEntreFechas}
            data3={dataSospechososNoConcClasificacionDengueEntreFechas}
            data4={dataSospechososClasificacionDengueEntreFechas}
            data5={dataDescartadosClasificacionDengueEntreFechas}
            borderColor1={lila}
            borderColor2={salmon}
            borderColor3={rosa}
            borderColor4={amarillo}
            borderColor5={verde}
            bgColor1={lilaTransparente}
            bgColor2={salmonTransparente}
            bgColor3={rosaTransparente}
            bgColor4={amarilloTransparente}
            bgColor5={verdeTransparente}
          />
        </div>

      </div>
    </div>
  )
}

export default DengueEntreFechas
