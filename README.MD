Advice Generator App
Una aplicación web sencilla e interactiva que genera y muestra consejos al azar utilizando la Advice Slip API. Es una solución perfecta para practicar peticiones a APIs con JavaScript y para construir interfaces dinámicas.

✨ Características Principales
Generación de Consejos al Azar: Obtiene un nuevo consejo cada vez que se presiona el botón.
Interfaz Limpia y Moderna: Un diseño de tarjeta centrado, con una paleta de colores oscuros y agradables.
Estado de Carga Interactivo: El botón muestra una animación de carga mientras se espera la respuesta de la API, evitando clics duplicados.
Diseño Responsivo: Se adapta correctamente a diferentes tamaños de pantalla, tanto en dispositivos móviles como de escritorio.
Manejo de Errores: Muestra un mensaje amigable si la API no responde o si ocurre un error en la red.
🚀 Tecnologías Utilizadas
Este proyecto fue construido utilizando tecnologías web fundamentales:

HTML5: Para la estructura y el contenido semántico de la aplicación.
CSS3: Para el diseño, la maquetación y las animaciones.
Uso de Variables CSS (Custom Properties) para una gestión de temas y colores más sencilla.
Flexbox para centrar y alinear los elementos de la interfaz.
Animaciones (@keyframes) para el feedback visual del estado de carga.
JavaScript (ES6+): Para la lógica de la aplicación y la interactividad.
Fetch API: Para realizar peticiones asincrónicas a la API externa.
Promesas (.then/.catch/.finally): Para manejar el flujo de las operaciones asincrónicas de manera eficiente.
Manipulación del DOM: Para actualizar dinámicamente el contenido de la página con el nuevo consejo.
⚙️ ¿Cómo usarlo?
No se necesita ninguna instalación especial ni dependencias. Simplemente sigue estos pasos:

Clona o descarga este repositorio:
Bash

git clone https://github.com/tu-usuario/advice-generator-app.git
Navega a la carpeta del proyecto:
Bash

cd advice-generator-app
Abre el archivo index.html en tu navegador web preferido.
¡Y listo! Ya puedes empezar a generar consejos.

📂 Estructura del Proyecto

```
/
|-- index.html      # El archivo principal con la estructura de la página.
|-- styles.css      # La hoja de estilos que define la apariencia.
|-- script.js       # El script que contiene toda la lógica de la aplicación.
|-- README.md       # Este archivo.
```
🔗 API de Referencia
Este proyecto utiliza la API pública y gratuita Advice Slip API.

Endpoint principal: https://api.adviceslip.com/advice
Documentación: https://api.adviceslip.com/