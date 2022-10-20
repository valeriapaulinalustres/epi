import React, { useContext, useState } from "react";
import * as XLSX from "xlsx";
import "./upload.css";
import DataContext from "../../context/DataContext";
import Toast from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from '../../components/Loading/Loading'


function Upload() {

  const [spinner, setSpinner] = useState(false)

  const { setBaseCompleta, baseCompleta, setCalendar } =
    useContext(DataContext);

  const navigate = useNavigate();

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((d) => {
      setBaseCompleta(d);
setSpinner(false)
    });
  };

  //Takes calendar info to context
  function handleCalendar(e) {
    e.preventDefault();
    if (e.target[0].value != "" && e.target[1].value != "") {
      setCalendar({
        dateFrom: e.target[0].value,
        dateTo: e.target[1].value,
      });
      ready();
    } else {
      ingresarFecha();
    }
  }

  function ready() {
    toast("Fechas ingresadas!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  //alert
  function ingresarFecha() {
    Toast.fire({
      title: `Debe completar ambas fechas por favor`,
    });
  }
console.log(spinner)
  return (
    <div className="upload-container">
      <h2>
        Carga de archivos excel descargados desde la base de datos de SISA
      </h2>
      <div className="file-select" id="src-file1">
        <input
          type="file"
          className="inputButton"
          name="src-file1"
          aria-label="Archivo"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
            setSpinner(true)
            console.log(spinner)
          }}
        />
      </div>
      {baseCompleta.length != 0 ? (
        <p>Archivo cargado</p>
      ) : (
        <p>No hay archivos cargados</p>
      )}
      <div className="calendar-container">
        <p className="calendar-title">Seleccionar fechas</p>
        <div className="calendar-inputs-btn-container">
          <form onSubmit={handleCalendar} className="calendar-form-container">
            <input
              type="date"
              label="desde"
              min="2022-01-01"
              className="calendar-input"
            />
            <input
              type="date"
              label="hasta"
              min="2022-01-01"
              className="calendar-input"
            />
            <input type="submit" value="Enviar" className="buttonActive" />
          </form>
          <button onClick={() => navigate(-1)} className="button right">
            Volver
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        draggable
        theme="light"
      />
       {spinner && <Loading />}
    </div>
  );
}

export default Upload;
