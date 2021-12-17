### Aplicaciones Interactivas | 2C 2021 | VIERNES NOCHE | UADE - TPO INDIVIDUAL|
Tecnologias utilizadas: REACT.JS| HTML5 | CSS3 | ANT DESIGN UI | NODE.JS |

para poder ejecutar la aplicacion:
- clonar repo 
- abrir el proyecto con editor y/o desde cmd en la carpeta del proyecto hacer  `npm install`
- inicializarla con `npm start` `npm test` segun corresponda el puerto es http://localhost:3000
### Consigna 📒: 
desarrollar una aplicación web que permitirá gestionar controles pediátricos
# REQUISITOS FUNCIONALES
### SITIO INSTITUCIONAL
La aplicación debe incluir un sitio institucional en donde se promocione las funcionalidades del sistema y se publiquen artículos informativos.
Debe incluir como mínimo:

- Descripción de la aplicación: Explicación de las funcionalidades disponibles para los usuarios
- Registro de nuevos usuarios
- Ingreso a la aplicación
- Artículos de información general
- Calendario de vacunación
- Información sobre controles médicos
- Percentiles y parámetros generales de control
### REGISTRO NUEVOS USUARIOS
Los usuarios podrán registrarse para utilizar la aplicación, para ello deberán completar un formulario con la siguiente información: nombre y apellido, DNI, mail, número de teléfono.
No se permitirá registrar usuarios con el mismo DNI.
### INGRESO USUARIOS
Los usuarios podrán ingresar a la aplicación con su mail y contraseña. Tendrán la posibilidad de solicitar una nueva en caso de olvidarla mediante la opción OLVIDE CONTRASEÑA. Se recomienda utilizar algún criterio de validación para el reseteo de la misma.
### PERFIL USUARIOS REGISTRADOS
Los usuarios registrados podrán gestionar los controles de sus niños desde su perfil. El perfil debe registrar la siguiente información como mínimo: nombre y apellido, DNI, mail, teléfono celular, información de los niños a controlar (nombre, fecha de nacimiento, grupo sanguíneo, alergias, enfermedades crónicas (celiaquía, intolerancia lactosa, diabetes, etc.))
### REGISTRO DE CONTROL PEDIATRICO
Los usuarios podrán registrar un nuevo control pediátrico a cada niño de su perfil. Un control pediátrico registra para un niño: fecha, peso, altura, diámetro cabeza (se mide hasta el año), observaciones, medicamentos recetados (medicamento, dosis, periodo), estudios médicos a realizar y sus resultados.
### REGISTRO DE VACUNAS
Los usuarios podrán registrar cada una de las vacunas aplicadas a los niños. Para ello el sistema debe contar con una replica del calendario de vacunación y permitir al usuario completar el mismo ingresando en la vacuna correspondiente la fecha y lugar de aplicación.
### CONSULTA DE PERCENTILES
Los usuarios podrán comparar los controles de sus hijos con los percentiles de Curva de Crecimiento ofrecidos por la OMS.
Para ello el usuario podrá visualizar todos los controles del niño en una tabla (Edad, peso, talla o altura, circunferencia cefálica y el grafico correspondiente.
