import { useState, useContext } from 'react'
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';
import TbcEntreFechas from './TbcEntreFechas';
import TbcTotal from './TbcTotal';

function Tbc() {

  const [ultimoMesTbc, setUltimoMesTbc] = useState(false)

  //destructuring from context

  const {
    anioBaseActual,
  } = useContext(DataContext);

  //Alerts

  function detallarEmbarazadasTuberculosis(conf, desc) {
    Toast.fire({
      title: `Gestantes confirmadas: ${conf}, \n 
    Gestantes descartadas: ${desc}. \n
    `
    })
  }


  return (
    <div className='page-container'>
      <h2>Tuberculosis</h2>
      <div className='btnElegir-page'>
        <button
          className={ultimoMesTbc ? "button" : "buttonActive"}
          onClick={() => setUltimoMesTbc(false)}
        >
          Acumulado {anioBaseActual}
        </button>
        <button
          className={ultimoMesTbc ? "buttonActive" : "button"}
          onClick={() => setUltimoMesTbc(true)}
        >
          Ver entre fechas
        </button>
      </div>

      {ultimoMesTbc
        ? <TbcEntreFechas />
        : <TbcTotal />
      }    </div>
  )
}

export default Tbc
