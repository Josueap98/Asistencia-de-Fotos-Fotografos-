function doGet(e){
  const fecha = new Date().toLocaleString("es-MX", {timeZone:"America/Los_Angeles"});
  Logger.log(e.parameter)
  const userData = {
    plantel: e.parameter.plantel,
    nombre: e.parameter.nombre,
    grupo: e.parameter.grupo,
    paquete: e.parameter.paquete,
    extra: e.parameter.extra,
    fecha: fecha
  }
  registrarAsistencia(e.parameter.plantel, e.parameter.nombre, e.parameter.grupo, e.parameter.paquete, e.parameter.extra);

  var template = HtmlService.createTemplateFromFile('Hoja de template .html');
  template.pubUrl = "URL de la implementacion 1";
  template.userData = userData;
  
  var output = template.evaluate();
  return output;
}
function obtenerContenidoHTML(pagina='Hoja de template .html'){
  const contenidoHTML = HtmlService.createHtmlOutputFromFile(pagina).getContent();
  console.log(contenidoHTML);
}

  // Damos retroalimentación sobre lo que sucedió:

function registrarAsistencia(plantel, nombre, grupo, paquete, extra) {

  Logger.log(nombre)
  // Debes cambiar este identificador por el de tu documento de hoja de cálculo
  const sheet = SpreadsheetApp.openById("id de la hoja de calculo destino ");
  const asistencia = sheet.getSheetByName("nombre del libro de calculo temporal");
  asistencia.getRange(2, 1).setValue(plantel);
  asistencia.getRange(2, 2).setValue(nombre);
  asistencia.getRange(2, 3).setValue(grupo);
  asistencia.getRange(2, 4).setValue(paquete);
  asistencia.getRange(2, 5).setValue(extra);
  asistencia.getRange(2, 6).setValue(new Date());

}

function doPost(e){
  console.log(e);
  var sheet = SpreadsheetApp.openById("id de la hoja de calculo destino");
  var sheetPersona = sheet.getSheetByName("nombre del libro de calculo temporal");

  const sheetTemporalData = sheet.getSheetByName("nombre del libro de calculo temporal");
  const values = sheetTemporalData.getDataRange().getValues()[1]
  Logger.log(values)
  const userData = {
    fotografo:e.parameter.opciones,
    plantel: values[0],
    nombre: values[1],
    grupo: values[2],
    paquete: values[3],
    extra: values[4],
    fecha: values[5]
  }
  const asistencia = sheet.getSheetByName("nombre del libro de calculo destino final");
  const lastRow = asistencia.getLastRow() + 1;
  asistencia.getRange(lastRow, 1).setValue(userData.fotografo);
  asistencia.getRange(lastRow, 2).setValue(userData.plantel);
  asistencia.getRange(lastRow, 3).setValue(userData.nombre);
  asistencia.getRange(lastRow, 4).setValue(userData.grupo);
  asistencia.getRange(lastRow, 5).setValue(userData.paquete);
  asistencia.getRange(lastRow, 6).setValue(userData.extra);
  asistencia.getRange(lastRow, 7).setValue(userData.fecha);

  var opciones = e.parameter.opciones;

  //sheetPersona.appendRow([opciones]);

  return HtmlService.createTemplateFromFile('archivo final de .html').evaluate();

}