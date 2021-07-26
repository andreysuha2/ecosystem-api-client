export default (route) => {
    route.group('auth', (route) => {
       route.get('check', 'Authenticate/AuthController@check');
       route.put('login', 'Authenticate/AuthController@login');
       route.post('registration', 'Authenticate/AuthController@registration');
       route.put('logout', 'Authenticate/AuthController@logout');
    });
};
