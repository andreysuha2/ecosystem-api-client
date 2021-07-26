import RouteFactory from "@core/router/route";

class Router {
    #app;
    #routes;

    constructor(app, routes) {
        this.#app = app;
        this.#routes = routes;
    }

    init() {
        this.#routes(new RouteFactory('', this.#app));
    }
}

export default Router;
