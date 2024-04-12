# Proyecto API REST con Node JS y MongoDB
# Realizado por Hernández Solis Juan Daniel


Bienvenido al proyecto API REST con Node JS y MongoDB. 
Este proyecto es una aplicación que realiza las operaciones HTTP (CRUD) para obtener la información de 
las carreras que se ofertan en en ITL León, así como sus especialidades y las materias por especialidad

## Instrucciones de instalación

Para instalar y configurar el proyecto, sigue estos pasos:

1. Clona este repositorio a tu máquina local.
2. Instala las dependencias del proyecto ejecutando `npm install express mongoose nodemon `.
3. Verifica que los puertos 27018:27017 (MongoDB) y 3001:3000 (API) esten libres en tu computadora.

## Instrucciones de uso

Una vez que el proyecto esté instalado, puedes usarlo de la siguiente manera:

1. Ejecuta en la terminal docker compose up
2. Una vez tengas los contenedores creados, conectate desde un cliente para consumir tu api, tales como:
- Postman (Descargar)
- Thunder (Extension de VS Code)
3. Una vez estando en el cliente, ingresa las siguientes url depende lo que desees hacer:
# ####################GET#####################################
# Para obtener todas las carreras que se ofertan:
- Ingresa (http://localhost:3001)
# Para obtener las especialidades por carrera:
- Ingeniería Industrial (IIND) :                                                   Ingresa (http://localhost:3001/IIND)
- Ingeniería en Sistemas Computacionales (ISC) :                                   Ingresa (http://localhost:3001/ISC)
- Ingeniería en Tecnologías de la Información y Comunicaciones (ITIC) :            Ingresa (http://localhost:3001/ITIC)
- Ingeniería en Gestión Empresarial (IGE) :                                        Ingresa (http://localhost:3001/IGE)
- Ingeniería Electrónica (IELC) :                                                  Ingresa (http://localhost:3001/IELC)
- Ingeniería Electromecánica (IEME) :                                              Ingresa (http://localhost:3001/IEME)
- Ingeniería Mecatrónica (IMCT) :                                                  Ingresa (http://localhost:3001/IMCT)
- Ingeniería en Logística (ILOG) :                                                 Ingresa (http://localhost:3001/ILOG)

# Para acceder, actualizar o borrar a las materias por especialidad (GET),(PUT),(DELETE):
- Ingeniería Industrial (IIND) :                                       
Ingresa : 
 - http://localhost:3001/IIND/Manufactura%20en%20art%C3%ADculos%20de%20piel
 - http://localhost:3001/IIND/Ingenier%C3%ADa%20en%20manufactura%20y%20calidad
- Ingeniería en Sistemas Computacionales (ISC) :                      
 Ingresa: 
 - http://localhost:3001/ISC/Desarrollo%20de%20Aplicaciones%20Empresariales
 - http://localhost:3001/ISC/Redes%20Convergentes%20de%20Alta%20Disponibilidad
- Ingeniería en Tecnologías de la Información y Comunicaciones (ITIC) :
 Ingresa :
 - http://localhost:3001/ITIC/Gesti%C3%B3n%20de%20Servicios%20de%20T.I
- Ingeniería en Gestión Empresarial (IGE) :                            
 Ingresa : 
 - http://localhost:3001/IGE/Gesti%C3%B3n%20de%20la%20calidad%20e%20innovaci%C3%B3n%20de%20procesos
- Ingeniería Electrónica (IELC) :                                     
 Ingresa :
 - http://localhost:3001/IELC/Electr%C3%B3nica%20en%20procesos%20Empresariales
- Ingeniería Electromecánica (IEME) :                                  
 Ingresa : 
 - http://localhost:3001/IEME/Electromec%C3%A1nica%20emergente
- Ingeniería Mecatrónica (IMCT) :                                      
Ingresa :
 - http://localhost:3001/IMCT/Mecatr%C3%B3nica%20Empresarial
- Ingeniería en Logística (ILOG) :                                    
 Ingresa :
 - http://localhost:3001/ILOG/Log%C3%ADstica%20Empresarial

# En dado caso de que no se hayan guardado los datos en la base de datos al compartir el contenedor a continuacion el SCRIPT de JSON para que se ingresen los datos mediante la funcion POST
[
  {
    "idCarrera": "IIND",
    "Nombre": "Ingeniería Industrial",
    "Especialidad": "Manufactura en artículos de piel",
    "Campus": "Campus 1",
    "Materias": "Diseño y modelado, Core Tools, Tecnología y taller"
  },
  {
    "idCarrera": "IIND",
    "Nombre": "Ingeniería Industrial",
    "Especialidad": "Ingeniería en manufactura y calidad",
    "Campus": "Campus 1",
    "Materias": "Diseño asistido por computadora, Robótica Industrial"
  },
  {
    "idCarrera": "ISC",
    "Nombre": "Ingeniería en Sistemas Computacionales",
    "Especialidad": "Desarrollo de Aplicaciones Empresariales",
    "Campus": "Campus 1",
    "Materias": "Fundamentos de programación, POO, Tópicos de Programación"
  },
  {
    "idCarrera": "ISC",
    "Nombre": "Ingeniería en Sistemas Computacionales",
    "Especialidad": "Redes Convergentes de Alta Disponibilidad",
    "Campus": "Campus 1",
    "Materias": "Redes, Administración de Redes, Conmutación"
  },
  {
    "idCarrera": "ITIC",
    "Nombre": "Ingeniería en Tecnologías de la Información y Comunicaciones",
    "Especialidad": "Gestión de Servicios de T.I",
    "Campus": "Campus 1",
    "Materias": "Tecnologías Inalámbricas, Administración de Proyectos"
  },
  {
    "idCarrera": "IGE",
    "Nombre": "Ingeniería en Gestión Empresarial",
    "Especialidad": "Gestión de la calidad e innovación de procesos",
    "Campus": "Campus 1",
    "Materias": "Innovación de procesos, Calidad aplicada a la gestión"
  },
  {
    "idCarrera": "IELC",
    "Nombre": "Ingeniería en Electrónica",
    "Especialidad": "Electrónica en procesos Empresariales",
    "Campus": "Campus 2",
    "Materias": "Amplificadores operacionales, Instrumentación"
  },
  {
    "idCarrera": "IEME",
    "Nombre": "Ingeniería en Electromecánica",
    "Especialidad": "Electromecánica emergente",
    "Campus": "Campus 2",
    "Materias": "Sistemas eléctricos de potencia, Controles eléctricos"
  },
  {
    "idCarrera": "IMCT",
    "Nombre": "Ingeniería en Mecatrónica",
    "Especialidad": "Mecatrónica Empresarial",
    "Campus": "Campus 2",
    "Materias": "Dinámica de sistemas, Manufactura avanzada"
  },
  {
    "idCarrera": "ILOG",
    "Nombre": "Ingeniería en Logística",
    "Especialidad": "Logística Empresarial",
    "Campus": "Campus 1",
    "Materias": "Tráfico y transporte, Cultura de calidad"
  }
]



