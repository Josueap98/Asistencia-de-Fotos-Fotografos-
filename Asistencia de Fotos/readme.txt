Elaborado por Josué Pérez 23/11/23

Asistencia de Alumnos o Clientes para llevar control de fotografia

En este proyecto se lleva a cabo la implementacion de Google App Script y Google Sheets;
Para llevar un control de la toma de fotografia con forme al orden que se toman las fotos;
Este proyecto se le implementa un QR que se escanea y al escanear el QR se corre una aplicacion;
Que muestra un Script que muestra el Nombre del Plantel, Alumno, Paquete de fotografia, Extras;
Y la hora de la toma de la foto, y dando a escoger quien va a tomar la foto.

----------------------------Pasos a seguir-----------------------------------------

#1 Crear un proyecto en appScript de Google y una hoja de calculo destino;
#2 Copiar los archivos con nombre de preferencias al proyecto creado;
#3 Modificar el codigo al gusto, como los nombres y datos a guardar;
#4 Obtener el id de la hoja de calculo y sustituir en (id de la hoja de calculo destino);
#5 Cambiar el (nombre del libro de calculo temporal) por el suyo;
#6 Crear una implementacion y sustituir en (URL de la implementacion 1);
#7 En (Hoja de template .html) poner el nombre de tu archivo html del proyecto;
#8 Crear una segunda implementacion e ingresarlo a tu QR
#9 Cambiar el nombre de tu (archivo final de .html) que se mostrara al haber escaneado el codigo;
#10 Compilar todo y Listo!!!

----------------------------------------------------------------------------------------

En colaboracion de ReneM.

Google appScript
Google Spreadsheet

------------------------------------Formulas------------------------------------------------

=ARRAYFORMULA(SI(C2:C<>"";"?nombre="&F2:F&"&grupo="&E2:E&"&paquete="&G2:G&"&extra="&J2:J;"")); //parametros a leer
=ARRAYFORMULA(SI(O2:O<>"";"segundo script"&O2:O;"")) //script que guarda los parametros leidos
=ARRAYFORMULA(SI(P2:P<>"";"https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl="&ENCODEURL(P2:P);"")) //generador de los QR

