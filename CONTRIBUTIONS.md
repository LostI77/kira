# CONTRIBUTIONS

¡Gracias por contribuir a este proyecto! Para garantizar que las contribuciones sean eficientes y organizadas, sigue los pasos descritos a continuación.

## 1. Hacer un Fork y Clonar el Repositorio

- **Fork**: Ve al repositorio en GitHub y haz clic en el botón "Fork" en la esquina superior derecha. Esto creará una copia del proyecto en tu cuenta.
- **Clonar**: Luego de hacer el fork, clona tu versión del repositorio con el siguiente comando:
  ```bash
  git clone https://github.com/tu-usuario/kira.git
  cd kira
  ```
- **Instalar dependencias**: Una vez dentro del proyecto, instala todas las dependencias ejecutando:
  ```bash
  npm install
  npm i
  ```

## 2. Crear una Rama Nueva

- Antes de comenzar a trabajar, crea una nueva rama específica para tu funcionalidad (o "feature"). El nombre debe ser descriptivo, usando Kebab Case, para reflejar claramente lo que estás haciendo:
  ```bash
  git branch feature/nueva-funcionalidad
  ```
- Esto te permite trabajar en tu funcionalidad de manera aislada sin afectar el código en la rama `main`.
- Accede a la rama en la que vas a trabajar con `git switch`. Para acceder a ella debes usar el mismo nombre con el cual creaste tu rama:
  ```bash
  git branch # Escribir este comando sin el nombre de la rama te mostrara las ramas existentes.
  git switch feature/nueva-funcionalidad # Te llevara a la rama para que empiezes a trabajar
  ```

## 3. Desarrollar la Funcionalidad

- Asegúrate de seguir la estructura del proyecto bajo el directorio `src`. Aquí tienes un desglose de las carpetas importantes:
  - **assets**: Archivos estáticos como imágenes o íconos.
  - **lib**: Utilidades y funciones comunes que pueden ser reutilizadas en varias partes del proyecto.
  - **pages**: Wrappers que combinan componentes, composites, y sections para construir páginas completas. Cualquier vista completa debe vivir aquí.
  - **tasks**:
    - **errors**: Ejemplos de malas prácticas. Revisa este directorio para evitar errores comunes.
    - **taskfiles**: Guías específicas de tareas que debes completar. Revisa estos archivos antes de comenzar a desarrollar una nueva funcionalidad para evitar duplicación de trabajo o errores.
  - **ui**: Componentes, composites y elementos de la interfaz. Sigue esta estructura cuando crees nuevos componentes.
- Prioriza trabajar en la funcionalidad para la cual creaste la rama. Evita modificar otros componentes a menos que sea estrictamente necesario.

## 4. Mantener tu Rama Actualizada

- Antes de hacer un push, asegúrate de que tu rama esté sincronizada con la rama `main`. Esto evita conflictos y asegura que estás trabajando sobre la versión más reciente:
  ```bash
  git fetch origin
  git merge origin/main
  ```
- Si hay conflictos, resuélvelos de manera local. Asegúrate de que el código compile y funcione correctamente.

## 5. Hacer un Push y Crear una Pull Request (PR)

- Una vez que hayas terminado, sube tus cambios al repositorio remoto:
  ```bash
  git push origin feature/nueva-funcionalidad
  ```
- Ve a GitHub y crea una Pull Request (PR) desde tu rama hacia `main`. En el PR, describe detalladamente:
  - Qué cambios has realizado.
  - Qué funcionalidad has desarrollado.
  - Cómo probar estos cambios, si es necesario.
- Asegúrate de que tu PR siga la estructura del proyecto y los estándares de código.

## 6. Estándares de Código

- **Kebab Case**: Usa Kebab Case para nombres de componentes, carpetas y archivos (`mi-componente.tsx`, `product-card.tsx`).
- **Directorios**: Sigue la estructura del proyecto:
  - `src/ui/components`: Para componentes reutilizables.
  - `src/ui/composites`: Para componentes más grandes que combinan varios más pequeños.
  - `src/ui/layout`: Para elementos estructurales de la página (header, footer, etc.).
  - `src/pages`: Para combinaciones de componentes que formen páginas completas.
  - `src/tasks/errors`: Revisa los ejemplos de malas prácticas antes de comenzar a desarrollar.
  - `src/tasks/taskfiles`: Cumple con las guías y especificaciones aquí definidas.
- **Commits**: Los mensajes de commit deben ser descriptivos. Evita mensajes genéricos como "cambios" o "actualización".

---

Siguiendo estos pasos, garantizamos que el proyecto se mantenga organizado y eficiente. ¡Gracias por tu colaboración!
