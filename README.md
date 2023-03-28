# Data Lovers - Studio Ghibli





### Definición de producto

Se desarrolló una página web dirigida a los fans de Studio Ghibli, cuyo objetivo es consultar información acerca de las películas.

Esta información consta de:
- Título de la película
- Año de lanzamiento
- Director
- Descripción
- Puntuación
- Procentaje de personajes femeninos
- Procentaje de personajes masculino
- Procentaje de personajes sin género especificado

Además el contenido cuenta con:
- Ordenamiento de A - Z
- Ordenamiento de Z - A
- Ordenamiento de mayor a menor puntuación
- Ordenamiento de menor a mayor puntuación
- Ordenamiento de mayor a menor año
- Ordenamiento de menor a mayor año
- Filtrado por Director

## Historias de usuario

[Trello](https://trello.com/invite/b/Nko6slje/ATTI2f87e82cf3d754776db553f2d78cfd5cE981ADA3/data-lovers)


## Prototipo de baja fidelidad

![Prototipo de baja fidelidad](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

[Figma](https://trello.com/invite/b/Nko6slje/ATTI2f87e82cf3d754776db553f2d78cfd5cE981ADA3/data-lovers)

## Prototipo de alta fidelidad

![Prototipo de baja fidelidad](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


[Figma](https://trello.com/invite/b/Nko6slje/ATTI2f87e82cf3d754776db553f2d78cfd5cE981ADA3/data-lovers)

## Link 
URL: [Studio Ghibli](https://moniglz.github.io/DEV005-data-lovers/)
## Test de usabilidad

**Poder cerrar el modal dando click en otro espacio de la página**

### Solución: 
- Agregamos el evento click a window, validamos con target si el click se estaba haciendo dentro del modal, si esto era verdadero, se cerraba el modal.

**En la vista móvil se creaba un espacio en blanco cuando el contenido no abarcaba toda la pantalla**

### Solución: 
- Definir dentro de la media querie en la seccion de películas un height automático y un mínimo de height de 100vh.



## Authors

- [@moniglz](https://github.com/moniglz)
- [@ifdotcom](https://github.com/ifdotcom)

## Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

### CSS

- [ ] **Uso de selectores de CSS**

- [ ] **Modelo de caja (box model): borde, margen, padding**

- [ ] **Uso de flexbox en CSS**

### Web APIs

- [ ] **Uso de selectores del DOM**

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

- [ ] **Manipulación dinámica del DOM**
### JavaScript

- [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [ ] **Arrays (arreglos)**

- [ ] **Objetos (key, value)**

- [ ] **Variables (declaración, asignación, ámbito)**

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

- [ ] **Funciones (params, args, return)**

- [ ] **Pruebas unitarias (unit tests)**

- [ ] **Módulos de ECMAScript (ES Modules)**

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

### Centrado en el usuario

- [ ] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] **Seguir los principios básicos de diseño visual**

### Investigación

- [ ] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**


## Criterios de aceptación mínimos del proyecto

Los criterios para considerar que has completado este proyecto son:

- [ ] Definición del producto

- [ ] Historias de usuario

- [ ] Diseño de la Interfaz de Usuario

- [ ] Prototipo de baja fidelidad

- [ ] Prototipo de alta fidelidad

- [ ] Testeos de usabilidad

- [ ] Implementación de la Interfaz de Usuario (HTML/CSS/JS)

- [ ] Pruebas unitarias

## Checklist

* [ ] Usa VanillaJS.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.
