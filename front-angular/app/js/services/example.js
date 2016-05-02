function ExampleService($http, AppSettings) {
    'ngInject';

    const service = {};

    service.get = function () {
        console.log('welcome in your service dude!');
        return new Promise((resolve, reject) => {
            $http.get('apiPath').success((data) => {
                resolve(data);
            }).error((err, status) => {
                reject(err, status);
            });
        });
    };

    service.signup = function (data) {
        console.log('welcome in your service dude!');
        console.log(data);
        return new Promise((resolve, reject) => {
            $http.post(AppSettings.apiUrl + '/register', data).success((data) => {
                resolve(data);
            }).error((err, status) => {
                reject(err, status);
            });
        });
    };

    return service;

}

export default {
    name: 'ExampleService',
    fn: ExampleService
};
