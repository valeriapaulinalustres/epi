import React, { createContext, useState, useEffect } from 'react';



const DataContext = createContext();

const DataProvider = ({ children }) => {


  const [baseCompleta, setBaseCompleta] = useState([]);
const [calendar, setCalendar] = useState({});
const [weeksCalendar, setWeeksCalendar] = useState({});
const [baseCompletaClinica, setBaseCompletaClinica] = useState([]);
const [anioBaseActual, setAnioBaseActual] = useState()



const se = 48;

 const date = new Date()// calcula fecha y hora actual
// const hoy = date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear();
// const fechaActual = date.getFullYear() + "-" + (date.getMonth() +1) + "-" +  date.getDate();
// const fechaActualFormatoNumero = pasarFechaAFormatoNumero(fechaActual)
   const anioActual = date.getFullYear();
//   const eneroFormatoNumero = pasarFechaAFormatoNumero(1-1-2022)
  

  const semanas = ['1', '2', '3','4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27','28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40','41', '42', '43', '44', '45','46','47','48', '49', '50','51', '52'];


  
// //fecha con formato de objeto
// const actualDate = {
//   day: date.getDate(),
//   month: date.getMonth() + 1,
//   year: date.getFullYear()
// }
// //calcula fecha actual con barras idem sisa (español)

// let miliSec = date.getTime();

// // Calcula días desde 1-1-1970 (fecha formato JS)
// let days = Math.round(date.getTime() / (1000*60*60*24));



// let fechaInicio = new Date('1899-12-31').getTime();
// let fechaHoy    = new Date(date).getTime();


// let diff = Math.round((fechaHoy - (fechaInicio))/(1000*60*60*24)) + 1


// //para contar cantidad de días desde 1-1-1900 (formato número del excel)
// function pasarFechaAFormatoNumero (fechaApasarAformatoNumero){
//   let a = new Date('1899-12-31').getTime();
// let b = new Date(fechaApasarAformatoNumero).getTime();
//   return Math.round(((b - (a))/(1000*60*60*24))+1) 
// }

// const fechaInicioFormatoNumero = pasarFechaAFormatoNumero(calendar.dateFrom)//acá entre paréntesis irá el input del calendario "desde"
// const fechaFinFormatoNumero = pasarFechaAFormatoNumero(calendar.dateTo)//acá entre paréntesis irá el input del calendario "hasta"

const semanaInicial = weeksCalendar.weekFrom;
const semanaFinal = weeksCalendar.weekTo;

// function calcularTotalNotificadosX() {
//   return baseCompleta.filter(el => el.EVENTO === "Tuberculosis" && el.DEPARTAMENTO_RESIDENCIA === "Morón" && el.FECHA_APERTURA >= fechaInicioFormatoNumero && el.FECHA_APERTURA <= fechaFinFormatoNumero)
// }

// const a = calcularTotalNotificadosX()



  //==================================================
  //----------FÓRMULAS----------------------------
  //==================================================

  //-------TOTALES
  function calcularTotalNotificados(enfermedad) {
    return baseCompleta.filter(el => el.EVENTO === enfermedad && el.DEPARTAMENTO_RESIDENCIA === "Morón" )
  }

  function calcularTotalNotificadosEntreFechas(enfermedad, fechaInicio, fechaFin) {
    return baseCompleta.filter(el => el.EVENTO === enfermedad && el.DEPARTAMENTO_RESIDENCIA === "Morón" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin)
  }

  function calcularNumeroTotalNotificados(enfermedad) {
    return baseCompleta.filter(el => el.EVENTO == enfermedad && el.DEPARTAMENTO_RESIDENCIA == "Morón").length || 0
  }

  function calcularPorSexo(arr, sexo) {
    return arr.filter(el => el.SEXO == sexo && el.DEPARTAMENTO_RESIDENCIA == "Morón" ).length || 0

  }

  function calcularPorSexoEntreFechas(arr, sexo, fechaInicio = 1, fechaFin = 53) {
    return arr.filter(el => el.SEXO == sexo && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin).length || 0

  }

  function calcularEventoPorSexo(enfermedad, sexo) {
    return baseCompleta.filter(el => el.EVENTO == enfermedad && el.SEXO == sexo && el.DEPARTAMENTO_RESIDENCIA == "Morón")
  }

  function calcularClasificacionManualPorEvento(evento, clasificacion) {
    return baseCompleta.filter(el => el.CLASIFICACION_MANUAL == clasificacion && el.EVENTO == evento && el.DEPARTAMENTO_RESIDENCIA == "Morón" )
  }

  function calcularClasificacionManualPorEventoEntreFechas(evento, clasificacion,fechaInicio = 1, fechaFin = 53) {
    return baseCompleta.filter(el => el.CLASIFICACION_MANUAL == clasificacion && el.EVENTO == evento && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin)
  }


function calcularSexoClasificacion (sexo, clasificacion, fechaInicio = 1, fechaFin = 53){
  return (baseCompleta.filter(el => el.SEXO == sexo && el.DEPARTAMENTO_RESIDENCIA == "Morón"  && el.CLASIFICACION_MANUAL == clasificacion && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin)).length || 0
}


function calcularConfirmadosPorClasificacion(clasificacion) {

  return baseCompleta.filter(el => el.CLASIFICACION_MANUAL == clasificacion && el.DEPARTAMENTO_RESIDENCIA == "Morón")
}


function calcularConfirmadosPorClasificacionEntreFechas(clasificacion, fechaInicio , fechaFin) {

  return baseCompleta.filter(el => el.CLASIFICACION_MANUAL === clasificacion && el.DEPARTAMENTO_RESIDENCIA === "Morón" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin)
}

  function calcularConfirmadosTuberculosisEntreFechas(clasificacion, fechaInicio = 1, fechaFin = 53) {

    return baseCompleta.filter(el => el.CLASIFICACION_MANUAL == clasificacion && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin).length || 0
      

  }

  function calcularConfirmadosDengue() {


    let a = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso confirmado DEN-1" && el.DEPARTAMENTO_RESIDENCIA == "Morón" )
    let b = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso confirmado sin serotipo" && el.DEPARTAMENTO_RESIDENCIA == "Morón" )
let ab = [...a, ...b]
    return ab
  }

  function calcularConfirmadosDengueEntreFechas(fechaInicio = 1, fechaFin = 53) {


    let a = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso confirmado DEN-1" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin)
    let b = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso confirmado sin serotipo" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin)
let ab = [...a, ...b]
    return ab
  }

  function calcularDescartadosTuberculosis() {
    let a =  baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Descartado TBC - Micobacteria no tuberculosis" && el.EVENTO == "Tuberculosis" && el.DEPARTAMENTO_RESIDENCIA == "Morón" )
    let b = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Bacteriología Negativa" && el.EVENTO == "Tuberculosis" && el.DEPARTAMENTO_RESIDENCIA == "Morón" )
    let c = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso invalidado por epidemiología" && el.EVENTO == "Tuberculosis" && el.DEPARTAMENTO_RESIDENCIA == "Morón" )
    
    let abc = [...a, ...b, ...c]
     return abc
  }

  function calcularDescartadosTuberculosisEntreFechas(fechaInicio = 1, fechaFin = 53) {
    let a =  baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Descartado TBC - Micobacteria no tuberculosis" && el.EVENTO == "Tuberculosis" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin).length || 0 
    let b = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Bacteriología Negativa" && el.EVENTO == "Tuberculosis" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin).length || 0
     return a + b
  }

  function calcularDescartadosDengue() {
    let a = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado por diagnóstico diferencial" && el.DEPARTAMENTO_RESIDENCIA == "Morón" )
      let b = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Dengue" )
      let c = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado por epidemiología" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Dengue" )

      let abc = [...a,...b,...c]
      return abc
  }

  function calcularDescartadosDengueEntreFechas(fechaInicio = 1, fechaFin = 53) {
    let a = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado por diagnóstico diferencial" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Dengue" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin).length || 0
      let b = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Dengue" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin).length || 0
      let c = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado por epidemiología" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Dengue" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin).length || 0

      return a+b+c
  }

  function calcularSospechososDengue() {
    let a = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso sospechoso" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Dengue" )
      let b = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso sospechoso no conclusivo" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Dengue" )

      let ab = [...a,...b]
      return ab
  }

  function calcularSospechososDengueEntreFechas(fechaInicio = 1, fechaFin = 53) {
    let a = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso sospechoso" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Dengue"  && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin).length || 0
      let b = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso sospechoso no conclusivo" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Dengue"  && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin).length || 0

      return a + b
  }

  function calcularEventoEnEmbarazo(evento) {
    return baseCompleta.filter(el => el.EVENTO == evento && el.EMBARAZADA == "SI" && el.DEPARTAMENTO_RESIDENCIA == "Morón" )
  }

  function calcularEventoEnEmbarazoEntreFechas(evento, fechaInicio = 1, fechaFin = 53) {
    return baseCompleta.filter(el => el.EVENTO == evento && el.EMBARAZADA == "SI" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin).length || 0
  }

  function calcularConfirmadosEmbarazoTuberculosis() {

    let a = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Baciloscopía positiva" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Tuberculosis" && el.EMBARAZADA == "SI" )
      let b =baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Complejo Mycobacterium tuberculosis" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Tuberculosis" && el.EMBARAZADA == "SI" )
      let c = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Mycobacterium tuberculosis" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Tuberculosis" && el.EMBARAZADA == "SI")

      let abc = [...a, ...b, ...c]

      return abc
  }

  
  function calcularConfirmadosEmbarazoTuberculosisEntreFechas(fechaInicio = 1, fechaFin = 53) {

    let a = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Baciloscopía positiva" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Tuberculosis" && el.EMBARAZADA == "SI" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin).length || 0
      let b =baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Complejo Mycobacterium tuberculosis" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Tuberculosis" && el.EMBARAZADA == "SI" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin).length || 0
      let c = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Mycobacterium tuberculosis" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Tuberculosis" && el.EMBARAZADA == "SI" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin).length || 0

      return a +b + c
  }

  function calcularDescartadosEmbarazoTuberculosis(fechaInicio = 1, fechaFin = 53) {
    let a = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI" && el.EVENTO == "Tuberculosis" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin).length || 0
      let b = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso invalidado por epidemiología" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI" && el.EVENTO == "Tuberculosis" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin).length || 0

      return a + b
  }

  function calcularConfirmadosEmbarazoDengue() {
    let a = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso confirmado DEN-1" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI" )
      let b =baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso confirmado sin serotipo" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI" )

      let ab = [...a,...b]

      return ab
  }

  function calcularConfirmadosEmbarazoDengueEntreFechas(fechaInicio = 1, fechaFin = 53) {
    let a = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso confirmado DEN-1" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin).length || 0
      let b =baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso confirmado sin serotipo" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin).length || 0

      return a+b
  }

  function calcularDescartadosEmbarazoDengue() {
    let a = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado por diagnóstico diferencial" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI")
    let b =baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado por diagnóstico diferencial" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI")
    let c =baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado por epidemiología" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI")
    let d =baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI")

    let abcd = [...a,...b,...c, ...d]
    return abcd
  }

  function calcularDescartadosEmbarazoDengueEntreFechas(fechaInicio = 1, fechaFin = 53) {
    let a = baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado por diagnóstico diferencial" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI"&& el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin).length || 0
    let b =baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado por diagnóstico diferencial" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI"&& el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin).length || 0
    let c =baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado por epidemiología" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI"&& el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin).length || 0

    return a + b + c
  }

  function calcularDptoCargaMoron(evento) {
    return baseCompleta.filter(el => el.EVENTO == evento && el.DEPARTAMENTO_CARGA == "Morón" && el.DEPARTAMENTO_RESIDENCIA == "Morón")
  }

  function calcularDptoCargaMoronEntreFechas(evento, fechaInicio, fechaFin) {
    return baseCompleta.filter(el => el.EVENTO == evento && el.DEPARTAMENTO_CARGA == "Morón" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin)
  }

  function calcularDptoCargaNoMoron(evento) {
    return baseCompleta.filter(el => el.EVENTO == evento && el.DEPARTAMENTO_CARGA !== "Morón" && el.DEPARTAMENTO_RESIDENCIA == "Morón")
  }

  function calcularDptoCargaNoMoronEntreFechas(evento, fechaInicio, fechaFin) {
    return baseCompleta.filter(el => el.EVENTO == evento && el.DEPARTAMENTO_CARGA !== "Morón" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.SEPI_APERTURA >= fechaInicio && el.SEPI_APERTURA <= fechaFin)
  }

  
  function calcularResultadoTuberculosis(resultado) {
    return baseCompleta.filter(el => el.EVENTO == "Tuberculosis" && el.RESULTADO == resultado && el.DEPARTAMENTO_RESIDENCIA == "Morón").length || 0
  }

  function calcularEdadSexo (arr, sexo, edad) {
    return arr.filter(el => el.SEXO == sexo && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.GRUPO_ETARIO == edad).length || 0
  
  }

  function calcularNotificadosXSE (arr,se) {
    return arr.filter(el => el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.SEPI_APERTURA == se).length || 0
  
  }

  //fórmulas para clinica.csv

  function calcularTotalNotificadosClinica(enfermedad) {
    return baseCompletaClinica.filter(el => el.NOMBREEVENTOAGRP == enfermedad  )
  }
  

  function calcularNotificadosXSEClinica (arr,se) {
    return arr.filter(el => el.DEPARTAMENTO == "MORÓN" && el.SEMANA == se).length || 0
  
  }

  function quitarDuplicados(arr) {
    let sinDuplicados = []

    for (let i = 0; i < arr.length; i++) {
        const el1 = arr[i];
        //console.log(el1.DNI);
        let filtrado = sinDuplicados.filter(el => el.NRO_DOC === el1.NRO_DOC)

        if (filtrado.length == 0) { sinDuplicados.push(el1) }
    }
//console.log(sinDuplicados);
    return sinDuplicados
}


  //==================================================
  //----------ENFERMEDADES----------------------------
  //==================================================



  //--------Sífilis--------------------------------------------------------------------------

  //-----------arrays totales
  let arrayTotalNotificadosSifilis = calcularTotalNotificados("Sífilis");
  arrayTotalNotificadosSifilis = quitarDuplicados(arrayTotalNotificadosSifilis);
  let arrayTotalNotificadosSifilisCongenita = calcularTotalNotificados("Sífilis congénita");
  arrayTotalNotificadosSifilisCongenita = quitarDuplicados(arrayTotalNotificadosSifilisCongenita);
  let arrayTotalNotificadosSifilisEmbarazadas = calcularTotalNotificados("Sífilis en personas gestantes");
  arrayTotalNotificadosSifilisEmbarazadas = quitarDuplicados(arrayTotalNotificadosSifilisEmbarazadas);

  let arrayTotalGeneralNotificadosSifilis = [...arrayTotalNotificadosSifilis, ...arrayTotalNotificadosSifilisCongenita, ...arrayTotalNotificadosSifilisEmbarazadas];

 arrayTotalGeneralNotificadosSifilis = quitarDuplicados(arrayTotalGeneralNotificadosSifilis)  

  //-----------arrays totales entre fechas
  let arrayTotalNotificadosSifilisEntreFechas = calcularTotalNotificadosEntreFechas("Sífilis", semanaInicial, semanaFinal);
  arrayTotalNotificadosSifilisEntreFechas = quitarDuplicados(arrayTotalNotificadosSifilisEntreFechas)
  let arrayTotalNotificadosSifilisCongenitaEntreFechas = calcularTotalNotificadosEntreFechas("Sífilis congénita", semanaInicial, semanaFinal);
  arrayTotalNotificadosSifilisCongenitaEntreFechas = quitarDuplicados(arrayTotalNotificadosSifilisCongenitaEntreFechas)
  let arrayTotalNotificadosSifilisEmbarazadasEntreFechas = calcularTotalNotificadosEntreFechas("Sífilis en personas gestantes", semanaInicial, semanaFinal);
  arrayTotalNotificadosSifilisEmbarazadasEntreFechas = quitarDuplicados(arrayTotalNotificadosSifilisEmbarazadasEntreFechas)

  let arrayTotalGeneralNotificadosSifilisEntreFechas = [...arrayTotalNotificadosSifilisEntreFechas, ...arrayTotalNotificadosSifilisCongenitaEntreFechas, ...arrayTotalNotificadosSifilisEmbarazadasEntreFechas];
  arrayTotalGeneralNotificadosSifilisEntreFechas = quitarDuplicados(arrayTotalGeneralNotificadosSifilisEntreFechas)
  //-------valores totales
  const numeroTotalNotificadosSifilis = arrayTotalNotificadosSifilis.length || 0;
  const numeroTotalNotificadosSifilisCongenita = arrayTotalNotificadosSifilisCongenita.length || 0;
  const numeroTotalNotificadosSifilisEmbarazadas = arrayTotalNotificadosSifilisEmbarazadas.length || 0;

  const numeroTotalGeneralNotificadosSifilis = arrayTotalGeneralNotificadosSifilis.length || 0;


  //-------valores totales entre fechas
  const numeroTotalNotificadosSifilisEntreFechas = arrayTotalNotificadosSifilisEntreFechas.length || 0;
  const numeroTotalNotificadosSifilisCongenitaEntreFechas = arrayTotalNotificadosSifilisCongenitaEntreFechas.length || 0;
  const numeroTotalNotificadosSifilisEmbarazadasEntreFechas = arrayTotalNotificadosSifilisEmbarazadasEntreFechas.length || 0;

  const numeroTotalGeneralNotificadosSifilisEntreFechas = arrayTotalGeneralNotificadosSifilisEntreFechas.length || 0;

  //---------por sexo
  const numeroTotalGeneralNotificadosSifilisFemenino = calcularPorSexo(arrayTotalGeneralNotificadosSifilis, "F")

  const numeroTotalGeneralNotificadosSifilisMasculino = calcularPorSexo(arrayTotalGeneralNotificadosSifilis, "M")

  const numeroTotalGeneralNotificadosSifilisSd = calcularPorSexo(arrayTotalGeneralNotificadosSifilis, "NA")

  //---------por sexo entre fechas
  const numeroTotalGeneralNotificadosSifilisFemeninoEntreFechas = calcularPorSexo(arrayTotalGeneralNotificadosSifilisEntreFechas, "F", semanaInicial, semanaFinal)

  const numeroTotalGeneralNotificadosSifilisMasculinoEntreFechas = calcularPorSexo(arrayTotalGeneralNotificadosSifilisEntreFechas, "M", semanaInicial, semanaFinal)

  const numeroTotalGeneralNotificadosSifilisSdEntreFechas = calcularPorSexo(arrayTotalGeneralNotificadosSifilisEntreFechas, "NA", semanaInicial, semanaFinal)

  //---------------clasificaciones totales
  //confirmados
