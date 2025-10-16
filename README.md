# Programaci-n-web
En este repositorio se realizarán cada uno de los ejercicios de programación web, haciendo una rama por cada ejercicio, hacinendo uso de la correcta utilización de los commits



## Secure Links

Aplicación que genera enlaces seguros de un solo uso, similar a scrt.link. Permite crear un enlace con un mensaje secreto que solo puede visualizarse una vez.

## Instrucciones para ejecutar la aplicación

### Requisitos previos:

Docker

Docker Compose

### Ejecución con Docker:

Clonar el repositorio:
git clone https://github.com/tu-usuario/secure-links.git

cd secure-links

### Levantar todos los servicios (backend, frontend y Redis):
docker compose up

Abrir en el navegador:
Frontend: http://localhost:3000

Backend: http://localhost:8000/docs

Uso:

En el frontend, escribe tu mensaje secreto y presiona “Crear enlace”.

presional el enlace generado.

Al abrir ese enlace, el mensaje se mostrará una sola vez.

Si se vuelve a abrir, mostrará “Este secreto ya fue revelado o no existe.”