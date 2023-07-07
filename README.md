# Clips

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Stuff learned on the project

- Tailwind: a CSS framework for rapid development with an utility-first approach.
    - For example, the problem with Bootstrap is that it delivers ready made components to re-use and all apps looks almost the same. It scales poorly when the number of custom classes increase. 
    - Tailwind focuses on utility classes not UI components. 
    - It has larger learning curve (proficient in CSS) but easy to remember.
    - We can use tailwind outside angular components, like on index.html.
     
- Purge: It's a library/tool that purges or erase unused CSS of a project. Works perfect with Tailwind. It can reduce your project size. 

- `npx tailwind init`: npx can instruct npm to execute tailwind.

- Adding new features to starter project: 
    - User Module
        - Login
        - Registration
        - Auth Persistence (localstorage)
    - Videos Module
        - Upload
        - Manage
        - View

- What are services?
    - An object for managing your data. Model, View & Controller.
    - If we need to access data from different components we use services.
    - Services are not state managers.
    - Yoy may not need a state management library.
    - Services and State Managers are two different approach to managing data.
- Dependency injections
    - A system that creates instances and pass them to our classes
    - These are objects, like a "config" object for a modal.
    - Providers: s

