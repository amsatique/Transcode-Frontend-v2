function LoginCtrl(AuthenticateService) {

    'ngInject';
    // ViewModel
    const vm = this;

    vm.user = {};

    vm.loginUser = function() {
        AuthenticateService.signin(vm.user);
    };

}

export default {
    name: 'LoginCtrl',
    fn: LoginCtrl
};