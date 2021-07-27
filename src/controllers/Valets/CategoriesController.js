import Controller from "@core/controller/Controller";
import Http from "@http/api/finances";

class CategoriesController extends Controller {
    http;

    constructor({ req, res }) {
        super({ req, res });
        const { valetId } = req.params;
        this.http = new Http(req, res).valets.valet.categories(valetId);
    }

    list(req, res) {
        this.http.list()
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    read({ params: { categoryId } }, res) {
        this.http.category.read(categoryId)
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    create({ body }, res) {
        this.http.category.create(body)
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    update({ params: { categoryId }, body }, res) {
        this.http.category.update(categoryId, body)
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    delete({ params: { categoryId } }, res) {
        this.http.category.delete(categoryId)
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }
}

export default CategoriesController;
