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

## Concepts adquired on the project

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


- Singletons: Angular treats the classes are singleton, helpful when you want to minimize the cost of the same declaration in many components. Just declare 1, single source of truth.

- A memory leak its when a variable its not declared or uninitialize

- You can use element reference (elementRef) in angular to move the component to another location of the host component, avoiding the 
CSS issues of inheritance. Like putting a red color to a div that contains the modal. With this you can "relocate" the component
to the root of the HTML. app root. 

- @ContentChildren decorator its for having multiple components as a Input on a parent compontent. In this case we used it for the tabs container. 

- ngAfterContentInit hook its when angular finishes loading all components on the screen (we already have the instanciation completed)

- The QueryList Object its a convenient variable type for saving arrays of objects (components)

- Classic behaviour in web apps because of javascript: return "false" on the click event of the "tab" container when changing to and from login and register tabs preventing the default behaviour of "href" routing to a new URL or "#" by default.

## Forms Section

- Reactive forms: more scalable, harder to learn
- Template Forms: less scalable, better learning curve and faster for simple forms
- Presentational Components: Componnents that only delivers the UI and minimun UX to the view, they don't have business logic.
- ng-container: always rendered
- ng-template: conditionally rendered
- submit and ng-submit events on "forms": 
    - ngSubmit: this will stop the browser from refreshing while the form is submited
    - submit: while this will not do it automatically, and will refresh the form.

- Template forms: 
    - Using 2 way binding its a way to listen events and update property values simultaneously
    for example: 
        a) this: <input [value]="" (change)=""/> 
        b) is the same as this: <input [(ngModel)]=""/> 2 way binding

- RxJS: 
    - Async operations
    - Coordinates the DATA received by the component with a series functions and methods optimized for this, like filters, mapping, reducers and sorters. 
    - Like in the image, you can call observables and managing them using the main events: next, complete and error.
    When you call complete, the observable will stop emiting values. When you call next, you will emit a value, and when you emit the error, the observable will stop emiting values and emit only the error.
        ![alt text](image.png)
    
    - You can clear an interval by calling clearInterval function and passing the interval ID, this is for cleaning memory leaks like the console.log on line "6". 
    ![alt text](image-1.png)

    - Imperative programming focuses on the HOW, while Declarative focuses on the WHAT. 
        - Imperative its when you have to tell instructions specifically to a software. 
        - Declarative its when you use a function to resolve multiple instructions at once. Like the reduce() function of JS, instead of using a FOR loop to move through an array.


- Firebase
    - When installing AngularFire:  To get rid of these errors, you must update the tsconfig.json file.

    '{ "compilerOptions": { "skipLibCheck": true, } }'
    The skipLibCheck setting stops TypeScript from type-checking files in the node_modules directory. However, type-checking will remain enabled for code in the src directory, so you still benefit from type-checking. Be sure to add this option to your configuration before proceeding.

    - The main difference between npm i and ng add its that ng add installs and pre-configures more options inside angular than npm, npm just installs a package and adds it to package.json file.  
    
    ![alt text](image-2.png)

    - Buckets are basically databases that stores collections. You can create multiple buckets if you are a premium user in GCP or Firebase.

    - Interfaces VS Classes: Basically, a model its an interface, this is the same, but if you create an interface that IT'S NOT SAVED ON A DB, its not a model, just an interface. Both are typed checked, but a class can accept methods and more complex data structures, getters and setters, while Interfaces not.  Also a class increases the bundle size more than an interface does. Keep that in mind. Interfaces are also a typescript native while Classes are from Javascript & TS, Interfaces cannot be TRANSPILED.

    - Firebase use stateless authentication because it doesn't keep track of the logged user, it just use a token.

    - The "$" dollar sign next to the name variable ("example$"), means that its an observable, used as a common practice. (Good Practice)

    - You can initialize Firebase before Angular, for speeding the rendering conditional a logged user. 
        - For doing this you need to use de Javascript SDK of firebase instead of AngularFire. [GUIDE](https://firebase.google.com/docs/web/setup)

    - JWT: encoded strings with important credential data. Digitally signed by Firebase.
        - It's not something you create on frontend, but of course for simplicity or testing you can ;).
        - It is possible to steal a token, YES. Thats why you need SSL certificaction and HTTPS secured protocole inside on your web app. This will secure the connection between client and server. 
        - The SECRET its the KEY to unlock the content and hack, the secret its not shared only the hashed code that you can decrypt with any algorith SHA256, RSA, ETC.
        - SSL or TLS are the protocols to encrypt the data on the network. 
        - This is a backend issue more so. 
    
    - Custom Form Validators: 
        - With static functions inside a Class, you can access them easily using ClassName.function(), no need to create a "new" instance of the class. 
        - Static methods don't have access to class properties.
        - Factory Functions: are a pattern to return objects or functions.
        - The @Injectable decorator works for inject services into the constructor function of a class. If you pass an object parameter with the "providerIn" parameter, you can choose in what "module" of the project can be injected, to availability in all modules you can write "root" as value.
        - Async Validators: for a validation that requires a promise or request to be resolve first. 
        - For good practice, separate Async and Sync validators from each other in order to mantain simplicity on the validation file. 
        - Eyes on this!: Angular doesn't trigger async validators until all sync validators are valid, take note on that.




