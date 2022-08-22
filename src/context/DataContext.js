import React, { createContext, useState } from 'react';



const DataContext = createContext();

const DataProvider = ({ children }) => {


const [baseCompleta, setBaseCompleta] = useState([]);

//PROBANDO
const anio = 2022
//console.log(baseCompleta)
const fem = baseCompleta.filter(el=>el.SEXO == "F")
//console.log(fem)


//==================================================
//----------FÓRMULAS----------------------------
//==================================================

//-------TOTALES

function calcularTotalNotificados (enfermedad) {
return baseCompleta.filter(el=>el.EVENTO == enfermedad && el.DEPARTAMENTO_RESIDENCIA == "Morón")
}

function calcularPorSexo (arr, sexo) {
  return arr.filter(el=>el.SEXO == sexo && el.DEPARTAMENTO_RESIDENCIA == "Morón").length

}

function calcularEventoPorSexo (enfermedad, sexo) {
  return baseCompleta.filter(el=>el.EVENTO == enfermedad && el.SEXO == sexo && el.DEPARTAMENTO_RESIDENCIA == "Morón")
}

function calcularClasificacionManualPorEvento (evento, clasificacion) {
  return baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == clasificacion && el.EVENTO == evento && el.DEPARTAMENTO_RESIDENCIA == "Morón")
}

function calcularConfirmadosTuberculosis () {

return  baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Baciloscopía positiva" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length 
+ baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Complejo Mycobacterium tuberculosis" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length 
+ baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Mycobacterium tuberculosis" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length || 0
  
}

function calcularConfirmadosDengue () {

  return  baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Caso confirmado DEN-1" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length 
  + baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Caso confirmado sin serotipo" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length || 0

    
  }

  function calcularDescartadosTuberculosis () {
    return  baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Caso descartado" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length 
+ baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Caso invalidado por epidemiología" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length || 0
  }

  function calcularDescartadosDengue () {
    return  baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Caso descartado por diagnóstico diferencial" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Dengue").length || 0
+ baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Caso descartado por diagnóstico diferencial" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Dengue").length || 0
+ baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Caso descartado por epidemiología" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Dengue").length || 0
  }

  function calcularSospechososDengue () {
    return  baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Caso sospechoso" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Dengue").length || 0
+ baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Caso sospechoso no conclusivo" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Dengue").length || 0
  }

  function calcularEventoEnEmbarazo (evento ) {
    return baseCompleta.filter(el=>el.EVENTO == evento && el.EMBARAZADA == "SI" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length
  }

  function calcularConfirmadosEmbarazoTuberculosis () {

    return  baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Baciloscopía positiva" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Tuberculosis" && el.EMBARAZADA == "SI").length 
    + baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Complejo Mycobacterium tuberculosis" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Tuberculosis" && el.EMBARAZADA == "SI").length 
    + baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Mycobacterium tuberculosis" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Tuberculosis" && el.EMBARAZADA == "SI").length || 0
    }

    function calcularDescartadosEmbarazoTuberculosis () {
      return  baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Caso descartado" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI" && el.EVENTO == "Tuberculosis").length 
  + baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Caso invalidado por epidemiología" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI" && el.EVENTO == "Tuberculosis").length || 0
    }

    function calcularConfirmadosEmbarazoDengue () {
      return  baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Caso confirmado DEN-1" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI").length 
      + baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Caso confirmado sin serotipo" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI").length || 0
        }

        function calcularDescartadosEmbarazoDengue () {
          return  baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Caso descartado por diagnóstico diferencial" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI").length || 0
      + baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Caso descartado por diagnóstico diferencial" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI").length || 0
      + baseCompleta.filter(el=>el.CLASIFICACION_MANUAL == "Caso descartado por epidemiología" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI").length || 0
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

const numeroProbablesTotalSifilis = parseInt(calcularClasificacionManualPorEvento("Sífilis", "Caso probable de sífilis sin especificar estadío").length) + parseInt(calcularClasificacionManualPorEvento("Sífilis",  "Caso probable de sífilis temprana").length) + parseInt(calcularClasificacionManualPorEvento("Sífilis", "Caso probable en banco de sangre").length)

const numeroProbablesTotalSifilisCongenita = parseInt(calcularClasificacionManualPorEvento("Sífilis congénita", "Caso probable de sífilis sin especificar estadío").length) + parseInt(calcularClasificacionManualPorEvento("Sífilis Congénita", "Caso probable de sífilis temprana").length) + parseInt(calcularClasificacionManualPorEvento("Sífilis Congénita", "Caso probable en banco de sangre").length) 

const numeroProbablesTotalSifilisEmbarazadas = parseInt(calcularClasificacionManualPorEvento("Sífilis en embarazadas", "Caso probable de sífilis sin especificar estadío").length) + parseInt(calcularClasificacionManualPorEvento("Sífilis en Embarazadas", "Caso probable de sífilis").length) + parseInt(calcularClasificacionManualPorEvento("Sífilis en Embarazadas", "Caso probable en banco de sangre").length)

const numeroProbablesTotalGeneralSifilis = numeroProbablesTotalSifilis + numeroProbablesTotalSifilisCongenita + numeroProbablesTotalSifilisEmbarazadas

//descartados

const numeroDescartadosTotalSifilis = parseInt(calcularClasificacionManualPorEvento("Sífilis", "Caso descartado de Sífilis").length) 

const numeroDescartadosTotalSifilisCongenita = parseInt(calcularClasificacionManualPorEvento("Sífilis congénita", "Caso descartado de Sífilis").length) || 0 

const numeroDescartadosTotalSifilisEmbarazadas = parseInt(calcularClasificacionManualPorEvento("Sífilis en embarazadas", "Caso descartado de Sífilis").length) || 0

const numeroDescartadosTotalGeneralSifilis = numeroDescartadosTotalSifilis + numeroDescartadosTotalSifilisCongenita + numeroDescartadosTotalSifilisEmbarazadas


//------------HIV----------------------------------------------------------------------------
//-----------arrays totales
const arrayTotalNotificadosHiv = calcularTotalNotificados("VIH");
const arrayTotalNotificadosHivPerinatal = calcularTotalNotificados("VIH - Expuesto perinatal");
const arrayTotalNotificadosHivEmbarazo = calcularTotalNotificados("VIH en embarazo");

const arrayTotalGeneralNotificadosHiv = [...arrayTotalNotificadosHiv, ...arrayTotalNotificadosHivPerinatal, ...arrayTotalNotificadosHivEmbarazo]

//------------valores totales
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




console.log(numeroEnEstudioTotalTuberculosis);









 const data = { anio, baseCompleta, setBaseCompleta, numeroTotalGeneralNotificadosSifilis, numeroTotalGeneralNotificadosHiv, numeroTotalNotificadosTuberculosis, numeroTotalNotificadosDengue, numeroTotalGeneralNotificadosSifilisFemenino, numeroTotalGeneralNotificadosSifilisMasculino, numeroTotalGeneralNotificadosSifilisSd, numeroTotalNotificadosSifilisCongenita, numeroTotalNotificadosSifilisEmbarazadas, numeroTotalGeneralNotificadosHivFemenino, numeroTotalGeneralNotificadosHivMasculino, numeroTotalGeneralNotificadosHivSd, numeroTotalNotificadosHivPerinatal, numeroTotalNotificadosHivEmbarazo, numeroTotalNotificadosTuberculosisFemenino, numeroTotalNotificadosTuberculosisMasculino, numeroTotalNotificadosTuberculosisSd, numeroTotalNotificadosDengueFemenino, numeroTotalNotificadosDengueMasculino, numeroTotalNotificadosDengueSd, numeroConfirmadosTotalGeneralSifilis, numeroConfirmadosTotalSiflisCongenita, numeroConfirmadosTotalSifilisEmbarazadas, numeroConfirmadosTotalSifilis, numeroConfirmadosTotalGeneralHiv, numeroConfirmadosTotalHiv, numeroConfirmadosTotalHivEmbarazo, numeroConfirmadosTotalHivPerinatal, numeroConfirmadosTotalTuberculosis, numeroConfirmadosTotalDengue, numeroProbablesTotalGeneralSifilis,  numeroProbablesTotalSifilis, numeroProbablesTotalSifilisCongenita, numeroProbablesTotalSifilisEmbarazadas, numeroProbablesTotalGeneralHiv, numeroProbablesTotalHivEmbarazo, numeroProbablesTotalHivPerinatal, numeroProbablesTotalHiv, numeroProbablesTotalDengue, numeroDescartadosTotalGeneralSifilis, numeroDescartadosTotalSifilis, numeroDescartadosTotalSifilisCongenita, numeroDescartadosTotalSifilisEmbarazadas, numeroDescartadosTotalGeneralHiv, numeroDescartadosTotalHiv, numeroDescartadosTotalHivPerinatal, numeroDescartadosTotalHivEmbarazadas, numeroDescartadosTotalTuberculosis, numeroDescartadosTotalDengue, numeroEmbarazadasNotificadasTotalTuberculosis, numeroEmbarazadasNotificadoTotalDengue, numeroEmbarazadasConfirmadasTuberculosis, numeroEmbarazadasDescartadasTuberculosis, numeroEmbarazadasConfirmadasDengue, numeroEmbarazadasDescartadasDengue, numeroEnEstudioTotalTuberculosis, numeroSospechososTotalDengue }

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}

export { DataProvider };
//export context
export default DataContext;


