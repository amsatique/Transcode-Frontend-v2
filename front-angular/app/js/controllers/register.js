function RegisterCtrl(AuthenticateService) {
    'ngInject';
    // ViewModel
    const vm = this;

    vm.user = {};

    vm.createUser = function() {
        AuthenticateService.signup(vm.user);
    };


}
export default {
    name: 'RegisterCtrl',
    fn: RegisterCtrl
};