let arrayConfirmadosTotalGeneralSifilis = [...calcularConfirmadosPorClasificacion("Caso confimado en banco de sangre"), ...calcularConfirmadosPorClasificacion('Caso confirmado de sífilis sin especificar'), ...calcularConfirmadosPorClasificacion('Caso confirmado de sífilis temprana'), ...calcularConfirmadosPorClasificacion('Caso de Sífilis congénita confirmada por laboratorio'), ...calcularConfirmadosPorClasificacion('Caso confirmado de Sífilis')];

arrayConfirmadosTotalGeneralSifilis = arrayConfirmadosTotalGeneralSifilis.filter(el=>el.EVENTO === 'Sífilis' || el.EVENTO === 'Sífilis en personas gestantes' || el.EVENTO === 'Sífilis congénita')

arrayConfirmadosTotalGeneralSifilis = quitarDuplicados(arrayConfirmadosTotalGeneralSifilis)
const numeroConfirmadosTotalGeneralSifilis = arrayConfirmadosTotalGeneralSifilis.length || 0;


  //probables
let arrayProbablesTotalGeneralSifilis = [...calcularConfirmadosPorClasificacion('Caso probable de sífilis sin especificar estadío'), ...calcularConfirmadosPorClasificacion('Caso probable de sífilis temprana'), ...calcularConfirmadosPorClasificacion('Caso probable en banco de sangre'), ...calcularConfirmadosPorClasificacion('Caso probable de sífilis')];

arrayProbablesTotalGeneralSifilis = arrayProbablesTotalGeneralSifilis.filter(el=>el.EVENTO === 'Sífilis' || el.EVENTO === 'Sífilis en personas gestantes' || el.EVENTO === 'Sífilis congénita')

arrayProbablesTotalGeneralSifilis = quitarDuplicados(arrayProbablesTotalGeneralSifilis);

const numeroProbablesTotalGeneralSifilis =  arrayProbablesTotalGeneralSifilis.length || 0;

  //descartados
let arrayDescartadosTotalGeneralSifilis = calcularConfirmadosPorClasificacion('Caso descartado de Sífilis')
arrayDescartadosTotalGeneralSifilis = quitarDuplicados(arrayDescartadosTotalGeneralSifilis);

const numeroDescartadosTotalGeneralSifilis = arrayDescartadosTotalGeneralSifilis.length || 0;

  //---------------clasificaciones totales entre fechas
  //confirmados entre fechas

  let arrayConfirmadosTotalGeneralSifilisEntreFechas = [...calcularConfirmadosPorClasificacionEntreFechas("Caso confimado en banco de sangre", semanaInicial, semanaFinal), ...calcularConfirmadosPorClasificacionEntreFechas('Caso confirmado de sífilis sin especificar', semanaInicial, semanaFinal), ...calcularConfirmadosPorClasificacionEntreFechas('Caso confirmado de sífilis temprana', semanaInicial, semanaFinal), ...calcularConfirmadosPorClasificacionEntreFechas('Caso de Sífilis congénita confirmada por laboratorio', semanaInicial, semanaFinal), ...calcularConfirmadosPorClasificacionEntreFechas('Caso confirmado de Sífilis', semanaInicial, semanaFinal)];

  arrayConfirmadosTotalGeneralSifilisEntreFechas = arrayConfirmadosTotalGeneralSifilisEntreFechas.filter(el=>el.EVENTO === 'Sífilis' || el.EVENTO === 'Sífilis en personas gestantes' || el.EVENTO === 'Sífilis congénita')
  
  arrayConfirmadosTotalGeneralSifilisEntreFechas = quitarDuplicados(arrayConfirmadosTotalGeneralSifilisEntreFechas)
  const numeroConfirmadosTotalGeneralSifilisEntreFechas = arrayConfirmadosTotalGeneralSifilisEntreFechas.length || 0;

  //probables entre fechas

  let arrayProbablesTotalGeneralSifilisEntreFechas = [...calcularConfirmadosPorClasificacionEntreFechas('Caso probable de sífilis sin especificar estadío', semanaInicial, semanaFinal), ...calcularConfirmadosPorClasificacionEntreFechas('Caso probable de sífilis temprana', semanaInicial, semanaFinal), ...calcularConfirmadosPorClasificacionEntreFechas('Caso probable en banco de sangre', semanaInicial, semanaFinal), ...calcularConfirmadosPorClasificacionEntreFechas('Caso probable de sífilis', semanaInicial, semanaFinal)];

