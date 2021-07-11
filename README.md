# BankClient ID Scanning

Se trata de un app de captura de imagen que toma fotografías automáticamente y las valida con ayuda de una API. [Puedes verla en funcionamiento aquí](https://mariaozamiz.github.io/z1-frontend-developer/).

![Captura de pantalla](https://github.com/mariaozamiz/z1-frontend-developer/blob/master/src/images/bankclient.jpg?raw=true)


## Instalación

1. Descarga el repositorio.
2. Instala las dependencias con ```npm install```.
3. Arranca el proyecto con ```npm start```.
   

## Tecnologías utilizadas

- React (hooks), TypeScript y CSS.


### Captura de imagen 🎬

- Pulsando "take picture" nos dirigiremos a la interfaz de la cámara. Para ello he utilizado ```react-router```.
- Si la app no puede acceder a la cámara, ya sea porque el permiso haya sido denegado o cualquier otro problema, surgirá una alerta informando a la persona usuaria.
- Si la app se usa desde un móvil, se activará la cámara trasera gracias a la especificación de ```facingMode```. De lo contrario, se activaría la frontal por defecto.
- Se toman capturas del video automáticamente cada dos segundos.
- Por cada captura, se hace una petición a la API, que responderá informando de la validez de la foto.
-  Si la imagen no es válida, seguirá mostrándose la captura de vídeo acompañada de un borde rojo y un mensaje de advertencia: "Room lighting is too low".
-  Se continúa tomando fotografías hasta que la imagen sea válida.

### Muestra de imagen 📸

-  Cuando la imagen resulta válida, se intercambia el vídeo por la última foto. La imagen estará rodeada de un borde verde y un mensaje que indica "Picture taken!".

### Cancelar ❌

- Podemos detener la captura de imágenes en el modo cámara y volver a la página principal pulsando el botón cancelar. Esta acción detiene la captura de video.
  

## Así me ha ido 💃

Comencé el ejercicio por la creación de componentes, aplicando un CSS básico. Al crear aplicaciones me gusta ajustarme a la propuesta de diseño y disfruto traduciéndola a código. Sin embargo, no he estilado como me gustaría la interfaz de video (tendría que investigar más sobre las posibilidades de este elemento). Tampoco he refactorizado los estilos con Styled Components o CSS Modules como tenía previsto, por falta de tiempo.

Con el tiempo del que disponía, me centré en aquellas funcionalidades que, en mi opinión, aportaban más valor al cliente, por lo que la validez y captura de la imagen se resuelven en la interfaz de cámara.


## Roadmap 🗺️

Con más tiempo, implementaría lo siguiente:

- Enviar la imagen capturada, mediante lifting, a la pantalla de inicio y mostrar los mensajes de "Accepted" o "Rejected", según el caso, así como el botón "Retake image".
- Incorporar los estilos mediante CSS Modules (llegué a utilizar Styled Components en otro proyecto y me gustaría probar con Modules).