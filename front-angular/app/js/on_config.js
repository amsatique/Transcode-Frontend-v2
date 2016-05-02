function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('InterceptorService');


    $stateProvider
        .state('Home', {
            url: '/',
            controller: 'ExampleCtrl as home',
            templateUrl: 'home.html',
            title: 'Home',
            data: {requiresLogin: true}
        });

    $stateProvider
        .state('Login', {
            url: '/login',
            controller: 'LoginCtrl as login',
            templateUrl: 'login.html',
            title: 'Login'
        });

    $stateProvider
        .state('Register', {
            url: '/register',
            controller: 'RegisterCtrl as register',
            templateUrl: 'register.html',
            title: 'Register'
        });

    $stateProvider
        .state('Reset', {
            url: '/reset',
            controller: 'ResetCtrl as reset',
            templateUrl: 'reset.html',
            title: 'Reset'
        });

    $stateProvider
        .state('Confirm', {
            url: '/confirm',
            controller: 'ConfirmCtrl as confirm',
            templateUrl: 'confirm.html',
            title: 'Confirm'
        });

    $stateProvider
        .state('Forgot', {
            url: '/forgot',
            controller: 'ForgotCtrl as forgot',
            templateUrl: 'forgot.html',
            title: 'Forgot'
        });

    $stateProvider
        .state('Profile', {
            url: '/profile',
            controller: 'ProfileCtrl as profile',
            templateUrl: 'profile.html',
            title: 'Profile',
            data: {requiresLogin: true}
        });

    $stateProvider
        .state('Public', {
            url: '/public',
            controller: 'PublicCtrl as public',
            templateUrl: 'public.html',
            title: 'Public'
        });


    $urlRouterProvider.otherwise('/public');

}

export default OnConfig;
