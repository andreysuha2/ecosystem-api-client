import Http from "@http/api";

class UserHttp extends Http {
    constructor(req, res) {
        super({ slug: 'users', req, res });
    }

    get user() {
        return this.group('user', (query) => ({ read: () => query.get('') }));
    }

    get search() {
        return this.group('search', (query) => ({ suggestion: (params) => query.get('suggestion', { params }) }));
    }
}

export default UserHttp;
