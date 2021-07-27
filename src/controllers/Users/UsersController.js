import Controller from "@core/controller/Controller";
import Http from "@http/api/users";
import { camelizeObject } from "@core/helpers/functions";

class UsersController extends Controller {
    http;

    constructor({ req, res }) {
        super({ req, res });
        this.http = new Http(req, res);
    }

    loadUser(req, res) {
        this.http.user.read()
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    suggestionSearch({ query }, res) {
        this.http.search.suggestion(camelizeObject(query, true))
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }
}

export default UsersController;
