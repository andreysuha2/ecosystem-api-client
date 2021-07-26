import Route from "./route";

class RouteFactory {
    prefix;
    app;

    constructor(prefix = '', app) {
        this.prefix = prefix;
        this.app = app;
    }

    request(method, url, handler, middlewares = []) {
        const slug = `${this.prefix}/${url}`;
        const route = new Route({ method, handler, slug, middlewares  });
        route.use(this.app);
    };

    get(slug, handler, middlewares = []) {
        return this.request('get', slug, handler, middlewares);
    }

    post(slug, handler, middlewares = []) {
        return this.request('post', slug, handler, middlewares);
    }

    put(slug, handler, middlewares = []) {
        return this.request('put', slug, handler, middlewares);
    }

    delete(slug, handler, middlewares = []) {
        return this.request('delete', slug, handler, middlewares);
    }

    group(prefix, handler) {
        return handler(new RouteFactory(`${this.prefix}/${prefix}`, this.app));
    }
}

export default RouteFactory
