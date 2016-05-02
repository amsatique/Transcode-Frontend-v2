function PublicCtrl($state, Upload, $timeout, AppSettings, $scope) {
    'ngInject';
    // ViewModel

    const vm = this;

    vm.login = function() {
        $state.go('Login');
    };

    vm.register = function() {
        $state.go('Register');
    };

    $scope.$watch('files', function () {
        vm.upload(vm.files);
    });
    $scope.$watch('file', function () {
        if (vm.file != null) {
            vm.files = [vm.file];
        }
    });

    vm.log = '';

    vm.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                if (!file.$error) {
                    Upload.upload({
                        url: AppSettings.apiUrl+'/upload',
                        data: {
                            file: file
                        }
                    }).then(function (resp) {
                        $timeout(function() {
                            vm.log = 'file: ' +
                                resp.config.data.file.name +
                                ', Response: ' + JSON.stringify(resp.data) +
                                '\n' + vm.log;
                        });
                    }, null, function (evt) {
                        var progressPercentage = parseInt(100.0 *
                            evt.loaded / evt.total);
                        vm.log = 'progress: ' + progressPercentage +
                            '% ' + evt.config.data.file.name + '\n' +
                            vm.log;
                    });
                }
            }
        }
    };
    
}
export default {
    name: 'PublicCtrl',
    fn: PublicCtrl
};