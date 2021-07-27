import Controller from "@core/controller/Controller";
import Http from "@http/api/finances";

class ValetController extends Controller {
    http;

    constructor({ req, res }) {
        super({ req, res });
        this.http = new Http(req, res).valets;
    }

    list(req, res) {
        this.http.list()
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    read({ params: { valetId } }, res) {
        this.http.valet.read(valetId)
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    create({ body }, res) {
        this.http.valet.create(body)
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    update({ params: { valetId }, body }, res) {
        this.http.valet.update(valetId, body)
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    delete({ params: { valetId } }, res) {
        this.http.valet.delete(valetId)
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }
}

export default ValetController;
