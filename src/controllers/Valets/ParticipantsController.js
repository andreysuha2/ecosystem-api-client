import Controller from "@core/controller/Controller";
import Http from "@http/api/finances";

class ParticipantsController extends Controller {
    http;

    constructor({ req, res }) {
        super({ req, res });
        const { valetId } = req.params;
        this.http = new Http(req, res).valets.valet.participants(valetId);
    }

    list(req, res) {
        this.http.list()
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    read({ params: { participantId } }, res) {
        this.http.participant.read(participantId)
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    create({ body }, res) {
        this.http.participant.create(body)
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    update({ params: { participantId }, body }, res) {
        this.http.participant.update(participantId, body)
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    delete({ params: { participantId } }, res) {
        this.http.participant.delete(participantId)
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }
}

export default ParticipantsController;
