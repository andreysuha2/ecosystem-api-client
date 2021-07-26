class Route {
    method;
    slug;
    handler;
    middlewares;

    constructor({ method, slug, handler, middlewares }) {
        this.method = method;
        this.slug = slug;
        this.handler = handler;
        this.middlewares = middlewares;
    }

    get parsedHandler() {
        const [ controllerPath, method ] = this.handler.split('@');
        return { controllerPath, method }
    }

    use(app) {
        const { controllerPath, method } = this.parsedHandler,
            httpMethod = this.method;
        import(`@controllers/${controllerPath}`).then(({ default: Controller }) => {
            app[httpMethod](this.slug, (req, res) => {
                const controller = new Controller({ req, res });
                controller[method](req, res);
            });
        }).catch(e => console.log(e));
    }
}

export default Route;
