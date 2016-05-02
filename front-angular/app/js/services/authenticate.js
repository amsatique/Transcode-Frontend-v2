function AuthenticateService($http, AppSettings) {
    'ngInject';

    const service = {};

    service.signup = function (data) {
        return new Promise((resolve, reject) => {
            $http.post(AppSettings.apiUrl + '/register', data).success((data) => {
                resolve(data);
            }).error((err, status) => {
                reject(err, status);
            });
        });
    };

    service.signin = function (data) {
        return new Promise((resolve, reject) => {
            $http.post(AppSettings.apiUrl + '/login', data).success((data) => {
                resolve(data);
            }).error((err, status) => {
                reject(err, status);
            });
        });
    };

    service.forgot = function (data) {
        return new Promise((resolve, reject) => {
            $http.post(AppSettings.apiUrl + '/forgot', data).success((data) => {
                resolve(data);
            }).error((err, status) => {
                reject(err, status);
            });
        });
    };

    service.reset = function (data) {
        return new Promise((resolve, reject) => {
            $http.post(AppSettings.apiUrl + '/reset', data).success((data) => {
                resolve(data);
            }).error((err, status) => {
                reject(err, status);
            });
        });
    };

    service.confirm = function (data) {
        return new Promise((resolve, reject) => {
            $http.post(AppSettings.apiUrl + '/resendConfirm', data).success((data) => {
                resolve(data);
            }).error((err, status) => {
                reject(err, status);
            });
        });
    };

    return service;

}

export default {
    name: 'AuthenticateService',
    fn: AuthenticateService
};
