Descargar node.js (LTS). Instalar chocolate
comprobar versión node -> node --version
npm install -g @angular/cli
ng new nombreProyecto --standalone=false
ng g c nombreComponente
ng g s nombreServicio
ng g interface nombreInterfaz
ng g interceptor nombreInterceptor
ng g g nombreGuard
ng add @ng-bootstrap/ng-bootstrap
npm i bootstrap-icons
@import "boostrap/scss/bootstrap"; /* en styles.scss comprobar si no está y se
instaló por comando bootstrap */

en angular.json añadimos la línea: "node_modules/bootstrap-icons/font/bootstrap-icons.css"
  - Esta línea añadida en angular.json solo se añadirá si se instaló
  previamente bootstrap-icons.
  - La línea se ha de añadir en los dos apartados
  "styles": []. suelen estar en  la línea 41 y 105 del archivo angular.json.