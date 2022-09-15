import { useState, useContext } from 'react';
import BarChart from '../../components/BarChart';
import DataContext from '../../context/DataContext';
import './home.css';
import BarChartSe from '../../components/BarChartSe';
import Colors from '../../components/Colors';


function Home() {

  const [ultimoMesHome, setUltimoMesHome] = useState(false)

  const {
    se,
    semanas,
    anio,
    numeroTotalGeneralNotificadosSifilis,
    numeroTotalGeneralNotificadosHiv,
    numeroTotalNotificadosTuberculosis,
    numeroTotalNotificadosDengue,
    notificadosEno1,
    notificadosEno2,
    sifilisXse,
    tuberculosisXse,
    dengueXse,
    hivXse,

  } = useContext(DataContext);

  const [salmonTransparente, salmon, lilaTransparente, lila, rosaTransparente, rosa] = Colors

  let anioEnCurso = 2022;
  let mesPrevio = "18 a 22";
  let ultimaSE = 30;

  //Gráfico notificados de todas las ENOs
  const titleEnos = "Casos notificados de Enfermedades de Notificación Obligatoria . Morón, 2022"
  const labelsEnos1 = [
    "Accidente potencialmente rábico (APR)",
    "Alacranismo",
    "Brucelosis",
    "Caso sospechoso de intoxicación por consumo de cocaína contaminada",
    "Celiaquía", "Chagas agudo congénito",
    "Chagas crónico",
    "Chagas en embarazadas",
    "Coqueluche",
    //"Dengue", 
    "Diarrea aguda",
    "Encefalitis de San Luis",
    "Enfermedad Febril Exantemática-EFE (Sarampión/Rubéola)",
    "Enfermedad Pie-Mano-Boca",
    //"Estudio de SARS-COV-2 en situaciones especiales", 
    "Fiebre del Nilo Occidental",
    "Gonorrea",
    "Hantavirosis",
    "Hepatitis B",
    "Hepatitis C",];

  const labelsEnos2 = [
    "Hepatitis E",
    "Hidatidosis",
    "HTLV",
    "Infección respiratoria aguda viral sin especificar",
    "Intoxicación con otros tóxicos",
    "Intoxicación/Exposición a Mercurio",
    "Intoxicación/Exposición por Monóxido de Carbono",
    "IRAG",
    "Leptospirosis",
    "Meningoencefalitis",
    "Otras infecciones invasivas (bacterianas y otras)",
    "Poliomielitis-Parálisis flácida aguda en menores de 15 años",
    //"SARS-COV-2 en puntos de entrada y casos relacionados con importación", 
    //"Sífilis", 
    //"Sífilis congénita", 
    //"Sífilis en Embarazadas", 
    "Sindrome inflamatorio multisistémico (SIM)",
    "Streptococcus agalactiae grupo B en embarazadas",
    "SUH - Sindrome Urémico Hemolítico",
    "Toxoplasmosis congénita",
    "Toxoplasmosis en embarazadas",
    //"Tuberculosis", 
    //"Vigilancia genómica de SARS-CoV-2", 
    //"VIH", 
    //"VIH - Expuesto perinatal", 
    //"VIH en embarazo", 
    "Viruela símica",
  ]

  const labelEnos = "Casos notificados";
  const enos1 = notificadosEno1;
  const enos2 = notificadosEno2;

  //Gráfico Sífilis
  const titleSeSifilis = `Casos notificados de Sífilis, según Semana Epidemiológica. Morón, SE 1 a ${se}, 2022.`
  const labelsSeSifilis = semanas;
  const labelSeSifilis = "SE";
  const seSifilis = sifilisXse;

  //Gráfico TBC
  const titleSeTuberculosis = `Casos notificados de Tuberculosis, según Semana Epidemiológica. Morón, SE 1 a ${se}, 2022.`
  const labelsSeTuberculosis = semanas;
  const labelSeTuberculosis = "SE";
  const seTuberculosis = tuberculosisXse;

  //Gráfico Dengue
  const titleSeDengue = `Casos notificados de Dengue, según Semana Epidemiológica. Morón, SE 1 a ${se}, 2022.`
  const labelsSeDengue = semanas;
  const labelSeDengue = "SE";
  const seDengue = dengueXse;

  //Gráfico HIV
  const titleSeHiv = `Casos notificados de HIV, según Semana Epidemiológica. Morón, SE 1 a ${se}, 2022.`
  const labelsSeHiv = semanas;
  const labelSeHiv = "SE";
  const seHiv = hivXse;

  return (
    <div className='home-container'>

      <h2>Vigilancia de Enfermedades de Notificación Obligatoria</h2>
      <h3>{anio}</h3>
      <div className='home-text-container'>
        <p>
          La LEY N° 15.465 en su Artículo N°1 declara obligatoria, en todo el territorio de la Nación, la notificación de los casos de enfermedades infecciosas comprendidas en el Artículo 2 de la mencionada Ley. 
          <a href="http://servicios.infoleg.gob.ar/infolegInternet/anexos/195000-199999/195093/norma.htm" target="_blank" className='home-text-link'>
            (Ver texto completo de la norma)
          </a>
        </p>
        <p>
          En nuestro Municipio hemos priorizado la notificación y análisis de las siguientes enfermedades: Dengue, Sifilis, Tuberculosis, VIH.
        </p>
      </div>

      <div className='btnElegir-page'>
        <button
          className={ultimoMesHome ? "button" : "buttonActive"}
          onClick={() => setUltimoMesHome(false)}
        >
          Acumulado 2022
        </button>
        <button
          className={ultimoMesHome ? "buttonActive" : "button"}
          onClick={() => setUltimoMesHome(true)}
        >
          Ver entre fechas
        </button>
      </div>


      {ultimoMesHome

        ?
        <div className='totalesGraphs-container'>
          <h3>SE x a {ultimaSE}</h3>
          <h3>Total de casos notificados:</h3>
          <div className='totales-page-container'>
            <div className='recuadro lila'>
              Sífilis:
              <p className='totalNumber'>
                { }
              </p>
            </div>
            <div className='recuadro salmon'>
              Tuberculosis:
              { }
            </div>
            <div className='recuadro rosa'>
              Dengue:
              { }
            </div>
            <div className='recuadro lila'>
              HIV:
              { }
            </div>
            <div className='recuadro rosa'>
              ETI:
              { }
            </div>
            <div className='recuadro salmon'>
              x:
              { }
            </div>
          </div>
          <div className='graphs-container'>
            <div className='barChart-sifilis'><BarChart /></div>
            <div className='barChart-sifilis'><BarChart /></div>
            <div className='barChart-sifilis'><BarChart /></div>
          </div>
        </div>



        :
        <div className='totalesGraphs-container'>
          <h3>SE 1 a {ultimaSE}</h3>
          <h3>Total de casos notificados:</h3>
          <div className='totales-page-container'>
            <div className='recuadro lila'>
              Sífilis:
              <p className='totalNumber'>
                {numeroTotalGeneralNotificadosSifilis}
              </p>
            </div>
            <div className='recuadro salmon'>
              Tuberculosis:
              <p className='totalNumber'>
                {numeroTotalNotificadosTuberculosis}
              </p>
            </div>
            <div className='recuadro rosa'>
              Dengue:
              <p className='totalNumber'>
                {numeroTotalNotificadosDengue}
              </p>
            </div>
            <div className='recuadro lila'>
              HIV:
              <p className='totalNumber'>
                {numeroTotalGeneralNotificadosHiv}
              </p>
            </div>
            <div className='recuadro rosa'>
              ETI:
              <p className='totalNumber'>
                { }
              </p>
            </div>
            <div className='recuadro salmon'>
              x:
              <p className='totalNumber'>
                { }
              </p>
            </div>
          </div>


          <div className='graphs-container'>
            <div className='barChartENO-sifilis'>
              <BarChartSe
                eje={'y'}
                title={titleEnos}
                barLabels={labelsEnos1}
                label1={labelEnos}
                data1={enos1}
                borderColor1={salmon}
                bgColor1={salmonTransparente}
              />
            </div>

            <div className='barChartENO-sifilis'>
              <BarChartSe
                eje={'y'}
                title={titleEnos}
                barLabels={labelsEnos2}
                label1={labelEnos}
                data1={enos2}
                borderColor1={salmon}
                bgColor1={salmonTransparente}
              />
            </div>

            <div className='barChart-sifilis'>
              <BarChartSe
                eje={'x'}
                title={titleSeSifilis}
                barLabels={labelsSeSifilis}
                label1={labelSeSifilis}
                data1={seSifilis}
                borderColor1={salmon}
                bgColor1={salmonTransparente}
              />
            </div>

            <div className='barChart-sifilis'>
              <BarChartSe
                eje={'x'}
                title={titleSeTuberculosis}
                barLabels={labelsSeTuberculosis}
                label1={labelSeTuberculosis}
                data1={seTuberculosis}
                borderColor1={rosa}
                bgColor1={rosaTransparente}
              />
            </div>

            <div className='barChart-sifilis'>
              <BarChartSe
                eje={'x'}
                title={titleSeDengue}
                barLabels={labelsSeDengue}
                label1={labelSeDengue}
                data1={seDengue}
                borderColor1={lila}
                bgColor1={lilaTransparente}
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

export default Home
