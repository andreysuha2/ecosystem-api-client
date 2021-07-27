export default (route) => {
    route.group('auth', (route) => {
       route.get('check', 'Authenticate/AuthController@check');
       route.put('login', 'Authenticate/AuthController@login');
       route.post('registration', 'Authenticate/AuthController@registration');
       route.put('logout', 'Authenticate/AuthController@logout');
    });
    route.group('users', (route) => {
        route.get('user', 'Users/UsersController@loadUser');
        route.group('search', (route) => {
            route.get('suggestion', 'Users/UsersController@suggestionSearch')
        })
    });
    route.group('finances', (route) => {
        route.group('currencies', (route) => {
            route.get('', 'Currencies/CurrenciesController@list');
            route.group('currency', (route) => {
               route.get(':currencyId', 'Currencies/CurrenciesController@getCurrency');
            });
        });
        route.group('valets', (route) => {
            route.get('', 'Valets/ValetController@list');
            route.group('valet', (route) => {
                route.post('', 'Valets/ValetController@create');
                route.group(':valetId', (route) => {
                    route.get('', "Valets/ValetController@read");
                    route.put('', "Valets/ValetController@update");
                    route.delete('', "Valets/ValetController@delete");
                    route.group('categories', (route) => {
                        route.get('', 'Valets/CategoriesController@list');
                        route.group('category', (route) => {
                            route.post('', 'Valets/CategoriesController@create');
                            route.group(':categoryId', (group) => {
                                route.get('', 'Valets/CategoriesController@read');
                                route.put('', 'Valets/CategoriesController@update');
                                route.delete('', 'Valets/CategoriesController@delete');
                            })
                        });
                    });
                    route.group('balances', (route) => {
                        route.get('', 'Valets/BalancesController@list');
                        route.group('balance', (route) => {
                            route.post('', 'Valets/BalancesController@create');
                            route.group(':balanceId', (route) => {
                                route.get('', 'Valets/BalancesController@read');
                                route.put('', 'Valets/BalancesController@update');
                                route.delete('', 'Valets/BalancesController@delete');
                            });
                        });
                    });
                    route.group('records', (route) => {
                        route.get('', 'Valets/RecordsController@list');
                        route.group('record', (route) => {
                            route.post('', 'Valets/RecordsController@create');
                            route.group(':recordId', (route) => {
                                route.get('', 'Valets/RecordsController@read');
                                route.put('', 'Valets/RecordsController@update');
                                route.delete('', 'Valets/RecordsController@delete');
                            });
                        });
                    });
                    route.group('participants', (route) => {
                        route.get('', 'Valets/ParticipantsController@list');
                        route.group('participant', (route) => {
                            route.post('', 'Valets/ParticipantsController@create');
                            route.group(':participantId', (route) => {
                                route.get('', 'Valets/ParticipantsController@read');
                                route.put('', 'Valets/ParticipantsController@update');
                                route.delete('', 'Valets/ParticipantsController@delete');
                            });
                        });
                    });
                });
            })
        })
    });
};
