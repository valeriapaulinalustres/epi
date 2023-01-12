import { useState, useContext } from 'react';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';
import DengueEntreFechas from './DengueEntreFechas';
import DengueTotal from './DengueTotal';

function Dengue() {

  const [ultimoMesDengue, setUltimoMesDengue] = useState(false)

  //destructuring from context
  const {
    anioBaseActual,
    numeroEmbarazadasConfirmadasDengue,
    numeroEmbarazadasDescartadasDengue,
  } = useContext(DataContext);

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
        ? <DengueEntreFechas />
        : <DengueTotal />
      }
    </div>
  )
}

export default Dengue
