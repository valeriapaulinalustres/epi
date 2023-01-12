import { useContext } from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';
import Colors from '../../components/Colors';
import { Link } from 'react-router-dom';

function HivEntreFechas() {

  //destructuring from context
  const {
    semanaInicial,
    semanaFinal,
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


  //Gráfico notificados según sexo entre fechas
  const labelsSexoHiv = ['Maculino', 'Femenino', 'SD']
  const backgroundColorHiv = [salmonTransparente, lilaTransparente, rosaTransparente]
  const borderColorHiv = [salmon, lila, rosa]
  const totalPorSexoHivEntreFechas = [numeroTotalGeneralNotificadosHivMasculinoEntreFechas, numeroTotalGeneralNotificadosHivFemeninoEntreFechas, numeroTotalGeneralNotificadosHivSdEntreFechas]
  const titleSexoHivEntreFechas = `Casos notificados según sexo. Morón, SE ${semanaInicial} a ${semanaFinal}.`

  //Gráfico embarazadas sobre total de notificadas mujeres entre fechas
  const labelsEmbarazoHiv = ['Gestantes', 'No gestantes',]
  const backgroundColorEmbarazoHiv = [rosaTransparente, salmonTransparente]
  const borderColorEmbarazoHiv = [rosa, salmon]
  const embarazadasEnMujeresHivEntreFechas = [numeroTotalNotificadosHivEmbarazoEntreFechas, parseInt(numeroTotalGeneralNotificadosHivFemeninoEntreFechas - numeroTotalNotificadosHivEmbarazoEntreFechas)]
  const titleEmbarazoHivEntreFechas = `Casos notificados en gestantes, sobre personas con posibilidad de gestar. Morón, SE ${semanaInicial} a ${semanaFinal}.`

  //Gráfico notificados Morón/Total entre fechas 
  const labelsEstablecimientoHiv = ['Establecimientos de Morón', 'Establecimientos no pertenecientes a Morón',]
  const backgroundColorEstablecimientoHiv = [lilaTransparente, rosaTransparente]
  const borderColorEstablecimientoHiv = [lila, rosa]
  const notificadosHivEstablecimientoCargaEntreFechas = [numeroTotalGeneralHivMoronEntreFechas, numeroTotalGeneralHivNoMoronEntreFechas]
  const titleEstablecimientoHivEntreFechas = `Casos notificados según Establecimiento de carga. Morón, SE ${semanaInicial} a ${semanaFinal}.`


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
            {numeroTotalGeneralNotificadosHivEntreFechas}
          </p>
        </div>
        <div className='recuadro salmon'>
          Confirmados:
          <p className='totalNumber'>
            {numeroConfirmadosTotalGeneralHivEntreFechas}
          </p>
        </div>
        <div className='recuadro rosa'>
          Probables:
          <p className='totalNumber'>
            {numeroProbablesTotalGeneralHivEntreFechas}
          </p>
        </div>
        <div className='recuadro lila'>
          Descartados:
          <p className='totalNumber'>
            {numeroDescartadosTotalGeneralHivEntreFechas}
          </p>
        </div>
        <div className='recuadro salmon'>
          Gestantes:
          <p className='totalNumber'>
            {numeroTotalNotificadosHivEmbarazoEntreFechas}
          </p>
        </div>
        <div className='recuadro rosa'>
          Congénitos:
          <p className='totalNumber'>
            {numeroTotalNotificadosHivPerinatalEntreFechas}
          </p>
        </div>
        <div className='recuadro lila'>
          Notificados por Morón:
          <p className='totalNumber'>
            {porcentajeNotificadosHivMoronEntreFechas}%
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
  )
}

export default HivEntreFechas
