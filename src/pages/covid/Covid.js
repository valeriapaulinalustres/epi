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

function Covid() {

  const [ultimoMesDengue, setUltimoMesDengue] = useState(false)

  //destructuring from context
  const {
    anioActual,
    se,
    semanas,
    calendar,
    totalNotificadosETI,
    etiXse
   
  } = useContext(DataContext);

  const [salmonTransparente, salmon, lilaTransparente, lila, rosaTransparente, rosa, amarillo, amarilloTransparente, verde, verdeTransparente] = Colors

  //Gráfico notificados x SE

  const titleSeEti= `Casos notificados de ETI, según Semana Epidemiológica. Morón, SE 1 a ${se}, ${anioActual}.`
  const labelsSeEti = semanas;
  const labelSeEti = "SE";
  const seEti = etiXse;

  console.log(etiXse);
 
  //Alerts

  function detallarEmbarazadasDengue() {

    Toast.fire({
      title: `Gestantes confirmadas: , \n 
    Gestantes descartadas: . \n
    `
    })
  }

  return (
    <div className='page-container'>
      <h2>COVID y ETI</h2>
      <div className='btnElegir-page'>
        <button
          className={ultimoMesDengue ? "button" : "buttonActive"}
          onClick={() => setUltimoMesDengue(false)}
        >
          Acumulado {anioActual}
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
            calendar.dateFrom
              ? <h3>{calendar.dateFrom} al {calendar.dateTo}</h3>
              : <div>
                <p>No hay fechas ingresadas</p>
<Link to="/upload"><button className='button'>Ingresar fechas</button></Link>
              </div>
              
          }

          <div className='totales-page-container'>
            <div className='recuadro naranja'>
              Total notificados:
              <p className='totalNumber'>
                {}
              </p>
            </div>
            <div className='recuadro salmon'>
              Confirmados:
              <p className='totalNumber'>
                {}
              </p>
            </div>
            <div className='recuadro rosa'>
              Probables:
              <p className='totalNumber'>
                { }
              </p>
            </div>
            <div className='recuadro lila'>
              Descartados:
              <p className='totalNumber'>
                { }
              </p>
            </div>
            <div className='recuadro rosa'>
              Sospechosos:
              <p className='totalNumber'>
                {}
              </p>
            </div>
            <div className='recuadro salmon'>
              Gestantes:
              <p className='totalNumber'>
                {}
              </p>
            </div>
            <div className='recuadro lila'>
              Notificados por Morón:
              <p className='totalNumber'>
                { }%
              </p>
            </div>
          </div>

          <div className='graphs-container'>
     
            <div className='doughnutChart-sifilis'>
              <DoughnutChart
               
              />
            </div>

            <div className='doughnutChart-sifilis'>
              <DoughnutChart
               
              />
            </div>

            <div className='barChart-sifilis'>
              <BarChartFiveData
               
              />
            </div>

          </div>
        </div>

        :
        <div className='totalesGraphs-container'>
          <div className='totales-page-container'>
            <div className='recuadro naranja'>
              Total notificados ETI {anioActual}:
              <p className='totalNumber'>
                {totalNotificadosETI}
              </p>
            </div>
            <div className='recuadro salmon'>
              Confirmados:
              <p className='totalNumber'>
                {}
              </p>
            </div>
            <div className='recuadro rosa'>
              Probables:
              <p className='totalNumber'>
                {}
              </p>
            </div>
            <div className='recuadro lila'>
              Descartados:
              <p className='totalNumber'>
                {}
              </p>
            </div>
            <div className='recuadro salmon' onClick={detallarEmbarazadasDengue}>
              Gestantes:
              <p className='totalNumber'>
                {}
              </p>
            </div>
            <div className='recuadro rosa'>
              Sospechosos:
              <p className='totalNumber'>
                {}
              </p>
            </div>
            <div className='recuadro lila'>
              Notificados por Morón:
              <p className='totalNumber'>
                {}%
              </p>
            </div>
          </div>
          
          <div className='graphs-container'>
            <div className='doughnutChart-sifilis'>
              <DoughnutChart
                
              />
            </div>

            <div className='doughnutChart-sifilis'>
              <DoughnutChart
             
              />
            </div>

            <div className='barChart-sifilis'>
              <BarChartFiveData
               
              />
            </div>

            <div className='barChart-sifilis'>
              <BarChartSexAge
              
              />
            </div>

            <div className='barChart-sifilis'>
              <BarChartSe
                eje={'x'}
                title={titleSeEti}
                barLabels={labelsSeEti}
                label1={labelSeEti}
                data1={etiXse}
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

export default Covid
