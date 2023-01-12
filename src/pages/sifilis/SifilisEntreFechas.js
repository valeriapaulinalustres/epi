import { useContext } from 'react'
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import './sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';
import Colors from '../../components/Colors';
import { Link } from 'react-router-dom'


function SifilisEntreFechas() {

  //destructuring from context
  const {
    semanaInicial,
    semanaFinal,
    numeroTotalGeneralNotificadosSifilisEntreFechas,
    numeroTotalGeneralNotificadosSifilisFemeninoEntreFechas,
    numeroTotalGeneralNotificadosSifilisMasculinoEntreFechas,
    numeroTotalGeneralNotificadosSifilisSdEntreFechas,
    numeroDescartadosTotalGeneralSifilisEntreFechas,
    numeroProbablesTotalGeneralSifilisEntreFechas,
    numeroConfirmadosTotalGeneralSifilisEntreFechas,
    numeroTotalGeneralSifilisMoronEntreFechas,
    numeroTotalGeneralSifilisNoMoronEntreFechas,
    porcentajeNotificadosSifilisMoronEntreFechas,
    numeroTotalNotificadosSifilisEmbarazadasEntreFechas,
    numeroTotalNotificadosSifilisCongenitaEntreFechas,
    numeroConfirmadosFemeninosSifilisEntreFechas,
    numeroConfirmadosMasculinosSifilisEntreFechas,
    numeroConfirmadosSDSifilisEntreFechas,
    numeroProbablesFemeninosSifilisEntreFechas,
    numeroProbablesMasculinosSifilisEntreFechas,
    numeroProbablesSDSifilisEntreFechas

  } = useContext(DataContext);

  const [salmonTransparente, salmon, lilaTransparente, lila, rosaTransparente, rosa] = Colors


  //Gráficos 
  //Gráfico notificados según sexo entre fechas
  const labelsSexoSifilis = ['Maculino', 'Femenino', 'SD']
  const backgroundColorSifilis = [salmonTransparente, lilaTransparente, rosaTransparente]
  const borderColorSifilis = [salmon, lila, rosa]
  const totalPorSexoSifilisEntreFechas = [numeroTotalGeneralNotificadosSifilisMasculinoEntreFechas, numeroTotalGeneralNotificadosSifilisFemeninoEntreFechas, numeroTotalGeneralNotificadosSifilisSdEntreFechas]
  const titleSexoSifilisEntreFechas = `Casos notificados de Sífilis según sexo. Morón, SE ${semanaInicial} a ${semanaFinal}.`

  //Gráfico embarazadas sobre total de notificadas mujeres entre fechas
  const labelsEmbarazoSifilis = ['Gestantes', 'No gestantes',]
  const backgroundColorEmbarazoSifilis = [lilaTransparente, rosaTransparente]
  const borderColorEmbarazoSifilis = [lila, rosa]
  const embarazadasEnMujeresSifilisEntreFechas = [numeroTotalNotificadosSifilisEmbarazadasEntreFechas, parseInt(numeroTotalGeneralNotificadosSifilisFemeninoEntreFechas - numeroTotalNotificadosSifilisEmbarazadasEntreFechas)]
  const titleEmbarazoSifilisEntreFechas = `Casos notificados de Síflis en gestantes, sobre personas con posibilidad de gestar. Morón, SE ${semanaInicial} a ${semanaFinal}.`


  //Gráfico notificados Morón/Total entre fechas
  const labelsEstablecimientoSifilis = ['Establecimientos de Morón', 'Establecimientos no pertenecientes a Morón',]
  const backgroundColorEstablecimientoSifilis = [salmonTransparente, rosaTransparente]
  const borderColorEstablecimientoSifilis = [salmon, rosa]
  const notificadosSifilisEstablecimientoCargaEntreFechas = [numeroTotalGeneralSifilisMoronEntreFechas, numeroTotalGeneralSifilisNoMoronEntreFechas]
  const titleEstablecimientoSifilisEntreFechas = `Casos notificados de Sífilis según Establecimiento de carga. Morón, SE ${semanaInicial} a ${semanaFinal}.`

  //Gráfico tabla probables y confirmados entre fechas
  const labelsConfProbSifilis = ['Confirmados', 'Probables']
  const label1Sifilis = "Mujeres";
  const label2Sifilis = "Varones";
  const label3Sifilis = "SD";
  const titleConfProbSifilisEntreFechas = `Casos confirmados y probables de Sífilis. Morón, SE ${semanaInicial} a ${semanaFinal}.`
  const femeninoConfProbSifilisEntreFechas = [numeroConfirmadosFemeninosSifilisEntreFechas, numeroProbablesFemeninosSifilisEntreFechas];
  const masculinoConfProbSifilisEntreFechas = [numeroConfirmadosMasculinosSifilisEntreFechas, numeroProbablesMasculinosSifilisEntreFechas];
  const sdConfProbSifilisEntreFechas = [numeroConfirmadosSDSifilisEntreFechas, numeroProbablesSDSifilisEntreFechas]

  //--------ALERTS----------------

  /*
    function detallarDescartadosSifilis() {
      Toast.fire({
        title: `Descartados en gestantes: ${numeroDescartadosTotalSifilisEmbarazadas}, \n 
      Descartados en congénitos: ${numeroDescartadosTotalSifilisCongenita}, \n
      Descartados en restantes: ${numeroDescartadosTotalSifilis}`
      })
    }
  
  */
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
          Notificados:
          <p className='totalNumber'>
            {numeroTotalGeneralNotificadosSifilisEntreFechas}
          </p>
        </div>
        <div className='recuadro salmon' >
          Confirmados:
          <p className='totalNumber'>
            {numeroConfirmadosTotalGeneralSifilisEntreFechas}
          </p>
        </div>
        <div className='recuadro rosa'>
          Probables:
          <p className='totalNumber'>
            {numeroProbablesTotalGeneralSifilisEntreFechas}
          </p>
        </div>
        <div className='recuadro lila'>
          Descartados:
          <p className='totalNumber'>
            {numeroDescartadosTotalGeneralSifilisEntreFechas}
          </p>
        </div>
        <div className='recuadro salmon'>
          Gestantes:
          <p className='totalNumber'>
            {numeroTotalNotificadosSifilisEmbarazadasEntreFechas}
          </p>
        </div>
        <div className='recuadro rosa'>
          Congénitos:
          <p className='totalNumber'>
            {numeroTotalNotificadosSifilisCongenitaEntreFechas}
          </p>
        </div>
        <div className='recuadro lila'>
          Notificados por Morón:
          <p className='totalNumber'>
            {porcentajeNotificadosSifilisMoronEntreFechas}%
          </p>
        </div>
      </div>
      <div className='graphs-container'>

        <div className='doughnutChart-sifilis'>
          <DoughnutChart
            title={titleSexoSifilisEntreFechas}
            datos={totalPorSexoSifilisEntreFechas}
            labels={labelsSexoSifilis}
            backgroundColor={backgroundColorSifilis}
            borderColor={borderColorSifilis}
          />
        </div>

        <div className='doughnutChart-sifilis'>
          <DoughnutChart
            title={titleEmbarazoSifilisEntreFechas}
            datos={embarazadasEnMujeresSifilisEntreFechas}
            labels={labelsEmbarazoSifilis}
            backgroundColor={backgroundColorEmbarazoSifilis}
            borderColor={borderColorEmbarazoSifilis}
          />
        </div>

        <div className='doughnutChart-sifilis'>
          <DoughnutChart
            title={titleEstablecimientoSifilisEntreFechas}
            datos={notificadosSifilisEstablecimientoCargaEntreFechas}
            labels={labelsEstablecimientoSifilis}
            backgroundColor={backgroundColorEstablecimientoSifilis}
            borderColor={borderColorEstablecimientoSifilis}
          />
        </div>

        <div className='barChart-sifilis'>
          <BarChart
            title={titleConfProbSifilisEntreFechas}
            barLabels={labelsConfProbSifilis}
            label1={label1Sifilis}
            label2={label2Sifilis}
            label3={label3Sifilis}
            data1={femeninoConfProbSifilisEntreFechas}
            data2={masculinoConfProbSifilisEntreFechas}
            data3={sdConfProbSifilisEntreFechas}
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

export default SifilisEntreFechas