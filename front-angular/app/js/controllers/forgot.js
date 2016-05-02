function ForgotCtrl(AuthenticateService) {

    vm.user = {};

    vm.forgotPassword = function() {
        AuthenticateService.forgot(vm.user);
    };


}
export default {
    name: 'ForgotCtrl',
    fn: ForgotCtrl
};