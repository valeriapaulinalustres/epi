import React, { createContext, useState } from 'react';



const DataContext = createContext();

const DataProvider = ({ children }) => {


  const [baseCompleta, setBaseCompleta] = useState([]);

  //PROBANDO
  const anio = 2022
  //console.log(baseCompleta)
  const fem = baseCompleta.filter(el => el.SEXO == "F")
  //console.log(fem)




  //==================================================
  //----------FÓRMULAS----------------------------
  //==================================================

  //-------TOTALES

  function calcularTotalNotificados(enfermedad) {
    return baseCompleta.filter(el => el.EVENTO == enfermedad && el.DEPARTAMENTO_RESIDENCIA == "Morón")
  }

  function calcularPorSexo(arr, sexo) {
    return arr.filter(el => el.SEXO == sexo && el.DEPARTAMENTO_RESIDENCIA == "Morón").length

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

    return baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso confirmado DEN-1" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length
      + baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso confirmado sin serotipo" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length || 0


  }

  function calcularDescartadosTuberculosis() {
    return baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length
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
    return baseCompleta.filter(el => el.EVENTO == evento && el.EMBARAZADA == "SI" && el.DEPARTAMENTO_RESIDENCIA == "Morón").length
  }

  function calcularConfirmadosEmbarazoTuberculosis() {

    return baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Baciloscopía positiva" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Tuberculosis" && el.EMBARAZADA == "SI").length
      + baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Complejo Mycobacterium tuberculosis" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Tuberculosis" && el.EMBARAZADA == "SI").length
      + baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Mycobacterium tuberculosis" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EVENTO == "Tuberculosis" && el.EMBARAZADA == "SI").length || 0
  }

  function calcularDescartadosEmbarazoTuberculosis() {
    return baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso descartado" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI" && el.EVENTO == "Tuberculosis").length
      + baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso invalidado por epidemiología" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI" && el.EVENTO == "Tuberculosis").length || 0
  }

  function calcularConfirmadosEmbarazoDengue() {
    return baseCompleta.filter(el => el.CLASIFICACION_MANUAL == "Caso confirmado DEN-1" && el.DEPARTAMENTO_RESIDENCIA == "Morón" && el.EMBARAZADA == "SI").length
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



  console.log(tuberculosisF45a65a);









  const data = { anio, baseCompleta, setBaseCompleta, numeroTotalGeneralNotificadosSifilis, numeroTotalGeneralNotificadosHiv, numeroTotalNotificadosTuberculosis, numeroTotalNotificadosDengue, numeroTotalGeneralNotificadosSifilisFemenino, numeroTotalGeneralNotificadosSifilisMasculino, numeroTotalGeneralNotificadosSifilisSd, numeroTotalNotificadosSifilisCongenita, numeroTotalNotificadosSifilisEmbarazadas, numeroTotalGeneralNotificadosHivFemenino, numeroTotalGeneralNotificadosHivMasculino, numeroTotalGeneralNotificadosHivSd, numeroTotalNotificadosHivPerinatal, numeroTotalNotificadosHivEmbarazo, numeroTotalNotificadosTuberculosisFemenino, numeroTotalNotificadosTuberculosisMasculino, numeroTotalNotificadosTuberculosisSd, numeroTotalNotificadosDengueFemenino, numeroTotalNotificadosDengueMasculino, numeroTotalNotificadosDengueSd, numeroConfirmadosTotalGeneralSifilis, numeroConfirmadosTotalSiflisCongenita, numeroConfirmadosTotalSifilisEmbarazadas, numeroConfirmadosTotalSifilis, numeroConfirmadosTotalGeneralHiv, numeroConfirmadosTotalHiv, numeroConfirmadosTotalHivEmbarazo, numeroConfirmadosTotalHivPerinatal, numeroConfirmadosTotalTuberculosis, numeroConfirmadosTotalDengue, numeroProbablesTotalGeneralSifilis, numeroProbablesTotalSifilis, numeroProbablesTotalSifilisCongenita, numeroProbablesTotalSifilisEmbarazadas, numeroProbablesTotalGeneralHiv, numeroProbablesTotalHivEmbarazo, numeroProbablesTotalHivPerinatal, numeroProbablesTotalHiv, numeroProbablesTotalDengue, numeroDescartadosTotalGeneralSifilis, numeroDescartadosTotalSifilis, numeroDescartadosTotalSifilisCongenita, numeroDescartadosTotalSifilisEmbarazadas, numeroDescartadosTotalGeneralHiv, numeroDescartadosTotalHiv, numeroDescartadosTotalHivPerinatal, numeroDescartadosTotalHivEmbarazadas, numeroDescartadosTotalTuberculosis, numeroDescartadosTotalDengue, numeroEmbarazadasNotificadasTotalTuberculosis, numeroEmbarazadasNotificadoTotalDengue, numeroEmbarazadasConfirmadasTuberculosis, numeroEmbarazadasDescartadasTuberculosis, numeroEmbarazadasConfirmadasDengue, numeroEmbarazadasDescartadasDengue, numeroEnEstudioTotalTuberculosis, numeroSospechososTotalDengue, numeroTotalGeneralSifilisNoMoron, numeroTotalGeneralSifilisMoron, porcentajeNotificadosSifilisMoron, porcentajeNotificadosHivMoron, numeroTotalGeneralHivNoMoron, numeroTotalGeneralHivMoron, numeroTotalGeneralTuberculosisMoron, numeroTotalGeneralTuberculosisNoMoron, porcentajeNotificadosTuberculosisMoron, numeroTotalGeneralDengueMoron, numeroTotalGeneralDengueNoMoron, porcentajeNotificadosDengueMoron, numeroConfirmadosMasculinosSifilis, numeroConfirmadosFemeninosSifilis, numeroConfirmadosSDSifilis, numeroProbablesFemeninosSifilis, numeroProbablesMasculinosSifilis, numeroProbablesSDSifilis, numeroTotalPositivosTuberculosis, numeroTotalNegativosTuberculosis, numeroTotalSinResultadoTuberculosis, dengueSexoEdad, tuberculosisSexoEdad, hivSexoEdad, sifilisSexoEdad}




  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}

export { DataProvider };
//export context
export default DataContext;


