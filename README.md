## Descripción
Una aplicación web interactiva diseñada para la búsqueda de películas que trabaja con la API de TMDB. El proyecto permite buscar películas. 

## Tecnologías Utilizadas
  - **HTML5:** Estructura semántica para la accesibilidad.
  - **CSS:** Diseño responsive mediante Media Queries y maquetación con Flexbox y Grid.
  - **JavaScript (ES6+):**
    - Manipulación del DOM: Renderizado dinámico de películas.
    - API de TMDB: Se realizan solicitudes a una API externa. https://developer.themoviedb.org/docs/getting-started

## Desafíos Técnicos y Aprendizaje
Tuve una complicación a la hora de agregar la funcionalidad al evento del input. Primero creé la app de tal manera que cada letra ingresada en el buscador hace un fetch a la API, pero esto podría saturar la API y ralentizar la app. Debido a estre problema tuve que buscar en la documentación oficial del uso de la API donde encontré una url que TMDB proporciona para filtrar las películas en base a parámetros proporcionados por el usuario.

## Funcionalidades Clave
  - **Búsqueda:** Los usuarios pueden buscar sus películas favoritas y leer su overview.

## Cómo ejecutar el proyecto
  1- Clona el repositorio
  2- Abre el archivo index.html en tu navegador.
  
## Instalación
"Para ejecutar este proyecto, crea un archivo `config.js` y añade tu API Token de TMDB de la siguiente manera: `const TOKEN = 'tu_token';`"

## Mejoras futuras
  - Añadir una sección para buscar actrices y actores.