arrayProbablesTotalGeneralSifilisEntreFechas = arrayProbablesTotalGeneralSifilisEntreFechas.filter(el=>el.EVENTO === 'Sífilis' || el.EVENTO === 'Sífilis en personas gestantes' || el.EVENTO === 'Sífilis congénita')

arrayProbablesTotalGeneralSifilisEntreFechas = quitarDuplicados(arrayProbablesTotalGeneralSifilisEntreFechas);

const numeroProbablesTotalGeneralSifilisEntreFechas =  arrayProbablesTotalGeneralSifilisEntreFechas.length || 0;


  //descartados entre fechas
  let arrayDescartadosTotalGeneralSifilisEntreFechas = calcularConfirmadosPorClasificacionEntreFechas('Caso descartado de Sífilis', semanaInicial, semanaFinal)
  arrayDescartadosTotalGeneralSifilisEntreFechas = quitarDuplicados(arrayDescartadosTotalGeneralSifilisEntreFechas);
  
  const numeroDescartadosTotalGeneralSifilisEntreFechas = arrayDescartadosTotalGeneralSifilisEntreFechas.length || 0;


  //-------------Departamento de carga
let arrayTotalGeneralSifilisMoron = [...calcularDptoCargaMoron("Sífilis"), ...calcularDptoCargaMoron("Sífilis congénita"), ...calcularDptoCargaMoron("Sífilis en personas gestantes")]
arrayTotalGeneralSifilisMoron = quitarDuplicados(arrayTotalGeneralSifilisMoron)
  const numeroTotalGeneralSifilisMoron = arrayTotalGeneralSifilisMoron.length || 0;


  let arrayTotalGeneralSifilisNoMoron = [...calcularDptoCargaNoMoron("Sífilis"), ...calcularDptoCargaNoMoron("Sífilis congénita"), ...calcularDptoCargaNoMoron("Sífilis en personas gestantes")]
  arrayTotalGeneralSifilisNoMoron = quitarDuplicados(arrayTotalGeneralSifilisNoMoron);
  const numeroTotalGeneralSifilisNoMoron = arrayTotalGeneralSifilisNoMoron.length || 0;

  const porcentajeNotificadosSifilisMoron = Math.round(numeroTotalGeneralSifilisMoron / (numeroTotalGeneralSifilisMoron + numeroTotalGeneralSifilisNoMoron) * 100) || 0

  //-------------Departamento de carga entre fechas

  let arrayTotalGeneralSifilisMoronEntreFechas = [...calcularDptoCargaMoronEntreFechas("Sífilis", semanaInicial, semanaFinal), ...calcularDptoCargaMoronEntreFechas("Sífilis congénita", semanaInicial, semanaFinal), ...calcularDptoCargaMoronEntreFechas("Sífilis en personas gestantes", semanaInicial, semanaFinal)]
arrayTotalGeneralSifilisMoronEntreFechas = quitarDuplicados(arrayTotalGeneralSifilisMoronEntreFechas)
  const numeroTotalGeneralSifilisMoronEntreFechas = arrayTotalGeneralSifilisMoronEntreFechas.length || 0;


  let arrayTotalGeneralSifilisNoMoronEntreFechas = [...calcularDptoCargaNoMoronEntreFechas("Sífilis", semanaInicial, semanaFinal), ...calcularDptoCargaNoMoronEntreFechas("Sífilis congénita", semanaInicial, semanaFinal), ...calcularDptoCargaNoMoronEntreFechas("Sífilis en personas gestantes", semanaInicial, semanaFinal)]
  arrayTotalGeneralSifilisNoMoronEntreFechas = quitarDuplicados(arrayTotalGeneralSifilisNoMoronEntreFechas);
  const numeroTotalGeneralSifilisNoMoronEntreFechas = arrayTotalGeneralSifilisNoMoronEntreFechas.length || 0;

  const porcentajeNotificadosSifilisMoronEntreFechas = Math.round(numeroTotalGeneralSifilisMoronEntreFechas / (numeroTotalGeneralSifilisMoronEntreFechas + numeroTotalGeneralSifilisNoMoronEntreFechas) * 100) || 0



  //---------confirmados femeninos, masculinos y sin datos


 let arrayConfirmadosFemeninosSifilis = arrayConfirmadosTotalGeneralSifilis.filter(el=>el.SEXO === "F")
const numeroConfirmadosFemeninosSifilis = arrayConfirmadosFemeninosSifilis.length || 0;

let arrayConfirmadosMasculinosSifilis = arrayConfirmadosTotalGeneralSifilis.filter(el=>el.SEXO === "M")
const numeroConfirmadosMasculinosSifilis = arrayConfirmadosMasculinosSifilis.length || 0;


let arrayConfirmadosSDSifilis = arrayConfirmadosTotalGeneralSifilis.filter(el=>el.SEXO === "A" || el.SEXO === "NA")
const numeroConfirmadosSDSifilis = arrayConfirmadosSDSifilis.length || 0;



 //---------confirmados femeninos, masculinos y sin datos entre fechas


 const numeroConfirmadosFemeninosSifilisEntreFechas = parseInt(calcularSexoClasificacion("F", "Caso confimado en banco de sangre", semanaInicial, semanaFinal)) + parseInt(calcularSexoClasificacion("F", "Caso confirmado de Sífilis", semanaInicial, semanaFinal))+ parseInt(calcularSexoClasificacion("F", "Caso confirmado de sífilis sin especificar", semanaInicial, semanaFinal)) + parseInt(calcularSexoClasificacion("F", "Caso confirmado de sífilis temprana", semanaInicial, semanaFinal)) + parseInt(calcularSexoClasificacion("F", "Caso de Sífilis congénita confirmada por laboratorio", semanaInicial, semanaFinal))

 const numeroConfirmadosMasculinosSifilisEntreFechas = parseInt(calcularSexoClasificacion("M", "Caso confimado en banco de sangre", semanaInicial, semanaFinal)) + parseInt(calcularSexoClasificacion("M", "Caso confirmado de Sífilis", semanaInicial, semanaFinal))+ parseInt(calcularSexoClasificacion("M", "Caso confirmado de sífilis sin especificar", semanaInicial, semanaFinal)) + parseInt(calcularSexoClasificacion("M", "Caso confirmado de sífilis temprana", semanaInicial, semanaFinal)) + parseInt(calcularSexoClasificacion("M", "Caso de Sífilis congénita confirmada por laboratorio", semanaInicial, semanaFinal))

 const numeroConfirmadosNASifilisEntreFechas = parseInt(calcularSexoClasificacion("NA", "Caso confimado en banco de sangre", semanaInicial, semanaFinal)) + parseInt(calcularSexoClasificacion("NA", "Caso confirmado de Sífilis", semanaInicial, semanaFinal))+ parseInt(calcularSexoClasificacion("NA", "Caso confirmado de sífilis sin especificar", semanaInicial, semanaFinal)) + parseInt(calcularSexoClasificacion("NA", "Caso confirmado de sífilis temprana", semanaInicial, semanaFinal)) + parseInt(calcularSexoClasificacion("NA", "Caso de Sífilis congénita confirmada por laboratorio", semanaInicial, semanaFinal))

 const numeroConfirmadosASifilisEntreFechas = parseInt(calcularSexoClasificacion("A", "Caso confimado en banco de sangre", semanaInicial, semanaFinal)) + parseInt(calcularSexoClasificacion("A", "Caso confirmado de Sífilis", semanaInicial, semanaFinal))+ parseInt(calcularSexoClasificacion("A", "Caso confirmado de sífilis sin especificar", semanaInicial, semanaFinal)) + parseInt(calcularSexoClasificacion("A", "Caso confirmado de sífilis temprana", semanaInicial, semanaFinal)) + parseInt(calcularSexoClasificacion("A", "Caso de Sífilis congénita confirmada por laboratorio", semanaInicial, semanaFinal))

 const numeroConfirmadosSDSifilisEntreFechas = numeroConfirmadosNASifilisEntreFechas + numeroConfirmadosASifilisEntreFechas

 //---------probables femeninas, masculinos 

 let arrayProbablesFemeninosSifilis = arrayProbablesTotalGeneralSifilis.filter(el=>el.SEXO === "F")
 const numeroProbablesFemeninosSifilis = arrayProbablesFemeninosSifilis.length || 0;

 let arrayProbablesMasculinosSifilis = arrayProbablesTotalGeneralSifilis.filter(el=>el.SEXO === "M")
 const numeroProbablesMasculinosSifilis = arrayProbablesMasculinosSifilis.length || 0;

 let arrayProbablesSDSifilis = arrayProbablesTotalGeneralSifilis.filter(el=>el.SEXO === "A" || el.SEXO === "NA")
 const numeroProbablesSDSifilis = arrayProbablesSDSifilis.length || 0;


 //---------probables femeninas, masculinos y sin  entre fechas


 const numeroProbablesFemeninosSifilisEntreFechas = parseInt(calcularSexoClasificacion("F", "Caso probable de Sífilis", semanaInicial, semanaFinal)) + parseInt(calcularSexoClasificacion("F", "Caso probable en banco de sangre", semanaInicial, semanaFinal))+ parseInt(calcularSexoClasificacion("F", "Caso probable de sífilis temprana", semanaInicial, semanaFinal)) + parseInt(calcularSexoClasificacion("F", "Caso probable de sífilis sin especificar estadío", semanaInicial, semanaFinal))

 const numeroProbablesMasculinosSifilisEntreFechas = parseInt(calcularSexoClasificacion("M", "Caso probable de Sífilis", semanaInicial, semanaFinal)) + parseInt(calcularSexoClasificacion("M", "Caso probable en banco de sangre", semanaInicial, semanaFinal))+ parseInt(calcularSexoClasificacion("M", "Caso probable de sífilis temprana", semanaInicial, semanaFinal)) + parseInt(calcularSexoClasificacion("M", "Caso probable de sífilis sin especificar estadío", semanaInicial, semanaFinal))

 const numeroProbablesNASifilisEntreFechas = parseInt(calcularSexoClasificacion("NA", "Caso probable de Sífilis", semanaInicial, semanaFinal)) + parseInt(calcularSexoClasificacion("NA", "Caso probable en banco de sangre", semanaInicial, semanaFinal))+ parseInt(calcularSexoClasificacion("NA", "Caso probable de sífilis temprana", semanaInicial, semanaFinal)) + parseInt(calcularSexoClasificacion("NA", "Caso probable de sífilis sin especificar estadío", semanaInicial, semanaFinal))

 const numeroProbablesASifilisEntreFechas = parseInt(calcularSexoClasificacion("A", "Caso probable de Sífilis", semanaInicial, semanaFinal)) + parseInt(calcularSexoClasificacion("A", "Caso probable en banco de sangre", semanaInicial, semanaFinal))+ parseInt(calcularSexoClasificacion("A", "Caso probable de sífilis temprana", semanaInicial, semanaFinal)) + parseInt(calcularSexoClasificacion("A", "Caso probable de sífilis sin especificar estadío", semanaInicial, semanaFinal))

 const numeroProbablesSDSifilisEntreFechas = numeroProbablesNASifilisEntreFechas + numeroProbablesASifilisEntreFechas

 //---Edad x sexo
 const sifilisFmenor1m = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "F", "Neonato (hasta 28 dneas)");
 const sifilisF2m12m = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "F", "Posneonato (29 hasta 365 dneas)");
 const sifilisF13m24m = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "F", "De 13 a 24 meses");
 const sifilisF2a4a = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "F", "De 2 a 4 anaos");
 const sifilisF5a9a = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "F", "De 5 a 9 anaos");
 const sifilisF10a14a = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "F", "De 10 a 14 anaos");
 const sifilisF15a19a = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "F", "De 15 a 19 anaos");
 const sifilisF20a24a = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "F", "De 20 a 24 anaos");
 const sifilisF25a34a = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "F", "De 25 a 34 anaos");
 const sifilisF35a44a = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "F", "De 35 a 44 anaos");
 const sifilisF45a65a = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "F", "De 45 a 65 anaos");
 const sifilisFmay65 = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "F", "Mayores de 65 anaos");

 const sifilisMmenor1m = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "M", "Neonato (hasta 28 dneas)");
 const sifilisM2m12m = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "M", "Posneonato (29 hasta 365 dneas)");
 const sifilisM13m24m = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "M", "De 13 a 24 meses");
 const sifilisM2a4a = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "M", "De 2 a 4 anaos");
 const sifilisM5a9a = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "M", "De 5 a 9 anaos");
 const sifilisM10a14a = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "M", "De 10 a 14 anaos");
 const sifilisM15a19a = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "M", "De 15 a 19 anaos");
 const sifilisM20a24a = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "M", "De 20 a 24 anaos");
 const sifilisM25a34a = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "M", "De 25 a 34 anaos");
 const sifilisM35a44a = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "M", "De 35 a 44 anaos");
 const sifilisM45a65a = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "M", "De 45 a 65 anaos");
 const sifilisMmay65 = calcularEdadSexo(arrayTotalGeneralNotificadosSifilis, "M", "Mayores de 65 anaos");

 const sifilisSexoEdad = [sifilisFmenor1m, sifilisF2m12m, sifilisF13m24m, sifilisF2a4a, sifilisF5a9a, sifilisF10a14a, sifilisF15a19a, sifilisF20a24a, sifilisF25a34a, sifilisF35a44a, sifilisF45a65a, sifilisFmay65, sifilisMmenor1m, sifilisM2m12m, sifilisM13m24m, sifilisM2a4a, sifilisM5a9a, sifilisM10a14a, sifilisM15a19a, sifilisM20a24a, sifilisM25a34a, sifilisM35a44a, sifilisM45a65a, sifilisMmay65]

