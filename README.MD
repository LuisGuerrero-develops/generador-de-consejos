irlos al español en tiempo real. Es una demostración práctica del manejo de solicitudes asincrónicas en cadena con fetch y Promesas en JavaScript.

📸 Vista Previa

![Vista previa del generador de consejos](./assets/README.png)

🚀 Características
- **Consejos al Azar**: Obtiene consejos de la API pública [Advice Slip](https://api.adviceslip.com/).
- **Traducción Automática**: Utiliza la API [MyMemory](https://mymemory.translated.net/doc/spec.php) para traducir el texto de inglés a español.
- **Asincronía Moderna**: Usa `fetch` y la sintaxis `.then()`, `.catch()` y `.finally()` para manejar las solicitudes de red.
- **Feedback al Usuario**: Muestra un estado de "carga" en el botón para indicar que una operación está en curso.
- **Manejo de Errores**: Captura y muestra errores en la interfaz si alguna de las APIs falla.
- **Sin Dependencias**: Construido con HTML, CSS y JavaScript puro.

🧩 Estructura de Archivos

generador-de-consejos/
```
├── index.html         # La estructura de la página
├── style.css          # Los estilos visuales y la animación de carga
├── script.js          # Toda la lógica de la aplicación
└── README.md          # La documentación que estás leyendo
```

🛠️ Cómo Usar
Simplemente clona este repositorio o descarga los archivos y abre index.html en tu navegador web. No se requiere ningún paso de compilación o instalación.

Bash

# Opcional: Si usas Git
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO

🧪 Personalización

Cambiar el Idioma: En script.js, puedes modificar la URL de la API de traducción. Cambia el parámetro langpair=en|es por el par de idiomas que prefieras (ej. en|fr para traducir a francés).

JavaScript

const TRANSLATE_API_URL = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(englishAdvice)}&langpair=en|fr`;

Modificar Estilos: Todos los aspectos visuales, como colores, fuentes y la apariencia del botón de carga, se pueden personalizar en el archivo style.css.

Usar otras APIs: Puedes cambiar las constantes ADVICE_API_URL y TRANSLATE_API_URL para conectarte a otros servicios que ofrezcan funcionalidades similares.
