import Controller from "@core/controller/Controller";
import Http from "@http/api/finances";

class CurrenciesController extends Controller {
    http;

    constructor({ req, res }) {
        super({ req, res });
        this.http = new Http(req, res).currencies;
    }

    list(req, res) {
        this.http.list()
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    getCurrency({ params: { currencyId } }, res) {
        this.http.currency.read(currencyId)
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }
}

export default CurrenciesController;