//notificados por semana epidemiológica

const sifilisXse = [
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,1), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,2), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,3), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,4), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,5), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,6), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,7), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,8), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,9), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,10), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,11), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,12), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,13), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,14), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,15),
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,16),
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,17), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,18), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,19), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,20), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,21), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,22), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,23), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,24), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,25),
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,26), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,27), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,28), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,29), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,30),
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,31),
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,32),
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,33), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,34), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,35), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,36), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,37), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,38), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,39), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,40), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,41), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,42), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,43), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,44), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,45), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,46), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,47),
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,48), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,49), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,50), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,51), 
  calcularNotificadosXSE(arrayTotalNotificadosSifilis,52),
]


  //------------HIV----------------------------------------------------------------------------
  //-----------arrays totales
  let arrayTotalNotificadosHiv = calcularTotalNotificados("VIH");
  arrayTotalNotificadosHiv = quitarDuplicados(arrayTotalNotificadosHiv)
  let arrayTotalNotificadosHivPerinatal = calcularTotalNotificados("VIH - Expuesto perinatal");
  arrayTotalNotificadosHivPerinatal = quitarDuplicados(arrayTotalNotificadosHivPerinatal)
  let arrayTotalNotificadosHivEmbarazo = calcularTotalNotificados("VIH en embarazo");
  arrayTotalNotificadosHivEmbarazo = quitarDuplicados(arrayTotalNotificadosHivEmbarazo)

  let arrayTotalGeneralNotificadosHiv = [...arrayTotalNotificadosHiv, ...arrayTotalNotificadosHivPerinatal, ...arrayTotalNotificadosHivEmbarazo]
  arrayTotalGeneralNotificadosHiv = quitarDuplicados(arrayTotalGeneralNotificadosHiv)


  //-----------arrays totales entre fechas
  let arrayTotalNotificadosHivEntreFechas = calcularTotalNotificadosEntreFechas("VIH", semanaInicial, semanaFinal);
  arrayTotalNotificadosHivEntreFechas = quitarDuplicados(arrayTotalNotificadosHivEntreFechas)
  let arrayTotalNotificadosHivPerinatalEntreFechas = calcularTotalNotificadosEntreFechas("VIH - Expuesto perinatal", semanaInicial, semanaFinal);
  arrayTotalNotificadosHivPerinatalEntreFechas = quitarDuplicados(arrayTotalNotificadosHivPerinatalEntreFechas)
  let arrayTotalNotificadosHivEmbarazoEntreFechas = calcularTotalNotificadosEntreFechas("VIH en embarazo", semanaInicial, semanaFinal);
  arrayTotalNotificadosHivEmbarazoEntreFechas = quitarDuplicados(arrayTotalNotificadosHivEmbarazoEntreFechas)

  let arrayTotalGeneralNotificadosHivEntreFechas = [...arrayTotalNotificadosHivEntreFechas, ...arrayTotalNotificadosHivPerinatalEntreFechas, ...arrayTotalNotificadosHivEmbarazoEntreFechas]
  arrayTotalGeneralNotificadosHivEntreFechas = quitarDuplicados(arrayTotalGeneralNotificadosHivEntreFechas)


  //------------valores totales--
  const numeroTotalNotificadosHiv = arrayTotalNotificadosHiv.length || 0;
  const numeroTotalNotificadosHivPerinatal = arrayTotalNotificadosHivPerinatal.length || 0;
  const numeroTotalNotificadosHivEmbarazo = arrayTotalNotificadosHivEmbarazo.length || 0;

  const numeroTotalGeneralNotificadosHiv = arrayTotalGeneralNotificadosHiv.length || 0;

   //------------valores totales--entre fechas
   const numeroTotalNotificadosHivEntreFechas = arrayTotalNotificadosHivEntreFechas.length || 0;
   const numeroTotalNotificadosHivPerinatalEntreFechas = arrayTotalNotificadosHivPerinatalEntreFechas.length || 0;
   const numeroTotalNotificadosHivEmbarazoEntreFechas = arrayTotalNotificadosHivEmbarazoEntreFechas.length || 0;
 
   const numeroTotalGeneralNotificadosHivEntreFechas = arrayTotalGeneralNotificadosHivEntreFechas.length || 0;

  //------------por sexo
  const numeroTotalGeneralNotificadosHivFemenino = calcularPorSexo(arrayTotalGeneralNotificadosHiv, "F");
  const numeroTotalGeneralNotificadosHivMasculino = calcularPorSexo(arrayTotalGeneralNotificadosHiv, "M");
  const numeroTotalGeneralNotificadosHivSd = calcularPorSexo(arrayTotalGeneralNotificadosHiv, "NA")

  //------------por sexo entre fechas
  const numeroTotalGeneralNotificadosHivFemeninoEntreFechas = calcularPorSexo(arrayTotalGeneralNotificadosHivEntreFechas, "F");
  const numeroTotalGeneralNotificadosHivMasculinoEntreFechas = calcularPorSexo(arrayTotalGeneralNotificadosHivEntreFechas, "M");
  const numeroTotalGeneralNotificadosHivSdEntreFechas = calcularPorSexo(arrayTotalGeneralNotificadosHivEntreFechas, "NA")

  //---------------clasificaciones totales
  //confirmados
let arrayConfirmadosTotalGeneralHiv = calcularConfirmadosPorClasificacion('Caso confirmado de VIH')
arrayConfirmadosTotalGeneralHiv = quitarDuplicados(arrayConfirmadosTotalGeneralHiv)
const numeroConfirmadosTotalGeneralHiv = arrayConfirmadosTotalGeneralHiv.length || 0;

  //probables
   let numeroProbablesTotalGeneralHiv = [...calcularTotalNotificados("VIH"), ...calcularTotalNotificados("VIH - Expuesto perinatal"), ...calcularTotalNotificados("VIH en embarazo")].filter(el=> el.CLASIFICACION_MANUAL === "Caso probable de infección por VIH").length || 0

  //descartados
let arrayDescartadosTotalGeneralHiv = calcularConfirmadosPorClasificacion('Caso descartado de VIH')
arrayDescartadosTotalGeneralHiv = quitarDuplicados(arrayDescartadosTotalGeneralHiv)
const numeroDescartadosTotalGeneralHiv = arrayDescartadosTotalGeneralHiv.length || 0

  //---------------clasificaciones totales entre fechas
  //confirmados entre fechas

  let arrayConfirmadosTotalGeneralHivEntreFechas = calcularConfirmadosPorClasificacionEntreFechas('Caso confirmado de VIH', semanaInicial, semanaFinal)
arrayConfirmadosTotalGeneralHivEntreFechas = quitarDuplicados(arrayConfirmadosTotalGeneralHivEntreFechas)
const numeroConfirmadosTotalGeneralHivEntreFechas = arrayConfirmadosTotalGeneralHivEntreFechas.length || 0;

  //probables entre fechas

  let numeroProbablesTotalGeneralHivEntreFechas = [...calcularTotalNotificadosEntreFechas("VIH", semanaInicial, semanaFinal), ...calcularTotalNotificadosEntreFechas("VIH - Expuesto perinatal", semanaInicial, semanaFinal), ...calcularTotalNotificadosEntreFechas("VIH en embarazo", semanaInicial, semanaFinal)].filter(el=> el.CLASIFICACION_MANUAL === "Caso probable de infección por VIH").length || 0

  //descartados entre fechas
  let arrayDescartadosTotalGeneralHivEntreFechas = calcularConfirmadosPorClasificacionEntreFechas('Caso descartado de VIH', semanaInicial, semanaFinal)
  arrayDescartadosTotalGeneralHivEntreFechas = quitarDuplicados(arrayDescartadosTotalGeneralHivEntreFechas)
  const numeroDescartadosTotalGeneralHivEntreFechas = arrayDescartadosTotalGeneralHivEntreFechas.length || 0


  //-------------Departamento de carga
