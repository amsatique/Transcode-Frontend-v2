function OnRun($rootScope, AppSettings, jwtHelper, TokenService, $state) {
  'ngInject';

  $rootScope.$on('$stateChangeStart', function(e, to) {
    if (to.data && to.data.requiresLogin) {
      if (!TokenService.getToken() || jwtHelper.isTokenExpired(TokenService.getToken())) {
        e.preventDefault();
        $state.go('Public');
      }
    }
  });

  // change page title based on state
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    $rootScope.pageTitle = '';

    if ( toState.title ) {
      $rootScope.pageTitle += toState.title;
      $rootScope.pageTitle += ' \u2014 ';
    }

    $rootScope.pageTitle += AppSettings.appTitle;
  });

}

export default OnRun;
