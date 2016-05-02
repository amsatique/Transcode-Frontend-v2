function ResetCtrl(AuthenticateService) {

    vm.user = {};

    vm.resetPassword = function() {
        AuthenticateService.reset(vm.user);
    };


}
export default {
    name: 'ResetCtrl',
    fn: ResetCtrl
};