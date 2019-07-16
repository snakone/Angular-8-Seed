# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
"# Angular-8-Seed"

# Angular 8 Seed
Starter App with Angular 8

This is all You actually need to start a fresh professional Angular 8 App, following best practices and scaffolded with the most and useful modules and services including:

# Core Module

CoreModule is a conventional name for an NgModule with providers for the singleton services you load when the application starts. Includes LanguageService and ErrorHandlerService.

# Shared Module

SharedModule is a conventional name for an NgModule with the components, directives, and pipes that you use everywhere in your app.

# Http Service

Get data from any API with the public get() method. Accepts HttpHeader and HttpParams as arguments.

# Translation Service

Translate your App easy way by just creating a json file at 'assets/i18n/' following other languages pathern's.

* Here is how a JSON should lools like

{"home.welcome": "Welcome!"}

* On the HTML you can call this simply

{{'home.welcome' | translate}}, make sure the parameter it's an string

# Error Handler Service

Customize your Error messages with this Service.

# Components Module

Used to combine all shared components within your application such cards, inputs, footers, headers, etc...

# PWA Support

Progressive Web App Support

# Pipes, Interfaces Modules

This modules are prepared so you just need to create your Pipes and Interfaces and you are ready to go.

