import React, { useContext, useState } from "react";
import * as XLSX from "xlsx";
import "./upload.css";
import DataContext from "../../context/DataContext";
import Toast from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from '../../components/Loading/Loading';


import excelFile from './moron.csv';
import excelFile2023 from './moron2023.csv';
import excelFileClinica from './clinica.csv';
import * as xlsx from 'xlsx';

function Upload() {

  const [spinner, setSpinner] = useState(false)
  const [spinnerHome, setSpinnerHome] = useState(false)
  const [spinnerHomeClinica, setSpinnerHomeClinica] = useState(false)


  const { setBaseCompleta, baseCompleta, setCalendar, setWeeksCalendar, setBaseCompletaClinica, setAnioBaseActual, semanas } =
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
      // console.log(d);
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

  function handleWeeksForm (e) {
    e.preventDefault();
    if (parseInt(e.target[0].value) > parseInt(e.target[1].value)) {chooseAnotherWeek()} else {
      if (e.target[0].value != "" && e.target[1].value != "") {
        setWeeksCalendar({
          weekFrom: e.target[0].value,
          weekTo: e.target[1].value,
        });
        ready();
      } else {
        ingresarFecha();
      }
    }
   
  }

  function ready() {
    toast("Datos ingresados!", {
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

  function chooseAnotherWeek() {
    Toast.fire({
      title: `La fecha final debe ser menor o igual a la inicial`,
    });
  }
  //console.log(spinner)

  function loadLocalFile() {
    setSpinnerHome(true);
    setSpinnerHomeClinica(true);

    //load moron.csv file ***********************************
    let json;

    // get file from the imported url
    let request = new XMLHttpRequest();
    request.open('GET', excelFile, true);
    request.responseType = "arraybuffer";
    request.onload = function () {



      /* convert data to binary string */
      let data = new Uint8Array(request.response);
      let arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      data = arr.join("");

      //using xlsx library convert file to json
      const workbook = xlsx.read(data, { type: "binary" })
      const sheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[sheetName]
      json = xlsx.utils.sheet_to_json(worksheet)
      //console.log(json)
      setBaseCompleta(json)
      setSpinnerHome(false)
      setAnioBaseActual(2022)
    };
    request.send()

    //load moron2023.csv file ***********************************
    let json2023;

    // get file from the imported url
    let request2023 = new XMLHttpRequest();
    request2023.open('GET', excelFile, true);
    request2023.responseType = "arraybuffer";
    request2023.onload = function () {

      /* convert data to binary string */
      let data2023 = new Uint8Array(request2023.response);
      let arr2023 = new Array();
      for (var i = 0; i != data2023.length; ++i) arr2023[i] = String.fromCharCode(data2023[i]);
      data2023 = arr2023.join("");

      //using xlsx library convert file to json
      const workbook = xlsx.read(data2023, { type: "binary" })
      const sheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[sheetName]
      json2023 = xlsx.utils.sheet_to_json(worksheet)
      //console.log(json)
      setBaseCompleta(json2023)
      setSpinnerHome(false)
      setAnioBaseActual(2023)
    };
    request2023.send()


    //load clinica.csv file ***********************************

    let jsonClinica;

    // get file from the imported url
    let requestClinica = new XMLHttpRequest();
    requestClinica.open('GET', excelFileClinica, true);
    requestClinica.responseType = "arraybuffer";
    requestClinica.onload = function () {




      let dataClinica = new Uint8Array(requestClinica.response);
      let arrClinica = new Array();
      for (var i = 0; i != dataClinica.length; ++i) arrClinica[i] = String.fromCharCode(dataClinica[i]);
      dataClinica = arrClinica.join("");

      //using xlsx library convert file to json
      const workbookClinica = xlsx.read(dataClinica, { type: "binary" })
      const sheetNameClinica = workbookClinica.SheetNames[0]
      const worksheetClinica = workbookClinica.Sheets[sheetNameClinica]
      jsonClinica = xlsx.utils.sheet_to_json(worksheetClinica)
      //console.log(jsonClinica)
      setBaseCompletaClinica(jsonClinica)
      setSpinnerHomeClinica(false)
    };
    requestClinica.send()






    //*************************************
  }









  function loadLocalFile2023() {
    setSpinnerHome(true);
    setSpinnerHomeClinica(true);

    //load moron2023.csv file ***********************************
    let json2023;

    // get file from the imported url
    let request2023 = new XMLHttpRequest();
    request2023.open('GET', excelFile2023, true);
    request2023.responseType = "arraybuffer";
    request2023.onload = function () {

      /* convert data to binary string */
      let data2023 = new Uint8Array(request2023.response);
      let arr2023 = new Array();
      for (var i = 0; i != data2023.length; ++i) arr2023[i] = String.fromCharCode(data2023[i]);
      data2023 = arr2023.join("");

      //using xlsx library convert file to json
      const workbook = xlsx.read(data2023, { type: "binary" })
      const sheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[sheetName]
      json2023 = xlsx.utils.sheet_to_json(worksheet)
      //console.log(json)
      setBaseCompleta(json2023)
      setSpinnerHome(false)
      setAnioBaseActual(2023)
    };
    request2023.send()


    // //load clinica.csv file ***********************************

    //   let jsonClinica;

    //   // get file from the imported url
    //   let requestClinica = new XMLHttpRequest();
    //   requestClinica.open('GET', excelFileClinica , true);
    //   requestClinica.responseType = "arraybuffer";
    //   requestClinica.onload = function() {




    //       let dataClinica = new Uint8Array(requestClinica.response);
    //       let arrClinica = new Array();
    //       for (var i = 0; i != dataClinica.length; ++i) arrClinica[i] = String.fromCharCode(dataClinica[i]);
    //       dataClinica = arrClinica.join("");

    //       //using xlsx library convert file to json
    //       const workbookClinica = xlsx.read(dataClinica, { type: "binary" })
    //       const sheetNameClinica = workbookClinica.SheetNames[0]
    //       const worksheetClinica = workbookClinica.Sheets[sheetNameClinica]
    //        jsonClinica = xlsx.utils.sheet_to_json(worksheetClinica)
    //       //console.log(jsonClinica)
    //       setBaseCompletaClinica(jsonClinica)
    //       setSpinnerHomeClinica(false)
    //   };
    //   requestClinica.send()  

  }

  const semanasNumber = []
  semanas.forEach(el => semanasNumber.push(parseInt(el)))


  return (
    <div className="upload-container">
      <h2>
        Carga de archivos excel descargados desde la base de datos de SISA
      </h2>
      <button
        onClick={loadLocalFile}
        className="buttonActive"
      >
        Cargar archivo local 2022
      </button>
      <button
        onClick={loadLocalFile2023}
        className="buttonActive"
      >
        Cargar archivo local 2023, ARCHIVO DE PRUEBA, DATOS NO REALES
      </button>
      {spinnerHomeClinica && <Loading />}
      {spinnerHome && <Loading />}


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
            // console.log(spinner)
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

<div className="calendar-container">
<p className="calendar-title">Seleccionar Semanas Epidemiológicas</p>
<div className="calendar-inputs-btn-container">
        <form onSubmit={handleWeeksForm} className="calendar-form-container">
          <input
            type="number"
            placeholder="SE inicial"
            className="calendar-input"
          />
          <datalist id="drugs">
            {semanasNumber.map((el) => <option value={el}>{el}</option>)}
          </datalist>

          <input
            type="number"
            placeholder="SE final"
            className="calendar-input"
          />
          <datalist id="drugs">
            {semanasNumber.map((el) => <option value={el}>{el}</option>)}
          </datalist>

          <input type="submit" value="Enviar" className="buttonActive" ></input>
          <button onClick={() => navigate(-1)} className="button right">
            Volver
          </button>
        </form>
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



