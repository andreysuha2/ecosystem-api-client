import Controller from "@core/controller/Controller";
import Http from "@http/api/finances";

class RecordsController extends Controller {
    http;

    constructor({ req, res }) {
        super({ req, res });
        const { valetId } = req.params;
        this.http = new Http(req, res).valets.valet.records(valetId);
    }

    list(req, res) {
        this.http.list()
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    read({ params: { recordId } }, res) {
        this.http.record.read(recordId)
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    create({ body }, res) {
        this.http.record.create(body)
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    update({ params: { recordId }, body }, res) {
        this.http.record.update(recordId, body)
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    delete({ params: { recordId } }, res) {
        this.http.record.delete(recordId)
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }
}

export default RecordsController;
