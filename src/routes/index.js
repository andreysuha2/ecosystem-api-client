import Http from '@http/api/auth';


export default (app) => {
    app.get('/test', (req, res) => {
        res.json({ "url": process.env.API_URL })
    });
}
