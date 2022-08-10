import React, { createContext, useState } from 'react';



const DataContext = createContext();

const DataProvider = ({ children }) => {


const [baseCompleta, setBaseCompleta] = useState([]);

//PROBANDO
const anio = 2022
console.log(baseCompleta)
const fem = baseCompleta.filter(el=>el.SEXO == "F")
console.log(fem)


//==================================================
//----------FÓRMULAS----------------------------
//==================================================

//-------TOTALES

function calcularTotalNotificados (enfermedad) {
return baseCompleta.filter(el=>el.EVENTO == enfermedad)
}

function calcularPorSexo (arr, sexo) {
  return arr.filter(el=>el.SEXO == sexo).length

}

function calcularEventoPorSexo (enfermedad, sexo) {
  return baseCompleta.filter(el=>el.EVENTO == enfermedad && el.SEXO == sexo)
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

//-------------Dengue---------------------------------------------------------------------
//-------------array total
const arrayTotalNotificadosDengue = calcularTotalNotificados("Dengue");

//------------valores totales
const numeroTotalNotificadosDengue = arrayTotalNotificadosDengue.length;

//--------------por sexo
const numeroTotalNotificadosDengueFemenino = calcularPorSexo(arrayTotalNotificadosDengue, "F");
const numeroTotalNotificadosDengueMasculino = calcularPorSexo(arrayTotalNotificadosDengue, "M");
const numeroTotalNotificadosDengueSd = calcularPorSexo(arrayTotalNotificadosDengue, "NA")





console.log(numeroTotalGeneralNotificadosSifilisSd);









 const data = { anio, setBaseCompleta, numeroTotalGeneralNotificadosSifilis, numeroTotalGeneralNotificadosHiv, numeroTotalNotificadosTuberculosis, numeroTotalNotificadosDengue, numeroTotalGeneralNotificadosSifilisFemenino, numeroTotalGeneralNotificadosSifilisMasculino, numeroTotalGeneralNotificadosSifilisSd, numeroTotalNotificadosSifilisCongenita, numeroTotalNotificadosSifilisEmbarazadas, numeroTotalGeneralNotificadosHivFemenino, numeroTotalGeneralNotificadosHivMasculino, numeroTotalGeneralNotificadosHivSd, numeroTotalNotificadosHivPerinatal, numeroTotalNotificadosHivEmbarazo, numeroTotalNotificadosTuberculosisFemenino, numeroTotalNotificadosTuberculosisMasculino, numeroTotalNotificadosTuberculosisSd, numeroTotalNotificadosDengueFemenino, numeroTotalNotificadosDengueMasculino, numeroTotalNotificadosDengueSd }

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}

export { DataProvider };
//export context
export default DataContext;