let arrayTotalGeneralHivMoron = [...calcularDptoCargaMoron("VIH"), ...calcularDptoCargaMoron("VIH - Expuesto perinatal"), ...calcularDptoCargaMoron("VIH en embarazo")]
arrayTotalGeneralHivMoron = quitarDuplicados(arrayTotalGeneralHivMoron)
  const numeroTotalGeneralHivMoron = arrayTotalGeneralHivMoron.length || 0

let arrayTotalGeneralHivNoMoron = [...calcularDptoCargaNoMoron("VIH"), ...calcularDptoCargaNoMoron("VIH - Expuesto perinatal"), ...calcularDptoCargaNoMoron("VIH en embarazo")]
arrayTotalGeneralHivNoMoron = quitarDuplicados(arrayTotalGeneralHivNoMoron)
  const numeroTotalGeneralHivNoMoron = arrayTotalGeneralHivNoMoron.length || 0
  const porcentajeNotificadosHivMoron = Math.round(numeroTotalGeneralHivMoron / (numeroTotalGeneralHivMoron + numeroTotalGeneralHivNoMoron) * 100) || 0

//-------------Departamento de carga entre fechas
let arrayTotalGeneralHivMoronEntreFechas = [...calcularDptoCargaMoronEntreFechas("VIH", semanaInicial, semanaFinal), ...calcularDptoCargaMoronEntreFechas("VIH - Expuesto perinatal", semanaInicial, semanaFinal), ...calcularDptoCargaMoronEntreFechas("VIH en embarazo", semanaInicial, semanaFinal)]
arrayTotalGeneralHivMoronEntreFechas = quitarDuplicados(arrayTotalGeneralHivMoronEntreFechas)
  const numeroTotalGeneralHivMoronEntreFechas = arrayTotalGeneralHivMoronEntreFechas.length || 0

let arrayTotalGeneralHivNoMoronEntreFechas = [...calcularDptoCargaNoMoronEntreFechas("VIH", semanaInicial, semanaFinal), ...calcularDptoCargaNoMoronEntreFechas("VIH - Expuesto perinatal", semanaInicial, semanaFinal), ...calcularDptoCargaNoMoronEntreFechas("VIH en embarazo", semanaInicial, semanaFinal)]
arrayTotalGeneralHivNoMoronEntreFechas = quitarDuplicados(arrayTotalGeneralHivNoMoronEntreFechas)
  const numeroTotalGeneralHivNoMoronEntreFechas = arrayTotalGeneralHivNoMoronEntreFechas.length || 0
  const porcentajeNotificadosHivMoronEntreFechas = Math.round(numeroTotalGeneralHivMoronEntreFechas / (numeroTotalGeneralHivMoronEntreFechas + numeroTotalGeneralHivNoMoronEntreFechas) * 100) || 0

 //---Edad x sexo
 const hivFmenor1m = calcularEdadSexo(arrayTotalNotificadosHiv, "F", "Neonato (hasta 28 dneas)");
 const hivF2m12m = calcularEdadSexo(arrayTotalNotificadosHiv, "F", "Posneonato (29 hasta 365 dneas)");
 const hivF13m24m = calcularEdadSexo(arrayTotalNotificadosHiv, "F", "De 13 a 24 meses");
 const hivF2a4a = calcularEdadSexo(arrayTotalNotificadosHiv, "F", "De 2 a 4 anaos");
 const hivF5a9a = calcularEdadSexo(arrayTotalNotificadosHiv, "F", "De 5 a 9 anaos");
 const hivF10a14a = calcularEdadSexo(arrayTotalNotificadosHiv, "F", "De 10 a 14 anaos");
 const hivF15a19a = calcularEdadSexo(arrayTotalNotificadosHiv, "F", "De 15 a 19 anaos");
 const hivF20a24a = calcularEdadSexo(arrayTotalNotificadosHiv, "F", "De 20 a 24 anaos");
 const hivF25a34a = calcularEdadSexo(arrayTotalNotificadosHiv, "F", "De 25 a 34 anaos");
 const hivF35a44a = calcularEdadSexo(arrayTotalNotificadosHiv, "F", "De 35 a 44 anaos");
 const hivF45a65a = calcularEdadSexo(arrayTotalNotificadosHiv, "F", "De 45 a 65 anaos");
 const hivFmay65 = calcularEdadSexo(arrayTotalNotificadosHiv, "F", "Mayores de 65 anaos");

 const hivMmenor1m = calcularEdadSexo(arrayTotalNotificadosHiv, "M", "Neonato (hasta 28 dneas)");
 const hivM2m12m = calcularEdadSexo(arrayTotalNotificadosHiv, "M", "Posneonato (29 hasta 365 dneas)");
 const hivM13m24m = calcularEdadSexo(arrayTotalNotificadosHiv, "M", "De 13 a 24 meses");
 const hivM2a4a = calcularEdadSexo(arrayTotalNotificadosHiv, "M", "De 2 a 4 anaos");
 const hivM5a9a = calcularEdadSexo(arrayTotalNotificadosHiv, "M", "De 5 a 9 anaos");
 const hivM10a14a = calcularEdadSexo(arrayTotalNotificadosHiv, "M", "De 10 a 14 anaos");
 const hivM15a19a = calcularEdadSexo(arrayTotalNotificadosHiv, "M", "De 15 a 19 anaos");
 const hivM20a24a = calcularEdadSexo(arrayTotalNotificadosHiv, "M", "De 20 a 24 anaos");
 const hivM25a34a = calcularEdadSexo(arrayTotalNotificadosHiv, "M", "De 25 a 34 anaos");
 const hivM35a44a = calcularEdadSexo(arrayTotalNotificadosHiv, "M", "De 35 a 44 anaos");
 const hivM45a65a = calcularEdadSexo(arrayTotalNotificadosHiv, "M", "De 45 a 65 anaos");
 const hivMmay65 = calcularEdadSexo(arrayTotalNotificadosHiv, "M", "Mayores de 65 anaos");

 const hivSexoEdad = [hivFmenor1m, hivF2m12m, hivF13m24m, hivF2a4a, hivF5a9a, hivF10a14a, hivF15a19a, hivF20a24a, hivF25a34a, hivF35a44a, hivF45a65a, hivFmay65, hivMmenor1m, hivM2m12m, hivM13m24m, hivM2a4a, hivM5a9a, hivM10a14a, hivM15a19a, hivM20a24a, hivM25a34a, hivM35a44a, hivM45a65a, hivMmay65]

 const hivXse = [
  calcularNotificadosXSE(arrayTotalNotificadosHiv,1), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,2), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,3), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,4), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,5), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,6), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,7), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,8), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,9), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,10), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,11), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,12), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,13), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,14), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,15),
  calcularNotificadosXSE(arrayTotalNotificadosHiv,16),
  calcularNotificadosXSE(arrayTotalNotificadosHiv,17), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,18), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,19), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,20), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,21), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,22), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,23), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,24), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,25),
  calcularNotificadosXSE(arrayTotalNotificadosHiv,26), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,27), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,28), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,29), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,30),
  calcularNotificadosXSE(arrayTotalNotificadosHiv,31),
  calcularNotificadosXSE(arrayTotalNotificadosHiv,32),
  calcularNotificadosXSE(arrayTotalNotificadosHiv,33), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,34), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,35), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,36), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,37), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,38), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,39), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,40), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,41), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,42), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,43), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,44), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,45), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,46), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,47),
  calcularNotificadosXSE(arrayTotalNotificadosHiv,48), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,49), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,50), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,51), 
  calcularNotificadosXSE(arrayTotalNotificadosHiv,52),
]




  //-------Tuberculosis----------------------------------------------------------------------
  //-----------array total
  let arrayTotalNotificadosTuberculosis = calcularTotalNotificados("Tuberculosis");
  arrayTotalNotificadosTuberculosis = quitarDuplicados(arrayTotalNotificadosTuberculosis);

//entre fechas
  let arrayTotalNotificadosTuberculosisEntreFechas = calcularTotalNotificadosEntreFechas("Tuberculosis", semanaInicial, semanaFinal);
arrayTotalNotificadosTuberculosisEntreFechas = quitarDuplicados(arrayTotalNotificadosTuberculosisEntreFechas);

  //------------valores totales
  const numeroTotalNotificadosTuberculosis = arrayTotalNotificadosTuberculosis.length || 0;
  //entre fechas
  const numeroTotalNotificadosTuberculosisEntreFechas = arrayTotalNotificadosTuberculosisEntreFechas.length ||0;

  //------------por sexo
  const numeroTotalNotificadosTuberculosisFemenino = calcularPorSexo(arrayTotalNotificadosTuberculosis, "F")
  const numeroTotalNotificadosTuberculosisMasculino = calcularPorSexo(arrayTotalNotificadosTuberculosis, "M")
  const numeroTotalNotificadosTuberculosisNA = calcularPorSexo(arrayTotalNotificadosTuberculosis, "NA")
  const numeroTotalNotificadosTuberculosisA = calcularPorSexo(arrayTotalNotificadosTuberculosis, "A")
  const numeroTotalNotificadosTuberculosisSd = parseInt(numeroTotalNotificadosTuberculosisNA) + parseInt(numeroTotalNotificadosTuberculosisA)
//entre fechas
  const numeroTotalNotificadosTuberculosisFemeninoEntreFechas = calcularPorSexo(arrayTotalNotificadosTuberculosisEntreFechas, "F", semanaInicial, semanaFinal)
  const numeroTotalNotificadosTuberculosisMasculinoEntreFechas = calcularPorSexo(arrayTotalNotificadosTuberculosisEntreFechas, "M", semanaInicial, semanaFinal)
  const numeroTotalNotificadosTuberculosisNAEntreFechas = calcularPorSexo(arrayTotalNotificadosTuberculosisEntreFechas, "NA" , semanaInicial, semanaFinal)
  const numeroTotalNotificadosTuberculosisAEntreFechas = calcularPorSexo(arrayTotalNotificadosTuberculosisEntreFechas, "A", semanaInicial, semanaFinal)
  const numeroTotalNotificadosTuberculosisSdEntreFechas = parseInt(numeroTotalNotificadosTuberculosisNAEntreFechas) + parseInt(numeroTotalNotificadosTuberculosisAEntreFechas)

  //---------------clasificaciones totales
  //confirmados
let arrayBaciloscopiaPositiva = calcularConfirmadosPorClasificacion("Baciloscopía positiva");
let arrayComplejoTBC = calcularConfirmadosPorClasificacion("Complejo Mycobacterium tuberculosis");
let arrayMicobacterium = calcularConfirmadosPorClasificacion("Mycobacterium tuberculosis");
let arrayHistopatologiaSugestiva = calcularConfirmadosPorClasificacion("Histopatologia sugestiva");

let arrayConfirmadosTbc = [...arrayBaciloscopiaPositiva, ...arrayComplejoTBC, ...arrayMicobacterium, ...arrayHistopatologiaSugestiva];

arrayConfirmadosTbc = quitarDuplicados(arrayConfirmadosTbc);

  const numeroConfirmadosTotalTuberculosis = arrayConfirmadosTbc.length || 0;

  //descartados
  let arrayDescartadosTotalTuberculosis = calcularDescartadosTuberculosis()
  arrayDescartadosTotalTuberculosis = quitarDuplicados(arrayDescartadosTotalTuberculosis);

  const numeroDescartadosTotalTuberculosis = arrayDescartadosTotalTuberculosis.length || 0;

  //embarazadas
