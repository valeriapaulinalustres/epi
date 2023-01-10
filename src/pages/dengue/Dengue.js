import { useState, useContext } from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import BarChartFiveData from '../../components/BarChartFiveData';
import BarChartSexAge from '../../components/BarChartSexAge';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';
import Colors from '../../components/Colors';
import BarChartSe from '../../components/BarChartSe';
import { Link } from 'react-router-dom';

function Dengue() {

  const [ultimoMesDengue, setUltimoMesDengue] = useState(false)

  //destructuring from context
  const {
    anioActual,
    anioBaseActual,
    se,
    semanas,
    semanaInicial,
    semanaFinal,
    calendar,
    numeroTotalNotificadosDengue,
    numeroTotalNotificadosDengueFemenino,
    numeroTotalNotificadosDengueMasculino,
    numeroTotalNotificadosDengueSd,
    numeroConfirmadosTotalDengue,
    numeroProbablesTotalDengue,
    numeroDescartadosTotalDengue,
    numeroEmbarazadasNotificadoTotalDengue,
    numeroEmbarazadasConfirmadasDengue,
    numeroEmbarazadasDescartadasDengue,
    numeroSospechososTotalDengue,
    numeroTotalGeneralDengueMoron,
    numeroTotalGeneralDengueNoMoron,
    porcentajeNotificadosDengueMoron,
    dengueSexoEdad,
    dengueXse,
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
    numeroEmbarazadasConfirmadasDengueEntreFechas, 
    numeroEmbarazadasDescartadasDengueEntreFechas
  } = useContext(DataContext);

  const [salmonTransparente, salmon, lilaTransparente, lila, rosaTransparente, rosa, amarillo, amarilloTransparente, verde, verdeTransparente] = Colors

  const [
    dengueFmenor1m,
    dengueF2m12m,
    dengueF13m24m,
    dengueF2a4a,
    dengueF5a9a,
    dengueF10a14a,
    dengueF15a19a,
    dengueF20a24a,
    dengueF25a34a,
    dengueF35a44a,
    dengueF45a65a,
    dengueFmay65,
    dengueMmenor1m,
    dengueM2m12m,
    dengueM13m24m,
    dengueM2a4a,
    dengueM5a9a,
    dengueM10a14a,
    dengueM15a19a,
    dengueM20a24a,
    dengueM25a34a,
    dengueM35a44a,
    dengueM45a65a,
    dengueMmay65
  ] = dengueSexoEdad

  const totalPorSexoTbc = [numeroTotalNotificadosDengueFemenino, numeroTotalNotificadosDengueMasculino, numeroTotalNotificadosDengueSd]

  //Gráfico notificados según sexo

  const totalPorSexoDengue = [numeroTotalNotificadosDengueMasculino, numeroTotalNotificadosDengueFemenino, numeroTotalNotificadosDengueSd]
  const labelsSexoDengue = ['Maculino', 'Femenino', 'SD']
  const backgroundColorDengue = [salmonTransparente, lilaTransparente, rosaTransparente]
  const borderColorDengue = [salmon, lila, rosa]
  const titleSexoDengue = `Casos notificados de Dengue según sexo. Morón, SE 1 a ${se}, ${anioActual}.`

  //Gráfico notificados Morón/Total

  const notificadosDengueEstablecimientoCarga = [numeroTotalGeneralDengueMoron, numeroTotalGeneralDengueNoMoron]
  const labelsEstablecimientoDengue = ['Establecimientos de Morón', 'Establecimientos no pertenecientes a Morón',]
  const backgroundColorEstablecimientoDengue = [lilaTransparente, rosaTransparente]
  const borderColorEstablecimientoDengue = [lila, rosa]
  const titleEstablecimientoDengue = `Casos notificados de Dengue según Establecimiento de carga. Morón, SE 1 a ${se}, ${anioActual}.`


  //Gráfico clasificación

  const titleClasificacionDengue = `Clasificación de los casos de Dengue. Morón, SE 1 a ${se}, ${anioActual}.`
  const labelsClasificacionDengue = ["Clasificación"]
  const label1ClasificacionDengue = "Confirmados"
  const label2ClasificacionDengue = "Probables"
  const label3ClasificacionDengue = "Sospechosos no conclusivos"
  const label4ClasificacionDengue = "Sospechosos"
  const label5ClasificacionDengue = "Descartados"
  const dataConfirmadosClasificacionDengue = [numeroConfirmadosTotalDengue]
  const dataProbablesClasificacionDengue = [numeroProbablesTotalDengue]
  const dataSospechososNoConcClasificacionDengue = [numeroConfirmadosTotalDengue]
  const dataSospechososClasificacionDengue = [numeroSospechososTotalDengue]
  const dataDescartadosClasificacionDengue = [numeroDescartadosTotalDengue]

  //Gráfico Edad x sexo

  const titleEdadSexoDengue = `Casos notificados de Dengue, según sexo y edad. Morón, SE 1 a ${se}, ${anioActual}.`
  const labelsEdadSexoDengue = ['< 1 mes', '2 a 12 m', '1 a 2 años', '2 a 4 años', '5 a 9 años', '10 a 14 años', '15 a 19', '20 a 24 años', '25 a 34 años', '35 a 44 años', '44 a 65 años', '> 65 años']
  const label1Dengue = "Mujeres";
  const label2Dengue = "Varones";
  const femeninoDengue = [dengueFmenor1m, dengueF2m12m, dengueF13m24m, dengueF2a4a, dengueF5a9a, dengueF10a14a, dengueF15a19a, dengueF20a24a, dengueF25a34a, dengueF35a44a, dengueF45a65a, dengueFmay65];
  const masculinoDengue = [dengueMmenor1m, dengueM2m12m, dengueM13m24m, dengueM2a4a, dengueM5a9a, dengueM10a14a, dengueM15a19a, dengueM20a24a, dengueM25a34a, dengueM35a44a, dengueM45a65a, dengueMmay65];


  //Gráfico notificados x SE

  const titleSeDengue = `Casos notificados de Dengue, según Semana Epidemiológica. Morón, SE 1 a ${se}, ${anioActual}.`
  const labelsSeDengue = semanas;
  const labelSeDengue = "SE";
  const seDengue = dengueXse;

  //--------Entre fechas-------

  //Gráfico notificados según sexo entre fechas

  const totalPorSexoDengueEntreFechas = [numeroTotalNotificadosDengueMasculinoEntreFechas, numeroTotalNotificadosDengueFemeninoEntreFechas, numeroTotalNotificadosDengueSdEntreFechas]
  const titleSexoDengueEntreFechas = `Casos notificados de Dengue según sexo. Morón, ${calendar.dateFrom} al ${calendar.dateTo}.`

//Gráfico clasificación entre fechas

const titleClasificacionDengueEntreFechas = `Clasificación de los casos de Dengue. Morón, ${calendar.dateFrom} al ${calendar.dateTo}.`
const dataConfirmadosClasificacionDengueEntreFechas = [numeroConfirmadosTotalDengueEntreFechas]
const dataProbablesClasificacionDengueEntreFechas = [numeroProbablesTotalDengueEntreFechas]
const dataSospechososNoConcClasificacionDengueEntreFechas = [numeroConfirmadosTotalDengueEntreFechas]
const dataSospechososClasificacionDengueEntreFechas = [numeroSospechososTotalDengueEntreFechas]
const dataDescartadosClasificacionDengueEntreFechas = [numeroDescartadosTotalDengueEntreFechas]

//Gráfico notificados Morón/Total entre fechas

const notificadosDengueEstablecimientoCargaEntreFechas = [numeroTotalGeneralDengueMoronEntreFechas, numeroTotalGeneralDengueNoMoronEntreFechas]
const titleEstablecimientoDengueEntreFechas = `Casos notificados de Dengue según Establecimiento de carga. Morón, ${calendar.dateFrom} al ${calendar.dateTo}..`

  //Alerts

  function detallarEmbarazadasDengue() {

    Toast.fire({
      title: `Gestantes confirmadas: ${numeroEmbarazadasConfirmadasDengue}, \n 
    Gestantes descartadas: ${numeroEmbarazadasDescartadasDengue}. \n
    `
    })
  }

  return (
    <div className='page-container'>
      <h2>Dengue</h2>
      <div className='btnElegir-page'>
        <button
          className={ultimoMesDengue ? "button" : "buttonActive"}
          onClick={() => setUltimoMesDengue(false)}
        >
          Acumulado {anioBaseActual}
        </button>
        <button
          className={ultimoMesDengue ? "buttonActive" : "button"}
          onClick={() => setUltimoMesDengue(true)}
        >
          Ver entre fechas
        </button>
      </div>

      {ultimoMesDengue

        ?
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
                {numeroProbablesTotalDengueEntreFechas }
              </p>
            </div>
            <div className='recuadro lila'>
              Descartados:
              <p className='totalNumber'>
                { numeroDescartadosTotalDengueEntreFechas}
              </p>
            </div>
            <div className='recuadro rosa'>
              Sospechosos:
              <p className='totalNumber'>
                { numeroSospechososTotalDengueEntreFechas}
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
                { porcentajeNotificadosDengueMoronEntreFechas}%
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

        :
        <div className='totalesGraphs-container'>
          <div className='totales-page-container'>
            <div className='recuadro naranja'>
              Total {anioActual}:
              <p className='totalNumber'>
                {numeroTotalNotificadosDengue}
              </p>
            </div>
            <div className='recuadro salmon'>
              Confirmados:
              <p className='totalNumber'>
                {numeroConfirmadosTotalDengue}
              </p>
            </div>
            <div className='recuadro rosa'>
              Probables:
              <p className='totalNumber'>
                {numeroProbablesTotalDengue}
              </p>
            </div>
            <div className='recuadro lila'>
              Descartados:
              <p className='totalNumber'>
                {numeroDescartadosTotalDengue}
              </p>
            </div>
            <div className='recuadro salmon' onClick={detallarEmbarazadasDengue}>
              Gestantes:
              <p className='totalNumber'>
                {numeroEmbarazadasNotificadoTotalDengue}
              </p>
            </div>
            <div className='recuadro rosa'>
              Sospechosos:
              <p className='totalNumber'>
                {numeroSospechososTotalDengue}
              </p>
            </div>
            <div className='recuadro lila'>
              Notificados por Morón:
              <p className='totalNumber'>
                {porcentajeNotificadosDengueMoron}%
              </p>
            </div>
          </div>
          
          <div className='graphs-container'>
            <div className='doughnutChart-sifilis'>
              <DoughnutChart
                title={titleSexoDengue}
                datos={totalPorSexoDengue}
                labels={labelsSexoDengue}
                backgroundColor={backgroundColorDengue}
                borderColor={borderColorDengue}
              />
            </div>

            <div className='doughnutChart-sifilis'>
              <DoughnutChart
                title={titleEstablecimientoDengue}
                datos={notificadosDengueEstablecimientoCarga}
                labels={labelsEstablecimientoDengue}
                backgroundColor={backgroundColorEstablecimientoDengue}
                borderColor={borderColorEstablecimientoDengue}
              />
            </div>

            <div className='barChart-sifilis'>
              <BarChartFiveData
                title={titleClasificacionDengue}
                barLabels={labelsClasificacionDengue}
                label1={label1ClasificacionDengue}
                label2={label2ClasificacionDengue}
                label3={label3ClasificacionDengue}
                label4={label4ClasificacionDengue}
                label5={label5ClasificacionDengue}
                data1={dataConfirmadosClasificacionDengue}
                data2={dataProbablesClasificacionDengue}
                data3={dataSospechososNoConcClasificacionDengue}
                data4={dataSospechososClasificacionDengue}
                data5={dataDescartadosClasificacionDengue}
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

            <div className='barChart-sifilis'>
              <BarChartSexAge
                title={titleEdadSexoDengue}
                barLabels={labelsEdadSexoDengue}
                label1={label1Dengue}
                label2={label2Dengue}
                data1={femeninoDengue}
                data2={masculinoDengue}
                borderColor1={lila}
                borderColor2={salmon}
                bgColor1={lilaTransparente}
                bgColor2={salmonTransparente}
              />
            </div>

            <div className='barChart-sifilis'>
              <BarChartSe
                eje={'x'}
                title={titleSeDengue}
                barLabels={labelsSeDengue}
                label1={labelSeDengue}
                data1={seDengue}
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

export default Dengue
