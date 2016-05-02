import angular from 'angular';

// angular modules
import constants from './constants';
import onConfig  from './on_config';
import onRun     from './on_run';
import 'angular-jwt';
import 'angular-storage';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'ng-file-upload';
import './templates';
import './filters';
import './controllers';
import './services';
import './directives';

// create and bootstrap application
const requires = [
  'ui.router',
  'ui.bootstrap',
  'angular-jwt',
  'angular-storage',
  'ngFileUpload',
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.directives'
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.module('app').controller( 'AppCtrl', function AppCtrl ( $scope ) {
  $scope.$on('$routeChangeSuccess', function(e, nextRoute){
    if ( nextRoute.$$route && angular.isDefined( nextRoute.$$route.pageTitle ) ) {
      $scope.pageTitle = nextRoute.$$route.pageTitle;
    }
  });
});

angular.bootstrap(document, ['app'], {
  strictDi: true
});