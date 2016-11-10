namespace App {
    // Setup the node app module.
    let app = angular.module ('App', ['ui.router']);

    app.config([
        '$stateProvider',
        ($stateProvider: angular.ui.IStateProvider) => {
            $stateProvider
                .state ('home', {
                    url: '/',
                    //template: 'This is my home page. <p> title value: {{ title }} </p>',
                    templateUrl: 'templates/home.html',
                    controller: App.HomeController,
                    controllerAs: 'myController'
                })
                .state ('about', {
                    url: '/about',
                    templateUrl: 'templates/about.html',
                    controller: App.AboutController,
                    controllerAs: 'aboutController'
                })
                .state ('contact', {
                    url: '/contact',
                    templateUrl: 'templates/contact.html',
                    controller: App.ContactController,
                    controllerAs: 'contactController'
                })
                .state ('calculator', {
                    url: '/calculator',
                    templateUrl: 'templates/calculator.html',
                    controller: App.CalculatorController,
                    controllerAs: 'calculatorController'
                })
            }
    ]);
}
