function TokenService($window) {
    'ngInject';

    var store = $window.localStorage;
    var key = 'auth-token';

    function getToken() {
        return store.getItem(key);
    }

    function setToken(token) {
        if (token) {
            store.setItem(key, token);
        } else {
            store.removeItem(key);
        }
    }

    return {
        getToken: getToken,
        setToken: setToken
    };

}

export default {
    name: 'TokenService',
    fn: TokenService
};
