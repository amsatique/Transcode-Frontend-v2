function UserService($http, AppSettings) {
    'ngInject';

    const service = {};

    service.getProfile = function (data) {
        return new Promise((resolve, reject) => {
            $http.get(AppSettings.apiUrl+'/user/'+data._id).success((data) => {
                resolve(data);
            }).error((err, status) => {
                reject(err, status);
            });
        });
    };

    service.updProfile = function (data) {
        return new Promise((resolve, reject) => {
            $http.put(AppSettings.apiUrl+'/user/'+data._id, data).success((data) => {
                resolve(data);
            }).error((err, status) => {
                reject(err, status);
            });
        });
    };

    service.delProfile = function (data) {
        return new Promise((resolve, reject) => {
            $http.delete(AppSettings.apiUrl+'/user/'+data._id).success((data) => {
                resolve(data);
            }).error((err, status) => {
                reject(err, status);
            });
        });
    };

    return service;
}

export default {
    name: 'UserService',
    fn: UserService
};