let arrayNotificadosTbcEmbarazadas = arrayTotalNotificadosTuberculosis.filter(el=>el.EMBARAZADA == "SI")
const numeroEmbarazadasNotificadasTotalTuberculosis = arrayNotificadosTbcEmbarazadas.length || 0

let arrayConfirmadosTbcEmbarazadas = arrayConfirmadosTbc.filter(el=>el.EMBARAZADA == "SI")
const numeroEmbarazadasConfirmadasTuberculosis = arrayConfirmadosTbcEmbarazadas.length || 0;

let arrayDescartadasTbcEmbarazadas = arrayDescartadosTotalTuberculosis.filter(el=>el.EMBARAZADA == "SI")
  const numeroEmbarazadasDescartadasTuberculosis = arrayDescartadasTbcEmbarazadas.length || 0;

  //En estudio
  const arrayTbcEstudio = calcularClasificacionManualPorEvento("Tuberculosis", "En estudio")
  const arrayTbcMuestraNoApta = calcularClasificacionManualPorEvento("Tuberculosis", "Muestra no apta para el diagnostico")
  let arrayEnEstudioTbc = [...arrayTbcEstudio, ...arrayTbcMuestraNoApta];
  arrayEnEstudioTbc = quitarDuplicados(arrayEnEstudioTbc)
  const numeroEnEstudioTotalTuberculosis  = arrayEnEstudioTbc.length || 0;

  //entre fechas-----------
  //confirmados
  const numeroConfirmadosTotalTuberculosisEntreFechas = calcularConfirmadosTuberculosisEntreFechas("Baciloscopía positiva", semanaInicial, semanaFinal) + calcularConfirmadosTuberculosisEntreFechas("Complejo Mycobacterium tuberculosis", semanaInicial, semanaFinal) + calcularConfirmadosTuberculosisEntreFechas("Mycobacterium tuberculosis", semanaInicial, semanaFinal) + calcularConfirmadosTuberculosisEntreFechas("Histopatologia sugestiva", semanaInicial, semanaFinal)

  //descartados
  const numeroDescartadosTotalTuberculosisEntreFechas = calcularDescartadosTuberculosis(semanaInicial, semanaFinal)

  //embarazadas

  const numeroEmbarazadasNotificadasTotalTuberculosisEntreFechas = calcularEventoEnEmbarazo("Tuberculosis", semanaInicial, semanaFinal)
  const numeroEmbarazadasConfirmadasTuberculosisEntreFechas = calcularConfirmadosEmbarazoTuberculosis(semanaInicial, semanaFinal)
  const numeroEmbarazadasDescartadasTuberculosisEntreFechas = calcularDescartadosEmbarazoTuberculosis(semanaInicial, semanaFinal)

  //En estudio
  const numeroEnEstudioTotalTuberculosisEntreFechas  = arrayEnEstudioTbc.length || 0; //esto hay que arreglarlo

  //-------------Departamento de carga
  let arrayTotalGeneralTuberculosisMoron = calcularDptoCargaMoron("Tuberculosis");
  arrayTotalGeneralTuberculosisMoron = quitarDuplicados(arrayTotalGeneralTuberculosisMoron);
  const numeroTotalGeneralTuberculosisMoron = arrayTotalGeneralTuberculosisMoron.length || 0;

  let arrayTotalGeneralTuberculosisNoMoron = calcularDptoCargaNoMoron("Tuberculosis");
  arrayTotalGeneralTuberculosisNoMoron = quitarDuplicados(arrayTotalGeneralTuberculosisNoMoron);
  const numeroTotalGeneralTuberculosisNoMoron = arrayTotalGeneralTuberculosisNoMoron.length || 0;

  const porcentajeNotificadosTuberculosisMoron = Math.round(numeroTotalGeneralTuberculosisMoron / (numeroTotalGeneralTuberculosisNoMoron + numeroTotalGeneralTuberculosisMoron) * 100) || 0

  //entre fechas
  const numeroTotalGeneralTuberculosisMoronEntreFechas = calcularDptoCargaMoron("Tuberculosis",semanaInicial, semanaFinal)

  const numeroTotalGeneralTuberculosisNoMoronEntreFechas = calcularDptoCargaNoMoron("Tuberculosis", semanaInicial, semanaFinal)

  const porcentajeNotificadosTuberculosisMoronEntreFechas = Math.round(numeroTotalGeneralTuberculosisMoronEntreFechas / (numeroTotalGeneralTuberculosisNoMoronEntreFechas + numeroTotalGeneralTuberculosisMoronEntreFechas) * 100) || 0


  //Resultados

   const numeroTotalPositivosTuberculosis = calcularResultadoTuberculosis("Positivo") + calcularResultadoTuberculosis("Positivo (+)") + calcularResultadoTuberculosis("Positivo (++)") + calcularResultadoTuberculosis("Positivo (+++)") + calcularResultadoTuberculosis("Positivo (1 a 19 colonias)")
  
   const numeroTotalNegativosTuberculosis = calcularResultadoTuberculosis("Negativo") 

   const numeroTotalSinResultadoTuberculosis = calcularResultadoTuberculosis("NA") 


   //---Edad x sexo
  const tuberculosisFmenor1m = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "F", "Neonato (hasta 28 dneas)");
  const tuberculosisF2m12m = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "F", "Posneonato (29 hasta 365 dneas)");
  const tuberculosisF13m24m = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "F", "De 13 a 24 meses");
  const tuberculosisF2a4a = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "F", "De 2 a 4 anaos");
  const tuberculosisF5a9a = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "F", "De 5 a 9 anaos");
  const tuberculosisF10a14a = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "F", "De 10 a 14 anaos");
  const tuberculosisF15a19a = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "F", "De 15 a 19 anaos");
  const tuberculosisF20a24a = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "F", "De 20 a 24 anaos");
  const tuberculosisF25a34a = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "F", "De 25 a 34 anaos");
  const tuberculosisF35a44a = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "F", "De 35 a 44 anaos");
  const tuberculosisF45a65a = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "F", "De 45 a 65 anaos");
  const tuberculosisFmay65 = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "F", "Mayores de 65 anaos");
 
  const tuberculosisMmenor1m = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "M", "Neonato (hasta 28 dneas)");
  const tuberculosisM2m12m = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "M", "Posneonato (29 hasta 365 dneas)");
  const tuberculosisM13m24m = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "M", "De 13 a 24 meses");
  const tuberculosisM2a4a = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "M", "De 2 a 4 anaos");
  const tuberculosisM5a9a = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "M", "De 5 a 9 anaos");
  const tuberculosisM10a14a = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "M", "De 10 a 14 anaos");
  const tuberculosisM15a19a = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "M", "De 15 a 19 anaos");
  const tuberculosisM20a24a = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "M", "De 20 a 24 anaos");
  const tuberculosisM25a34a = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "M", "De 25 a 34 anaos");
  const tuberculosisM35a44a = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "M", "De 35 a 44 anaos");
  const tuberculosisM45a65a = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "M", "De 45 a 65 anaos");
  const tuberculosisMmay65 = calcularEdadSexo(arrayTotalNotificadosTuberculosis, "M", "Mayores de 65 anaos");

  const tuberculosisSexoEdad = [tuberculosisFmenor1m, tuberculosisF2m12m, tuberculosisF13m24m, tuberculosisF2a4a, tuberculosisF5a9a, tuberculosisF10a14a, tuberculosisF15a19a, tuberculosisF20a24a, tuberculosisF25a34a, tuberculosisF35a44a, tuberculosisF45a65a, tuberculosisFmay65, tuberculosisMmenor1m, tuberculosisM2m12m, tuberculosisM13m24m, tuberculosisM2a4a, tuberculosisM5a9a, tuberculosisM10a14a, tuberculosisM15a19a, tuberculosisM20a24a, tuberculosisM25a34a, tuberculosisM35a44a, tuberculosisM45a65a, tuberculosisMmay65]

//notificados por semana epidemiológica

const tuberculosisXse = [
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,1), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,2), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,3), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,4), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,5), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,6), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,7), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,8), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,9), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,10), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,11), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,12), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,13), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,14), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,15),
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,16),
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,17), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,18), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,19), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,20), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,21), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,22), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,23), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,24), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,25),
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,26), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,27), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,28), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,29), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,30),
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,31),
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,32),
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,33), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,34), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,35), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,36), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,37), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,38), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,39), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,40), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,41), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,42), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,43), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,44), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,45), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,46), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,47),
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,48), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,49), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,50), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,51), 
  calcularNotificadosXSE(arrayTotalNotificadosTuberculosis,52),
]



  //-------------Dengue---------------------------------------------------------------------
  //-------------array total
  let arrayTotalNotificadosDengue = calcularTotalNotificados("Dengue");
  arrayTotalNotificadosDengue = quitarDuplicados(arrayTotalNotificadosDengue);

//entre fechas
let arrayTotalNotificadosDengueEntreFechas = calcularTotalNotificadosEntreFechas("Dengue" , semanaInicial, semanaFinal);
arrayTotalNotificadosDengueEntreFechas = quitarDuplicados(arrayTotalNotificadosDengueEntreFechas)

  //------------valores totales
  const numeroTotalNotificadosDengue = arrayTotalNotificadosDengue.length || 0;
//entre fechas
const numeroTotalNotificadosDengueEntreFechas = arrayTotalNotificadosDengueEntreFechas.length || 0;

  //--------------por sexo
  const numeroTotalNotificadosDengueFemenino = calcularPorSexo(arrayTotalNotificadosDengue, "F");
  const numeroTotalNotificadosDengueMasculino = calcularPorSexo(arrayTotalNotificadosDengue, "M");
  const numeroTotalNotificadosDengueSd = calcularPorSexo(arrayTotalNotificadosDengue, "NA")

  //entre fechas
  const numeroTotalNotificadosDengueFemeninoEntreFechas = calcularPorSexo(arrayTotalNotificadosDengue, "F", semanaInicial, semanaFinal);
  const numeroTotalNotificadosDengueMasculinoEntreFechas = calcularPorSexo(arrayTotalNotificadosDengue, "M", semanaInicial, semanaFinal);
  const numeroTotalNotificadosDengueSdEntreFechas = calcularPorSexo(arrayTotalNotificadosDengue, "NA", semanaInicial, semanaFinal)


  //---------------clasificaciones totales
  //confirmados
  let arrayConfirmadosTotalDengue = calcularConfirmadosDengue()

  arrayConfirmadosTotalDengue = quitarDuplicados(arrayConfirmadosTotalDengue)

  let numeroConfirmadosTotalDengue = arrayConfirmadosTotalDengue.length || 0
  //probables
  let arrayProbablesTotalDengue = calcularClasificacionManualPorEvento("Dengue", "Caso probable")
  arrayProbablesTotalDengue = quitarDuplicados(arrayProbablesTotalDengue)
  let numeroProbablesTotalDengue = arrayProbablesTotalDengue.length || 0;
  //descartados
  let arrayDescartadosTotalDengue = calcularDescartadosDengue()
  arrayDescartadosTotalDengue = quitarDuplicados(arrayDescartadosTotalDengue)
  let numeroDescartadosTotalDengue = arrayDescartadosTotalDengue.length || 0

  //sospechosos
  let arraySospechososTotalDengue = calcularSospechososDengue()
  arraySospechososTotalDengue = quitarDuplicados(arraySospechososTotalDengue)
  let numeroSospechososTotalDengue = arraySospechososTotalDengue.length || 0

