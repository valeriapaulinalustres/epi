import { useState, useContext } from 'react';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import HivEntreFechas from './HivEntreFechas';
import HivTotal from './HivTotal';

function Hiv() {

  const [ultimoMesHiv, setUltimoMesHiv] = useState(false)

  //destructuring from context
  const {
    anioActual,
    anioBaseActual,
  } = useContext(DataContext);


  return (
    <div className='page-container'>
      <h2>HIV</h2>
      <div className='btnElegir-page'>
        <button
          className={ultimoMesHiv ? "button" : "buttonActive"}
          onClick={() => setUltimoMesHiv(false)}
        >
          Acumulado {anioBaseActual}
        </button>
        <button
          className={ultimoMesHiv ? "buttonActive" : "button"}
          onClick={() => setUltimoMesHiv(true)}
        >
          Ver entre fechas
        </button>
      </div>

      {ultimoMesHiv
        ? <HivEntreFechas />
        : <HivTotal />
      }
    </div>
  )
}

export default Hiv
