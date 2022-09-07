import React, { createContext, useState } from 'react';



const DataContext = createContext();

const DataProvider = ({ children }) => {


  const [baseCompleta, setBaseCompleta] = useState([]);
const [calendar, setCalendar] = useState({})

console.log(calendar);

  //PROBANDO
  const anio = 2022
  //console.log(baseCompleta)
  const fem = baseCompleta.filter(el => el.SEXO == "F")
  //console.log(fem)



  const date = new Date()// calcula fecha y hora actual
//fecha con formato de objeto
const actualDate = {
  day: date.getDate(),
  month: date.getMonth() + 1,
  year: date.getFullYear()
}
//calcula fecha actual con barras idem sisa (español)
const fechaActual = date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear()


let miliSec = date.getTime();

// Calcula días desde 1-1-1970 (fecha formato JS)
let days = Math.round(date.getTime() / (1000*60*60*24));



let fechaInicio = new Date('1899-12-31').getTime();
let fechaHoy    = new Date(date).getTime();


let diff = Math.round((fechaHoy - (fechaInicio))/(1000*60*60*24)) + 1


//para contar cantidad de días desde 1-1-1900 (formato número del excel)
function pasarFechaAFormatoNumero (fechaApasarAformatoNumero){
  let a = new Date('1899-12-31').getTime();
let b = new Date(fechaApasarAformatoNumero).getTime();
  return Math.round(((b - (a))/(1000*60*60*24))+1) 
}

const fechaInicioFormatoNumero = pasarFechaAFormatoNumero(calendar.dateFrom)//acá entre paréntesis irá el input del calendario "desde"
const fechaFinFormatoNumero = pasarFechaAFormatoNumero(calendar.dateTo)//acá entre paréntesis irá el input del calendario "hasta"

console.log(fechaFinFormatoNumero);

function calcularTotalNotificadosX() {
  return baseCompleta.filter(el => el.EVENTO == "Tuberculosis" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.FECHA_APERTURA >= fechaInicioFormatoNumero && el.FECHA_APERTURA <= fechaFinFormatoNumero)
}

const a = calcularTotalNotificadosX()
console.log(a);

  //==================================================
  //----------FÓRMULAS----------------------------
  //==================================================

  //-------TOTALES

  function calcularTotalNotificados(enfermedad) {
    return baseCompleta.filter(el => el.EVENTO == enfermedad && el.DEPARTAMENTO_RESIDENCIA == "Morón")
  }

  function calcularPorSexo(arr, sexo) {
    return arr.filter(el => el.SEXO == sexo && el.DEPARTAMENTO_RESIDENCIA == "Morón").length || 0

  }

  function calcularEventoPorSexo(enfermedad, sexo) {
    return baseCompleta.filter(el => el.EVENTO == enfermedad && el.SEXO == sexo && el.DEPARTAMENTO_RESIDENCIA == "Morón")
  }

  function calcularClasificacionManualPorEvento(evento, clasificacion) {
    return baseCompleta.filter(el => el.CLASIFICACION_MANUAL == clasificacion && el.EVENTO == evento && el.DEPARTAMENTO_RESIDENCIA == "Morón")
  }


function calcularSexoClasificacion (sexo, clasificacion){
  return (baseCompleta.filter(el => el.SEXO == sexo && el.DEPARTAMENTO_RESIDENCIA == "Morón"  && el.CLASIFICACION_MANUAL == clasificacion)).length || 0
}

  function calcularConfirmadosTuberculosis() {

    return baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Baciloscopía positiva" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length || 0
      + baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Complejo Mycobacterium tuberculosis" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length || 0
      + baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Mycobacterium tuberculosis" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length || 0

  }

  function calcularConfirmadosDengue() {

    return baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso confirmado DEN-1" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length || 0
      + baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso confirmado sin serotipo" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length || 0


  }

  function calcularDescartadosTuberculosis() {
    return baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length || 0
      + baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso invalidado por epidemiología" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length || 0
  }

  function calcularDescartadosDengue() {
    return baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado por diagnóstico diferencial" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Dengue").length || 0
      + baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado por diagnóstico diferencial" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Dengue").length || 0
      + baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado por epidemiología" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Dengue").length || 0
  }

  function calcularSospechososDengue() {
    return baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso sospechoso" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Dengue").length || 0
      + baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso sospechoso no conclusivo" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Dengue").length || 0
  }

  function calcularEventoEnEmbarazo(evento) {
    return baseCompleta.filter(el => el.EVENTO == evento && el.EMBARAZADA == "SI" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length || 0
  }

  function calcularConfirmadosEmbarazoTuberculosis() {

    return baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Baciloscopía positiva" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Tuberculosis" && el.EMBARAZADA == "SI").length || 0
      + baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Complejo Mycobacterium tuberculosis" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Tuberculosis" && el.EMBARAZADA == "SI").length || 0
      + baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Mycobacterium tuberculosis" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Tuberculosis" && el.EMBARAZADA == "SI").length || 0
  }

  function calcularDescartadosEmbarazoTuberculosis() {
    return baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI" && el.EVENTO == "Tuberculosis").length || 0
      + baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso invalidado por epidemiología" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI" && el.EVENTO == "Tuberculosis").length || 0
  }

  function calcularConfirmadosEmbarazoDengue() {
    return baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso confirmado DEN-1" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI").length || 0
      + baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso confirmado sin serotipo" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI").length || 0
  }

  function calcularDescartadosEmbarazoDengue() {
    return baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado por diagnóstico diferencial" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI").length || 0
      + baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado por diagnóstico diferencial" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI").length || 0
      + baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado por epidemiología" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI").length || 0
  }

  function calcularDptoCargaMoron(evento) {
    return baseCompleta.filter(el => el.EVENTO == evento && el.DEPARTAMENTO_CARGA == "Morón" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length || 0
  }

  function calcularDptoCargaNoMoron(evento) {
    return baseCompleta.filter(el => el.EVENTO == evento && el.DEPARTAMENTO_CARGA !== "Morón" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length || 0
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
  


  //==================================================
  //----------ENFERMEDADES----------------------------
  //==================================================



  //--------Sífilis--------------------------------------------------------------------------

  //-----------arrays totales
  const arrayTotalNotificadosSifilis = calcularTotalNotificados("Sífilis");
  const arrayTotalNotificadosSifilisCongenita = calcularTotalNotificados("Sífilis congénita");
  const arrayTotalNotificadosSifilisEmbarazadas = calcularTotalNotificados("Sífilis en Embarazadas");

  const arrayTotalGeneralNotificadosSifilis = [...arrayTotalNotificadosSifilis, ...arrayTotalNotificadosSifilisCongenita, ...arrayTotalNotificadosSifilisEmbarazadas];


  //-------valores totales
  const numeroTotalNotificadosSifilis = arrayTotalNotificadosSifilis.length;
  const numeroTotalNotificadosSifilisCongenita = arrayTotalNotificadosSifilisCongenita.length;
  const numeroTotalNotificadosSifilisEmbarazadas = arrayTotalNotificadosSifilisEmbarazadas.length;

  const numeroTotalGeneralNotificadosSifilis = arrayTotalGeneralNotificadosSifilis.length;

  //---------por sexo
  const numeroTotalGeneralNotificadosSifilisFemenino = calcularPorSexo(arrayTotalGeneralNotificadosSifilis, "F")

  const numeroTotalGeneralNotificadosSifilisMasculino = calcularPorSexo(arrayTotalGeneralNotificadosSifilis, "M")

  const numeroTotalGeneralNotificadosSifilisSd = calcularPorSexo(arrayTotalGeneralNotificadosSifilis, "NA")

  //---------------clasificaciones totales
  //confirmados


  const numeroConfirmadosTotalSifilis = parseInt(calcularClasificacionManualPorEvento("Sífilis", "Caso confimado en banco de sangre").length) + parseInt(calcularClasificacionManualPorEvento("Sífilis", "Caso confirmado de sífilis sin especificar").length) + parseInt(calcularClasificacionManualPorEvento("Sífilis", "Caso confirmado de sífilis temprana").length)

  const numeroConfirmadosTotalSiflisCongenita = parseInt(calcularClasificacionManualPorEvento("Sífilis congénita", "Caso de Sífilis congénita confirmada por laboratorio").length)

  const numeroConfirmadosTotalSifilisEmbarazadas = parseInt(calcularClasificacionManualPorEvento("Sífilis en Embarazadas", "Caso confirmado de Sífilis").length)

  const numeroConfirmadosTotalGeneralSifilis = numeroConfirmadosTotalSifilis + numeroConfirmadosTotalSiflisCongenita + numeroConfirmadosTotalSifilisEmbarazadas

  //probables

  const numeroProbablesTotalSifilis = parseInt(calcularClasificacionManualPorEvento("Sífilis", "Caso probable de sífilis sin especificar estadío").length) + parseInt(calcularClasificacionManualPorEvento("Sífilis", "Caso probable de sífilis temprana").length) + parseInt(calcularClasificacionManualPorEvento("Sífilis", "Caso probable en banco de sangre").length)

  const numeroProbablesTotalSifilisCongenita = parseInt(calcularClasificacionManualPorEvento("Sífilis congénita", "Caso probable de sífilis sin especificar estadío").length) + parseInt(calcularClasificacionManualPorEvento("Sífilis Congénita", "Caso probable de sífilis temprana").length) + parseInt(calcularClasificacionManualPorEvento("Sífilis Congénita", "Caso probable en banco de sangre").length)

  const numeroProbablesTotalSifilisEmbarazadas = parseInt(calcularClasificacionManualPorEvento("Sífilis en embarazadas", "Caso probable de sífilis sin especificar estadío").length) + parseInt(calcularClasificacionManualPorEvento("Sífilis en Embarazadas", "Caso probable de sífilis").length) + parseInt(calcularClasificacionManualPorEvento("Sífilis en Embarazadas", "Caso probable en banco de sangre").length)

  const numeroProbablesTotalGeneralSifilis = numeroProbablesTotalSifilis + numeroProbablesTotalSifilisCongenita + numeroProbablesTotalSifilisEmbarazadas

  //descartados

  const numeroDescartadosTotalSifilis = parseInt(calcularClasificacionManualPorEvento("Sífilis", "Caso descartado de Sífilis").length)

  const numeroDescartadosTotalSifilisCongenita = parseInt(calcularClasificacionManualPorEvento("Sífilis congénita", "Caso descartado de Sífilis").length) || 0

  const numeroDescartadosTotalSifilisEmbarazadas = parseInt(calcularClasificacionManualPorEvento("Sífilis en embarazadas", "Caso descartado de Sífilis").length) || 0

  const numeroDescartadosTotalGeneralSifilis = numeroDescartadosTotalSifilis + numeroDescartadosTotalSifilisCongenita + numeroDescartadosTotalSifilisEmbarazadas

  //-------------Departamento de carga
  const numeroTotalGeneralSifilisMoron = calcularDptoCargaMoron("Sífilis") + calcularDptoCargaMoron("Sífilis congénita") + calcularDptoCargaMoron("Sífilis en Embarazadas")

  const numeroTotalGeneralSifilisNoMoron = calcularDptoCargaNoMoron("Sífilis") + calcularDptoCargaNoMoron("Sífilis congénita") + calcularDptoCargaNoMoron("Sífilis en Embarazadas")

  const porcentajeNotificadosSifilisMoron = Math.round(numeroTotalGeneralSifilisMoron / (numeroTotalGeneralSifilisMoron + numeroTotalGeneralSifilisNoMoron) * 100) || 0

  //---------confirmados femeninas, masculinos y sin datos


 const numeroConfirmadosFemeninosSifilis = parseInt(calcularSexoClasificacion("F", "Caso confimado en banco de sangre")) + parseInt(calcularSexoClasificacion("F", "Caso confirmado de Sífilis"))+ parseInt(calcularSexoClasificacion("F", "Caso confirmado de sífilis sin especificar")) + parseInt(calcularSexoClasificacion("F", "Caso confirmado de sífilis temprana")) + parseInt(calcularSexoClasificacion("F", "Caso de Sífilis congénita confirmada por laboratorio"))

 const numeroConfirmadosMasculinosSifilis = parseInt(calcularSexoClasificacion("M", "Caso confimado en banco de sangre")) + parseInt(calcularSexoClasificacion("M", "Caso confirmado de Sífilis"))+ parseInt(calcularSexoClasificacion("M", "Caso confirmado de sífilis sin especificar")) + parseInt(calcularSexoClasificacion("M", "Caso confirmado de sífilis temprana")) + parseInt(calcularSexoClasificacion("M", "Caso de Sífilis congénita confirmada por laboratorio"))

 const numeroConfirmadosNASifilis = parseInt(calcularSexoClasificacion("NA", "Caso confimado en banco de sangre")) + parseInt(calcularSexoClasificacion("NA", "Caso confirmado de Sífilis"))+ parseInt(calcularSexoClasificacion("NA", "Caso confirmado de sífilis sin especificar")) + parseInt(calcularSexoClasificacion("NA", "Caso confirmado de sífilis temprana")) + parseInt(calcularSexoClasificacion("NA", "Caso de Sífilis congénita confirmada por laboratorio"))

 const numeroConfirmadosASifilis = parseInt(calcularSexoClasificacion("A", "Caso confimado en banco de sangre")) + parseInt(calcularSexoClasificacion("A", "Caso confirmado de Sífilis"))+ parseInt(calcularSexoClasificacion("A", "Caso confirmado de sífilis sin especificar")) + parseInt(calcularSexoClasificacion("A", "Caso confirmado de sífilis temprana")) + parseInt(calcularSexoClasificacion("A", "Caso de Sífilis congénita confirmada por laboratorio"))

 const numeroConfirmadosSDSifilis = numeroConfirmadosNASifilis + numeroConfirmadosASifilis


 //---------probables femeninas, masculinos y sin datos


 const numeroProbablesFemeninosSifilis = parseInt(calcularSexoClasificacion("F", "Caso probable de Sífilis")) + parseInt(calcularSexoClasificacion("F", "Caso probable en banco de sangre"))+ parseInt(calcularSexoClasificacion("F", "Caso probable de sífilis temprana")) + parseInt(calcularSexoClasificacion("F", "Caso probable de sífilis sin especificar estadío"))

 const numeroProbablesMasculinosSifilis = parseInt(calcularSexoClasificacion("M", "Caso probable de Sífilis")) + parseInt(calcularSexoClasificacion("M", "Caso probable en banco de sangre"))+ parseInt(calcularSexoClasificacion("M", "Caso probable de sífilis temprana")) + parseInt(calcularSexoClasificacion("M", "Caso probable de sífilis sin especificar estadío"))

 const numeroProbablesNASifilis = parseInt(calcularSexoClasificacion("NA", "Caso probable de Sífilis")) + parseInt(calcularSexoClasificacion("NA", "Caso probable en banco de sangre"))+ parseInt(calcularSexoClasificacion("NA", "Caso probable de sífilis temprana")) + parseInt(calcularSexoClasificacion("NA", "Caso probable de sífilis sin especificar estadío"))

 const numeroProbablesASifilis = parseInt(calcularSexoClasificacion("A", "Caso probable de Sífilis")) + parseInt(calcularSexoClasificacion("A", "Caso probable en banco de sangre"))+ parseInt(calcularSexoClasificacion("A", "Caso probable de sífilis temprana")) + parseInt(calcularSexoClasificacion("A", "Caso probable de sífilis sin especificar estadío"))

 const numeroProbablesSDSifilis = numeroProbablesNASifilis + numeroProbablesASifilis


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
  const arrayTotalNotificadosHiv = calcularTotalNotificados("VIH");
  const arrayTotalNotificadosHivPerinatal = calcularTotalNotificados("VIH - Expuesto perinatal");
  const arrayTotalNotificadosHivEmbarazo = calcularTotalNotificados("VIH en embarazo");

  const arrayTotalGeneralNotificadosHiv = [...arrayTotalNotificadosHiv, ...arrayTotalNotificadosHivPerinatal, ...arrayTotalNotificadosHivEmbarazo]

  //------------valores totales--
  const numeroTotalNotificadosHiv = arrayTotalNotificadosHiv.length;
  const numeroTotalNotificadosHivPerinatal = arrayTotalNotificadosHivPerinatal.length;
  const numeroTotalNotificadosHivEmbarazo = arrayTotalNotificadosHivEmbarazo.length;

  const numeroTotalGeneralNotificadosHiv = arrayTotalGeneralNotificadosHiv.length;

  //------------por sexo
  const numeroTotalGeneralNotificadosHivFemenino = calcularPorSexo(arrayTotalGeneralNotificadosHiv, "F");
  const numeroTotalGeneralNotificadosHivMasculino = calcularPorSexo(arrayTotalGeneralNotificadosHiv, "M");
  const numeroTotalGeneralNotificadosHivSd = calcularPorSexo(arrayTotalGeneralNotificadosHiv, "NA")

  //---------------clasificaciones totales
  //confirmados

  const numeroConfirmadosTotalHiv = parseInt(calcularClasificacionManualPorEvento("VIH", "Caso confirmado de VIH").length)

  const numeroConfirmadosTotalHivEmbarazo = parseInt(calcularClasificacionManualPorEvento("VIH en embarazo", "Caso confirmado de VIH").length)

  const numeroConfirmadosTotalHivPerinatal = parseInt(calcularClasificacionManualPorEvento("VIH - Expuesto perinatal", "Caso confirmado de VIH perinatal").length)

  const numeroConfirmadosTotalGeneralHiv = numeroConfirmadosTotalHiv + numeroConfirmadosTotalHivEmbarazo + numeroConfirmadosTotalHivPerinatal

  //probables

  const numeroProbablesTotalHiv = parseInt(calcularClasificacionManualPorEvento("VIH", "Caso probable de VIH").length) || 0

  const numeroProbablesTotalHivEmbarazo = parseInt(calcularClasificacionManualPorEvento("VIH en embarazo", "Caso probable de VIH").length) || 0

  const numeroProbablesTotalHivPerinatal = parseInt(calcularClasificacionManualPorEvento("VIH - Expuesto perinatal", "Caso probable de VIH perinatal").length) || 0

  const numeroProbablesTotalGeneralHiv = numeroProbablesTotalHiv + numeroProbablesTotalHivEmbarazo + numeroProbablesTotalHivPerinatal

  //descartados

  const numeroDescartadosTotalHiv = parseInt(calcularClasificacionManualPorEvento("VIH", "Caso descartado de VIH").length)

  const numeroDescartadosTotalHivPerinatal = parseInt(calcularClasificacionManualPorEvento("VIH en embarazo", "Caso descartado de VIH").length) || 0

  const numeroDescartadosTotalHivEmbarazadas = parseInt(calcularClasificacionManualPorEvento("VIH - Expuesto perinatal", "Caso descartado de VIH").length) || 0

  const numeroDescartadosTotalGeneralHiv = numeroDescartadosTotalHiv + numeroDescartadosTotalHivPerinatal + numeroDescartadosTotalHivEmbarazadas


  //-------------Departamento de carga
  const numeroTotalGeneralHivMoron = calcularDptoCargaMoron("VIH") + calcularDptoCargaMoron("VIH - Expuesto perinatal") + calcularDptoCargaMoron("VIH en embarazo")

  const numeroTotalGeneralHivNoMoron = calcularDptoCargaNoMoron("VIH") + calcularDptoCargaNoMoron("VIH - Expuesto perinatal") + calcularDptoCargaNoMoron("VIH en embarazo")

  const porcentajeNotificadosHivMoron = Math.round(numeroTotalGeneralHivMoron / (numeroTotalGeneralHivMoron + numeroTotalGeneralHivNoMoron) * 100) || 0

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
  const arrayTotalNotificadosTuberculosis = calcularTotalNotificados("Tuberculosis");

  //------------valores totales
  const numeroTotalNotificadosTuberculosis = arrayTotalNotificadosTuberculosis.length;

  //------------por sexo
  const numeroTotalNotificadosTuberculosisFemenino = calcularPorSexo(arrayTotalNotificadosTuberculosis, "F")
  const numeroTotalNotificadosTuberculosisMasculino = calcularPorSexo(arrayTotalNotificadosTuberculosis, "M")
  const numeroTotalNotificadosTuberculosisNA = calcularPorSexo(arrayTotalNotificadosTuberculosis, "NA")
  const numeroTotalNotificadosTuberculosisA = calcularPorSexo(arrayTotalNotificadosTuberculosis, "A")

  const numeroTotalNotificadosTuberculosisSd = parseInt(numeroTotalNotificadosTuberculosisNA) + parseInt(numeroTotalNotificadosTuberculosisA)

  //---------------clasificaciones totales
  //confirmados
  const numeroConfirmadosTotalTuberculosis = calcularConfirmadosTuberculosis()

  //descartados
  const numeroDescartadosTotalTuberculosis = calcularDescartadosTuberculosis()

  //embarazadas
  const numeroEmbarazadasNotificadasTotalTuberculosis = calcularEventoEnEmbarazo("Tuberculosis")
  const numeroEmbarazadasConfirmadasTuberculosis = calcularConfirmadosEmbarazoTuberculosis()
  const numeroEmbarazadasDescartadasTuberculosis = calcularDescartadosEmbarazoTuberculosis()

  //En estudio
  const numeroEnEstudioTotalTuberculosis = parseInt(calcularClasificacionManualPorEvento("Tuberculosis", "En estudio").length)

  //-------------Departamento de carga
  const numeroTotalGeneralTuberculosisMoron = calcularDptoCargaMoron("Tuberculosis")

  const numeroTotalGeneralTuberculosisNoMoron = calcularDptoCargaNoMoron("Tuberculosis")

  const porcentajeNotificadosTuberculosisMoron = Math.round(numeroTotalGeneralTuberculosisMoron / (numeroTotalGeneralTuberculosisNoMoron + numeroTotalGeneralTuberculosisMoron) * 100) || 0

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
  const arrayTotalNotificadosDengue = calcularTotalNotificados("Dengue");

  //------------valores totales
  const numeroTotalNotificadosDengue = arrayTotalNotificadosDengue.length;

  //--------------por sexo
  const numeroTotalNotificadosDengueFemenino = calcularPorSexo(arrayTotalNotificadosDengue, "F");
  const numeroTotalNotificadosDengueMasculino = calcularPorSexo(arrayTotalNotificadosDengue, "M");
  const numeroTotalNotificadosDengueSd = calcularPorSexo(arrayTotalNotificadosDengue, "NA")

  //---------------clasificaciones totales
  //confirmados
  const numeroConfirmadosTotalDengue = calcularConfirmadosDengue()

  //probables
  const numeroProbablesTotalDengue = parseInt(calcularClasificacionManualPorEvento("Dengue", "Caso probable").length) || 0

  //descartados
  const numeroDescartadosTotalDengue = calcularDescartadosDengue()

  //sospechosos
  const numeroSospechososTotalDengue = calcularSospechososDengue()

  //embarazadas
  const numeroEmbarazadasNotificadoTotalDengue = calcularEventoEnEmbarazo("Dengue")
  const numeroEmbarazadasConfirmadasDengue = calcularConfirmadosEmbarazoDengue()
  const numeroEmbarazadasDescartadasDengue = calcularDescartadosEmbarazoDengue()

  //-------------Departamento de carga
  const numeroTotalGeneralDengueMoron = calcularDptoCargaMoron("Dengue")

  const numeroTotalGeneralDengueNoMoron = calcularDptoCargaNoMoron("Dengue")

  const porcentajeNotificadosDengueMoron = Math.round(numeroTotalGeneralDengueMoron / (numeroTotalGeneralDengueNoMoron + numeroTotalGeneralDengueMoron) * 100) || 0

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




console.log(tuberculosisXse);






  const data = { anio, baseCompleta, setBaseCompleta, calendar, setCalendar, numeroTotalGeneralNotificadosSifilis, numeroTotalGeneralNotificadosHiv, numeroTotalNotificadosTuberculosis, numeroTotalNotificadosDengue, numeroTotalGeneralNotificadosSifilisFemenino, numeroTotalGeneralNotificadosSifilisMasculino, numeroTotalGeneralNotificadosSifilisSd, numeroTotalNotificadosSifilisCongenita, numeroTotalNotificadosSifilisEmbarazadas, numeroTotalGeneralNotificadosHivFemenino, numeroTotalGeneralNotificadosHivMasculino, numeroTotalGeneralNotificadosHivSd, numeroTotalNotificadosHivPerinatal, numeroTotalNotificadosHivEmbarazo, numeroTotalNotificadosTuberculosisFemenino, numeroTotalNotificadosTuberculosisMasculino, numeroTotalNotificadosTuberculosisSd, numeroTotalNotificadosDengueFemenino, numeroTotalNotificadosDengueMasculino, numeroTotalNotificadosDengueSd, numeroConfirmadosTotalGeneralSifilis, numeroConfirmadosTotalSiflisCongenita, numeroConfirmadosTotalSifilisEmbarazadas, numeroConfirmadosTotalSifilis, numeroConfirmadosTotalGeneralHiv, numeroConfirmadosTotalHiv, numeroConfirmadosTotalHivEmbarazo, numeroConfirmadosTotalHivPerinatal, numeroConfirmadosTotalTuberculosis, numeroConfirmadosTotalDengue, numeroProbablesTotalGeneralSifilis, numeroProbablesTotalSifilis, numeroProbablesTotalSifilisCongenita, numeroProbablesTotalSifilisEmbarazadas, numeroProbablesTotalGeneralHiv, numeroProbablesTotalHivEmbarazo, numeroProbablesTotalHivPerinatal, numeroProbablesTotalHiv, numeroProbablesTotalDengue, numeroDescartadosTotalGeneralSifilis, numeroDescartadosTotalSifilis, numeroDescartadosTotalSifilisCongenita, numeroDescartadosTotalSifilisEmbarazadas, numeroDescartadosTotalGeneralHiv, numeroDescartadosTotalHiv, numeroDescartadosTotalHivPerinatal, numeroDescartadosTotalHivEmbarazadas, numeroDescartadosTotalTuberculosis, numeroDescartadosTotalDengue, numeroEmbarazadasNotificadasTotalTuberculosis, numeroEmbarazadasNotificadoTotalDengue, numeroEmbarazadasConfirmadasTuberculosis, numeroEmbarazadasDescartadasTuberculosis, numeroEmbarazadasConfirmadasDengue, numeroEmbarazadasDescartadasDengue, numeroEnEstudioTotalTuberculosis, numeroSospechososTotalDengue, numeroTotalGeneralSifilisNoMoron, numeroTotalGeneralSifilisMoron, porcentajeNotificadosSifilisMoron, porcentajeNotificadosHivMoron, numeroTotalGeneralHivNoMoron, numeroTotalGeneralHivMoron, numeroTotalGeneralTuberculosisMoron, numeroTotalGeneralTuberculosisNoMoron, porcentajeNotificadosTuberculosisMoron, numeroTotalGeneralDengueMoron, numeroTotalGeneralDengueNoMoron, porcentajeNotificadosDengueMoron, numeroConfirmadosMasculinosSifilis, numeroConfirmadosFemeninosSifilis, numeroConfirmadosSDSifilis, numeroProbablesFemeninosSifilis, numeroProbablesMasculinosSifilis, numeroProbablesSDSifilis, numeroTotalPositivosTuberculosis, numeroTotalNegativosTuberculosis, numeroTotalSinResultadoTuberculosis, dengueSexoEdad, tuberculosisSexoEdad, hivSexoEdad, sifilisSexoEdad, tuberculosisXse, dengueXse, hivXse, sifilisXse}




  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}

export { DataProvider };
//export context
export default DataContext;