//entre fechas
//confirmados
const numeroConfirmadosTotalDengueEntreFechas = calcularConfirmadosDengueEntreFechas(semanaInicial, semanaFinal)

//probables
const numeroProbablesTotalDengueEntreFechas = parseInt(calcularClasificacionManualPorEventoEntreFechas("Dengue", "Caso probable", semanaInicial, semanaFinal).length) || 0

//descartados
const numeroDescartadosTotalDengueEntreFechas = calcularDescartadosDengueEntreFechas(semanaInicial, semanaFinal)

//sospechosos
const numeroSospechososTotalDengueEntreFechas = calcularSospechososDengueEntreFechas(semanaInicial, semanaFinal)


  //embarazadas
  let arrayEmbarazadasNotificadoTotalDengue = calcularEventoEnEmbarazo("Dengue");
  arrayEmbarazadasNotificadoTotalDengue = quitarDuplicados(arrayEmbarazadasNotificadoTotalDengue)
let numeroEmbarazadasNotificadoTotalDengue = arrayEmbarazadasNotificadoTotalDengue.length || 0;

  let arrayEmbarazadasConfirmadasDengue = calcularConfirmadosEmbarazoDengue();
  arrayEmbarazadasConfirmadasDengue = quitarDuplicados(arrayEmbarazadasConfirmadasDengue)
let numeroEmbarazadasConfirmadasDengue = arrayEmbarazadasConfirmadasDengue.length || 0;

  let arrayEmbarazadasDescartadasDengue = calcularDescartadosEmbarazoDengue()
  arrayEmbarazadasDescartadasDengue = quitarDuplicados(arrayEmbarazadasDescartadasDengue)
  let numeroEmbarazadasDescartadasDengue = arrayEmbarazadasDescartadasDengue.length || 0;

  //embarazadas entre fechas
  const numeroEmbarazadasNotificadoTotalDengueEntreFechas = calcularEventoEnEmbarazoEntreFechas("Dengue",semanaInicial, semanaFinal)
  const numeroEmbarazadasConfirmadasDengueEntreFechas = calcularConfirmadosEmbarazoDengueEntreFechas(semanaInicial, semanaFinal)
  const numeroEmbarazadasDescartadasDengueEntreFechas = calcularDescartadosEmbarazoDengueEntreFechas(semanaInicial, semanaFinal)

  //-------------Departamento de carga
  let arrayTotalGeneralDengueMoron = calcularDptoCargaMoron("Dengue")
  arrayTotalGeneralDengueMoron = quitarDuplicados(arrayTotalGeneralDengueMoron)
  let numeroTotalGeneralDengueMoron = arrayTotalGeneralDengueMoron.length || 0;

  let arrayTotalGeneralDengueNoMoron = calcularDptoCargaNoMoron("Dengue");
  arrayTotalGeneralDengueNoMoron = quitarDuplicados(arrayTotalGeneralDengueNoMoron)
  let numeroTotalGeneralDengueNoMoron = arrayTotalGeneralDengueNoMoron.length || 0 ;

  const porcentajeNotificadosDengueMoron = Math.round(numeroTotalGeneralDengueMoron / (numeroTotalGeneralDengueNoMoron + numeroTotalGeneralDengueMoron) * 100) || 0

  //-------------Departamento de carga entre fechas
  const numeroTotalGeneralDengueMoronEntreFechas = calcularDptoCargaMoronEntreFechas("Dengue", semanaInicial, semanaFinal)

  const numeroTotalGeneralDengueNoMoronEntreFechas = calcularDptoCargaNoMoronEntreFechas("Dengue", semanaInicial, semanaFinal)

  const porcentajeNotificadosDengueMoronEntreFechas = Math.round(numeroTotalGeneralDengueMoronEntreFechas / (numeroTotalGeneralDengueNoMoronEntreFechas + numeroTotalGeneralDengueMoronEntreFechas) * 100) || 0

  //---Edad x sexo
  const dengueFmenor1m = calcularEdadSexo(arrayTotalNotificadosDengue, "F", "Neonato (hasta 28 dneas)");
  const dengueF2m12m = calcularEdadSexo(arrayTotalNotificadosDengue, "F", "Posneonato (29 hasta 365 dneas)");
  const dengueF13m24m = calcularEdadSexo(arrayTotalNotificadosDengue, "F", "De 13 a 24 meses");
  const dengueF2a4a = calcularEdadSexo(arrayTotalNotificadosDengue, "F", "De 2 a 4 anaos");
  const dengueF5a9a = calcularEdadSexo(arrayTotalNotificadosDengue, "F", "De 5 a 9 anaos");
  const dengueF10a14a = calcularEdadSexo(arrayTotalNotificadosDengue, "F", "De 10 a 14 anaos");
  const dengueF15a19a = calcularEdadSexo(arrayTotalNotificadosDengue, "F", "De 15 a 19 anaos");
  const dengueF20a24a = calcularEdadSexo(arrayTotalNotificadosDengue, "F", "De 20 a 24 anaos");
  const dengueF25a34a = calcularEdadSexo(arrayTotalNotificadosDengue, "F", "De 25 a 34 anaos");
  const dengueF35a44a = calcularEdadSexo(arrayTotalNotificadosDengue, "F", "De 35 a 44 anaos");
  const dengueF45a65a = calcularEdadSexo(arrayTotalNotificadosDengue, "F", "De 45 a 65 anaos");
  const dengueFmay65 = calcularEdadSexo(arrayTotalNotificadosDengue, "F", "Mayores de 65 anaos");
 
  const dengueMmenor1m = calcularEdadSexo(arrayTotalNotificadosDengue, "M", "Neonato (hasta 28 dneas)");
  const dengueM2m12m = calcularEdadSexo(arrayTotalNotificadosDengue, "M", "Posneonato (29 hasta 365 dneas)");
  const dengueM13m24m = calcularEdadSexo(arrayTotalNotificadosDengue, "M", "De 13 a 24 meses");
  const dengueM2a4a = calcularEdadSexo(arrayTotalNotificadosDengue, "M", "De 2 a 4 anaos");
  const dengueM5a9a = calcularEdadSexo(arrayTotalNotificadosDengue, "M", "De 5 a 9 anaos");
  const dengueM10a14a = calcularEdadSexo(arrayTotalNotificadosDengue, "M", "De 10 a 14 anaos");
  const dengueM15a19a = calcularEdadSexo(arrayTotalNotificadosDengue, "M", "De 15 a 19 anaos");
  const dengueM20a24a = calcularEdadSexo(arrayTotalNotificadosDengue, "M", "De 20 a 24 anaos");
  const dengueM25a34a = calcularEdadSexo(arrayTotalNotificadosDengue, "M", "De 25 a 34 anaos");
  const dengueM35a44a = calcularEdadSexo(arrayTotalNotificadosDengue, "M", "De 35 a 44 anaos");
  const dengueM45a65a = calcularEdadSexo(arrayTotalNotificadosDengue, "M", "De 45 a 65 anaos");
  const dengueMmay65 = calcularEdadSexo(arrayTotalNotificadosDengue, "M", "Mayores de 65 anaos");

  const dengueSexoEdad = [dengueFmenor1m, dengueF2m12m, dengueF13m24m, dengueF2a4a, dengueF5a9a, dengueF10a14a, dengueF15a19a, dengueF20a24a, dengueF25a34a, dengueF35a44a, dengueF45a65a, dengueFmay65, dengueMmenor1m, dengueM2m12m, dengueM13m24m, dengueM2a4a, dengueM5a9a, dengueM10a14a, dengueM15a19a, dengueM20a24a, dengueM25a34a, dengueM35a44a, dengueM45a65a, dengueMmay65]

  //notificados por semana epidemiológica

const dengueXse = [
  calcularNotificadosXSE(arrayTotalNotificadosDengue,1), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,2), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,3), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,4), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,5), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,6), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,7), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,8), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,9), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,10), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,11), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,12), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,13), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,14), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,15),
  calcularNotificadosXSE(arrayTotalNotificadosDengue,16),
  calcularNotificadosXSE(arrayTotalNotificadosDengue,17), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,18), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,19), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,20), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,21), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,22), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,23), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,24), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,25),
  calcularNotificadosXSE(arrayTotalNotificadosDengue,26), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,27), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,28), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,29), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,30),
  calcularNotificadosXSE(arrayTotalNotificadosDengue,31),
  calcularNotificadosXSE(arrayTotalNotificadosDengue,32),
  calcularNotificadosXSE(arrayTotalNotificadosDengue,33), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,34), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,35), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,36), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,37), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,38), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,39), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,40), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,41), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,42), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,43), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,44), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,45), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,46), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,47),
  calcularNotificadosXSE(arrayTotalNotificadosDengue,48), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,49), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,50), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,51), 
  calcularNotificadosXSE(arrayTotalNotificadosDengue,52),
]

//------------------Todas las ENOs---------------------------------------

const x = ["Accidente potencialmente rábico (APR)", "Alacranismo", "Brucelosis", "Caso sospechoso de intoxicación por consumo de cocaína contaminada", "Celiaquía", "Chagas agudo congénito", "Chagas crónico", "Chagas en embarazadas", "Coqueluche", "Dengue", "Diarrea aguda", "Encefalitis de San Luis", "Enfermedad Febril Exantemática-EFE (Sarampión/Rubéola)", "Enfermedad Pie-Mano-Boca", "Estudio de SARS-COV-2 en situaciones especiales", "Fiebre del Nilo Occidental", "Gonorrea", "Hantavirosis", "Hepatitis B", "Hepatitis C", "Hepatitis E", "Hidatidosis", "HTLV", "Infección respiratoria aguda viral sin especificar", "Intoxicación con otros tóxicos", "Intoxicación/Exposición a Mercurio", "Intoxicación/Exposición por Monóxido de Carbono", "IRAG", "Leptospirosis", "Meningoencefalitis", "Otras infecciones invasivas (bacterianas y otras)", "Poliomielitis-Parálisis flácida aguda en menores de 15 años", "SARS-COV-2 en puntos de entrada y casos relacionados con importación", "Sífilis", "Sífilis congénita", "Sífilis en personas gestantes", "Sindrome inflamatorio multisistémico (SIM)", "Streptococcus agalactiae grupo B en embarazadas", "SUH - Sindrome Urémico Hemolítico", "Toxoplasmosis congénita", "Toxoplasmosis en embarazadas", "Tuberculosis", "Vigilancia genómica de SARS-CoV-2", "VIH", "VIH - Expuesto perinatal", "VIH en embarazo", "Viruela símica", ]

