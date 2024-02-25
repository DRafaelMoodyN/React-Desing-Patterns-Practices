# nvm

nvm install node
nvm install 19.0.0
nvm lis
nvm use v19.0.0

# vite

npm install -g create-vite
create-vite my-react-app --template react-ts

npm install
npm run dev

# Archivo de configuración de TypeScript

tsconfig.json indica que el directorio es la raíz de un Proyecto mecanografiado.
El archivo tsconfig.json especifica los archivos raíz y las opciones del compilador
necesarias para compilar el proyecto.

TypeScript: https://www.typescriptlang.org/tsconfig.

# Babel

Babel es un compilador de JavaScript
Permite a los desarrolladores escribir código utilizando las últimas funciones de lenguaje,
como JSX y ES6, que quizás aún no sean compatibles en todos los navegadores.

# install babel

Instale los paquetes necesarios globalmente (aunque generalmente se prefieren las instalaciones locales):
npm install -g @babel/core @babel/node
npm install @babel/core @babel/node

Para compilar un archivo JavaScript usando Babel, ejecute:
babel source.js -o output.js

Babel es altamente configurable y puedes personalizarlo usando ajustes preestablecidos. Para instalar la mayoría
ajustes preestablecidos comunes, ejecute:
npm install @babel/preset-env @babel/preset-react

Cree un archivo de configuración .babelrc en el directorio raíz de su proyecto y agregue lo siguiente
contenido para decirle a Babel que use los ajustes preestablecidos instalados

Ahora, puede escribir ES6 y JSX en sus archivos fuente, y Babel los transpilará a código JavaScript ES5 compatible con el navegador.

# Eslint

npm install -g eslint eslint-config-airbnb eslint-config-prettier eslintplugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-pluginreact

eslint source.ts
