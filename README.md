This is a demo project to show how to export on browser a JSON datasource to Excel xlsx file using the xlsx library to format the workbook and file-save library to push download the file into browser.
The project is created with angular-cli version 1.1.0.
The demo is implemented on app.component and will run out of the box with ng serve -o (angular/cli should be installed and npm install/yarn executed before).

To creat a similar project follow the steps:
ng new xlsxTest (Angular CLI should be installed)
npm install xlsx --save *or* yarn add xlsx
npm install file-saver --save *or* yarn add file-saver
modify "no-bitwise": false into tslint.json

Dependencies:
xlsx - https://github.com/SheetJS/js-xlsx
file-saver (used to be able to make a downloadable file on browser) - https://github.com/eligrey/FileSaver.js/

This is just a demo project for the particular json to xlsx function, for more complex usage or other functions, please follow the official lib documetation at https://github.com/SheetJS/js-xlsx

# XlsxJsonToXlsx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
