import Http from '@http/api/auth';


export default (app) => {
    app.get('/test', (req, res) => {
        const http = new Http(req, res);
        http.check()
            .then(({ data }) => res.json({ data, http }))
            .catch(({ data }) => res.json(data));
    });
}
