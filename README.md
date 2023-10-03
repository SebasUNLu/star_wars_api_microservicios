<h1 align="center">Upskilling Backend 3</h1>

<div align="center">
  Proyecto de Backend orientado a microservicios.
</div>

## Tabla de Contenidos

- [Introducción](#introducción)
- [Servicios](#servicios)
- [Funcionamiento](#funcionamiento)
- [Tecnologías](#tecnologías)
- [Contacto](#contacto)

## Introducción

En este repositorio se presenta el proyecto final a entregar del curso de Upskill Backend, orientado a Microservicios, ofrecido por el bootcamp Henry.

Se presenta una estructura de microservicios individuales, cada uno con sus tareas bien definidas, todos deployados en una máquina virtual hosteada en Google Clouds y utilizando la tecnología Docker para levantar los microservicios en contenedores.

Se utiliza para el almacenado de los datos una Base de Datos NoSQL de MongoDB, que guarda colecciones de los documentos nombrados como Characters, Films y Planets. Estos datos tienen de temática la popular saga de películas Star Wars.

La siguiente imagen explica la estructura descrita:

![Estructura](<Upskill Structure.drawio.png>)

## Servicios

A continuación se dará una descripción de cada microservicio y otros servicios que participa:

### Microservicio Gateway

El punto de entrada de la estructura, es el único microservicio que está expuesto hacia afuera de la máquina virtual, en el puerto 8000. Este se encarga, a través de un proxy, de redirigir las consultas a /characters, /films y /planets hacia sus respectivos servicios, para que manejen la solicitud.

### Microservicios Characters, Films y Planets

Son los microservicios representativos de cada documento existente en la base de datos. Estos representan las accioens que pueden tomarse de cada documento (leer, crear, modificar y borrar) y encargados de comunicarse con el microservicio de Database para llevarse a cabo dichas acciones.

### Microservicio Database

Este microservicio se encarga de comunicarse con la base de datos y hacer las transacciones oredenadas. Contempla los documentos Characters, Films y Planets y permite hacer GET, POST, PUT, y DELETE de cada uno.

### Base de Datos MongoDB

La base de datos NoSQL utilizada para almacenar los datos.

## Funcionamiento

1. Desde un cliente deseado (puede ser Insomnia o Postman, o una aplicación Front-end) se hace una petición http al gateway de la aplicación deployado en la máquina virtual
```bash
http://<public_VM_ip>:8000/<model>
```
Por ejemplo, si queremos obtener todos los personajes, realizaremos la siguiente consulta:
```bash
GET http://<public_VM_ip>:8000/characters
```

2. El gateway al recibir la petición primero revisa el modelo utlizado en la consulta. Si es /characters, /films o /planets, redirigirá la petición hacia el microservicio correspondiente. De lo contrario, devolverá 404 Route Not Found.

3. El microservicio del modelo que recibe la petición, en caso de que la ruta sea correcta, llamará a la función del controlador correspondiente, y este hará una llamada fetch a través de Axios hacia
```bash
http://database:8004/<model>
```
Como se utilizó docker-compose para levantar los contenedores, este ya se encargó de configurar la red por la que se comunican y los host names de cada contenedor. Gracias a esto, en la llamada Axios solo basta con mandarselo a "database".

4. El microservicio database recibe la petición y este se comunica con la base de datos y hacer las transacciones necesarias para satisfacer la petición.

5. En caso de que todo haya salido bien, se devolverá la respuesta de vuelta al cliente. 

## Tecnologías

- Javascript
- Docker
- Docker Compose
- Google Clouds

## Contacto

- GitHub: [SebasUNLu](https://github.com/SebasUNLu)
- Linkedin: [Sebastián Marchetti](https://www.linkedin.com/in/sebasti%C3%A1n-pedro-marchetti/)
