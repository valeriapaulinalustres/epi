import React, { useState, useContext } from "react";
import { reduceHooks } from "react-table";
import * as XLSX from "xlsx";
import './upload.css';
import DataContext from '../../context/DataContext';


function Upload() {

  const { setBaseCompleta, baseCompleta } = useContext(DataContext);





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
      setBaseCompleta(d)
      //console.log(d)
    });
  };


  return (
    <div className="upload-container">
      <h2>Carga de archivos excel descargados desde la base de datos de SISA</h2>
      <div className="file-select" id="src-file1">
        <input
          type="file"
          className="inputButton"
          name="src-file1"
          aria-label="Archivo"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);

          }}
        />
      </div>
      {baseCompleta.length != 0
        ? <p>Archivo cargado</p>
        : <p>No hay archivos cargados</p>
      }

    </div>
  )
}

export default Upload
