function InterceptorService(TokenService) {
    'ngInject';

    function addToken(config) {
        var token = TokenService.getToken();
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = 'Bearer ' + token;
        }
        else{
            //$state.go('login')
        }
        return config;
    }

    return {
        request: addToken
    };

}

export default {
    name: 'InterceptorService',
    fn: InterceptorService
};
