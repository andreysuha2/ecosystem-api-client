import Controller from "@core/controller/Controller";
import Http from "@http/api/finances";

class BalancesController extends Controller {
    http;

    constructor({ req, res }) {
        super({ req, res });
        const { valetId } = req.params;
        this.http = new Http(req, res).valets.valet.balances(valetId);
    }

    list(req, res) {
        this.http.list()
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    read({ params: { balanceId } }, res) {
        this.http.balance.read(balanceId)
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    create({ body }, res) {
        this.http.balance.create(body)
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    update({ params: { balanceId }, body }, res) {
        this.http.balance.update(balanceId, body)
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    delete({ params: { balanceId } }, res) {
        this.http.balance.delete(balanceId)
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }
}

export default BalancesController;