const notificadosEno1 = [
  calcularNumeroTotalNotificados("Accidente potencialmente rábico (APR)"),
  calcularNumeroTotalNotificados("Alacranismo"),
  calcularNumeroTotalNotificados("Brucelosis"),
  calcularNumeroTotalNotificados("Caso sospechoso de intoxicación por consumo de cocaína contaminada"),
  calcularNumeroTotalNotificados("Celiaquía"),
  calcularNumeroTotalNotificados("Chagas agudo congénito"),
  calcularNumeroTotalNotificados("Chagas crónico"),
  calcularNumeroTotalNotificados("Chagas en embarazadas"),
  calcularNumeroTotalNotificados("Coqueluche"),
 // calcularNumeroTotalNotificados("Dengue"),
  calcularNumeroTotalNotificados("Diarrea aguda"),
  calcularNumeroTotalNotificados("Encefalitis de San Luis"),
  calcularNumeroTotalNotificados("Enfermedad Febril Exantemática-EFE (Sarampión/Rubéola)"),
  calcularNumeroTotalNotificados("Enfermedad Pie-Mano-Boca"),
  //calcularNumeroTotalNotificados("Estudio de SARS-COV-2 en situaciones especiales"),
  calcularNumeroTotalNotificados("Fiebre del Nilo Occidental"),
  calcularNumeroTotalNotificados("Gonorrea"),
  calcularNumeroTotalNotificados("Hantavirosis"),
  calcularNumeroTotalNotificados("Hepatitis B"),
  calcularNumeroTotalNotificados("Hepatitis C"),

]

const notificadosEno2 = [
  calcularNumeroTotalNotificados("Hepatitis E"),
  calcularNumeroTotalNotificados("Hidatidosis"),
  calcularNumeroTotalNotificados("HTLV"),
  calcularNumeroTotalNotificados("Infección respiratoria aguda viral sin especificar"),
  calcularNumeroTotalNotificados("Intoxicación con otros tóxicos"),
  calcularNumeroTotalNotificados("Intoxicación/Exposición a Mercurio"),
  calcularNumeroTotalNotificados("Intoxicación/Exposición por Monóxido de Carbono"),
  calcularNumeroTotalNotificados("IRAG"),
  calcularNumeroTotalNotificados("Leptospirosis"),
  calcularNumeroTotalNotificados("Meningoencefalitis"),
  calcularNumeroTotalNotificados("Otras infecciones invasivas (bacterianas y otras)"),
  calcularNumeroTotalNotificados("Poliomielitis-Parálisis flácida aguda en menores de 15 años"),
 // calcularNumeroTotalNotificados("SARS-COV-2 en puntos de entrada y casos relacionados con importación"),
  //("Sífilis"),
  //calcularNumeroTotalNotificados("Sífilis congénita"),
  //calcularNumeroTotalNotificados("Sífilis en personas gestantes"),
  calcularNumeroTotalNotificados("Sindrome inflamatorio multisistémico (SIM)"),
  calcularNumeroTotalNotificados("Streptococcus agalactiae grupo B en embarazadas"),
  calcularNumeroTotalNotificados("SUH - Sindrome Urémico Hemolítico"),
  calcularNumeroTotalNotificados("Toxoplasmosis congénita"),
 // calcularNumeroTotalNotificados("Tuberculosis"),
  //calcularNumeroTotalNotificados("Vigilancia genómica de SARS-CoV-2"),
 // calcularNumeroTotalNotificados("VIH"),
 // calcularNumeroTotalNotificados("VIH - Expuesto perinatal"),
 // calcularNumeroTotalNotificados("VIH en embarazo"),
  calcularNumeroTotalNotificados("Viruela símica"),
]

//---------------------ETI-----------------------------

const totalNotificadosETI = calcularTotalNotificadosClinica("Enfermedad tipo influenza (ETI)").length || 0;
const arrayTotalNotificadosETI = calcularTotalNotificadosClinica("Enfermedad tipo influenza (ETI)")

//notificados por semana epidemiológica

const etiXse = [
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,1), 
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,2),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,3),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,4),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,5),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,6),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,7),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,8),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,9),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,10),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,11), 
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,12),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,13),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,14),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,15),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,16),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,17),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,18),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,19),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,20),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,21), 
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,22),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,23),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,24),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,25),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,26),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,27),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,28),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,29),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,30),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,31), 
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,32),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,33),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,34),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,35),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,36),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,37),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,38),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,39),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,40),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,41), 
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,42),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,43),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,44),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,45),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,46),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,47),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,48),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,49),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,50),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,51), 
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,52),
  calcularNotificadosXSEClinica(arrayTotalNotificadosETI,53),
]




  const data = {  anioBaseActual, setAnioBaseActual, anioActual, se, calendar, semanas, weeksCalendar, setWeeksCalendar, baseCompleta, setBaseCompleta, setBaseCompletaClinica, baseCompletaClinica, calendar, setCalendar, notificadosEno1, notificadosEno2, numeroTotalGeneralNotificadosSifilis, numeroTotalGeneralNotificadosHiv, numeroTotalNotificadosTuberculosis, numeroTotalNotificadosDengue, numeroTotalGeneralNotificadosSifilisFemenino, numeroTotalGeneralNotificadosSifilisMasculino, numeroTotalGeneralNotificadosSifilisSd, numeroTotalNotificadosSifilisCongenita, numeroTotalNotificadosSifilisEmbarazadas, numeroTotalGeneralNotificadosHivFemenino, numeroTotalGeneralNotificadosHivMasculino, numeroTotalGeneralNotificadosHivSd, numeroTotalNotificadosHivPerinatal, numeroTotalNotificadosHivEmbarazo, numeroTotalNotificadosTuberculosisFemenino, numeroTotalNotificadosTuberculosisMasculino, numeroTotalNotificadosTuberculosisSd, numeroTotalNotificadosDengueFemenino, numeroTotalNotificadosDengueMasculino, numeroTotalNotificadosDengueSd, numeroConfirmadosTotalGeneralSifilis, numeroConfirmadosTotalGeneralHiv, numeroConfirmadosTotalTuberculosis, numeroConfirmadosTotalDengue, numeroProbablesTotalGeneralSifilis, numeroProbablesTotalGeneralHiv, numeroProbablesTotalDengue, numeroDescartadosTotalGeneralSifilis, numeroDescartadosTotalGeneralHiv, numeroDescartadosTotalTuberculosis, numeroDescartadosTotalDengue, numeroEmbarazadasNotificadasTotalTuberculosis, numeroEmbarazadasNotificadoTotalDengue, numeroEmbarazadasConfirmadasTuberculosis, numeroEmbarazadasDescartadasTuberculosis, numeroEmbarazadasConfirmadasDengue, numeroEmbarazadasDescartadasDengue, numeroEnEstudioTotalTuberculosis, numeroSospechososTotalDengue, numeroTotalGeneralSifilisNoMoron, numeroTotalGeneralSifilisMoron, porcentajeNotificadosSifilisMoron, porcentajeNotificadosHivMoron, numeroTotalGeneralHivNoMoron, numeroTotalGeneralHivMoron, numeroTotalGeneralTuberculosisMoron, numeroTotalGeneralTuberculosisNoMoron, porcentajeNotificadosTuberculosisMoron, numeroTotalGeneralDengueMoron, numeroTotalGeneralDengueNoMoron, porcentajeNotificadosDengueMoron, numeroConfirmadosMasculinosSifilis, numeroConfirmadosFemeninosSifilis, numeroConfirmadosSDSifilis, numeroProbablesFemeninosSifilis, numeroProbablesMasculinosSifilis, numeroProbablesSDSifilis, numeroTotalPositivosTuberculosis, numeroTotalNegativosTuberculosis, numeroTotalSinResultadoTuberculosis, dengueSexoEdad, tuberculosisSexoEdad, hivSexoEdad, sifilisSexoEdad, tuberculosisXse, dengueXse, hivXse, sifilisXse, numeroTotalNotificadosTuberculosisEntreFechas, numeroTotalNotificadosTuberculosisFemeninoEntreFechas, numeroTotalNotificadosTuberculosisMasculinoEntreFechas, numeroTotalNotificadosTuberculosisSdEntreFechas, numeroConfirmadosTotalTuberculosisEntreFechas, numeroDescartadosTotalTuberculosisEntreFechas, 
    numeroEnEstudioTotalTuberculosisEntreFechas, numeroEmbarazadasNotificadasTotalTuberculosisEntreFechas, numeroEmbarazadasConfirmadasTuberculosisEntreFechas, numeroEmbarazadasDescartadasTuberculosisEntreFechas, porcentajeNotificadosTuberculosisMoronEntreFechas, numeroTotalGeneralTuberculosisMoronEntreFechas, numeroTotalGeneralTuberculosisNoMoronEntreFechas, numeroTotalNotificadosDengueEntreFechas, numeroTotalNotificadosDengueFemeninoEntreFechas,numeroTotalNotificadosDengueMasculinoEntreFechas, numeroTotalNotificadosDengueSdEntreFechas, numeroConfirmadosTotalDengueEntreFechas, numeroProbablesTotalDengueEntreFechas, numeroDescartadosTotalDengueEntreFechas, numeroSospechososTotalDengueEntreFechas, porcentajeNotificadosDengueMoronEntreFechas, numeroTotalGeneralDengueNoMoronEntreFechas, numeroTotalGeneralDengueMoronEntreFechas,numeroEmbarazadasNotificadoTotalDengueEntreFechas,numeroEmbarazadasConfirmadasDengueEntreFechas, numeroEmbarazadasDescartadasDengueEntreFechas,numeroTotalNotificadosHivEntreFechas, numeroTotalGeneralNotificadosHivEntreFechas, numeroTotalNotificadosHivEmbarazoEntreFechas, numeroTotalGeneralNotificadosHivMasculinoEntreFechas, numeroTotalGeneralNotificadosHivFemeninoEntreFechas, numeroTotalGeneralNotificadosHivSdEntreFechas, numeroConfirmadosTotalGeneralHivEntreFechas, numeroProbablesTotalGeneralHivEntreFechas, numeroDescartadosTotalGeneralHivEntreFechas, numeroTotalNotificadosHivPerinatalEntreFechas, porcentajeNotificadosHivMoronEntreFechas, numeroTotalGeneralHivMoronEntreFechas, numeroTotalGeneralHivNoMoronEntreFechas, numeroTotalGeneralNotificadosSifilisEntreFechas, numeroTotalGeneralNotificadosSifilisFemeninoEntreFechas, numeroTotalGeneralNotificadosSifilisMasculinoEntreFechas, numeroTotalGeneralNotificadosSifilisSdEntreFechas, numeroDescartadosTotalGeneralSifilisEntreFechas, numeroProbablesTotalGeneralSifilisEntreFechas, numeroConfirmadosTotalGeneralSifilisEntreFechas, numeroTotalGeneralSifilisMoronEntreFechas, numeroTotalGeneralSifilisNoMoronEntreFechas, porcentajeNotificadosSifilisMoronEntreFechas, numeroTotalNotificadosSifilisEmbarazadasEntreFechas, numeroTotalNotificadosSifilisCongenitaEntreFechas, numeroConfirmadosFemeninosSifilis, numeroConfirmadosMasculinosSifilis, numeroConfirmadosSDSifilis, numeroProbablesFemeninosSifilis, numeroProbablesMasculinosSifilis, numeroProbablesSDSifilis, numeroConfirmadosFemeninosSifilisEntreFechas, numeroConfirmadosMasculinosSifilisEntreFechas, numeroConfirmadosSDSifilisEntreFechas, numeroProbablesFemeninosSifilisEntreFechas, numeroProbablesMasculinosSifilisEntreFechas, numeroProbablesSDSifilisEntreFechas, totalNotificadosETI, etiXse}




  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}

export { DataProvider };
//export context
export default DataContext;


