import bodyParser from 'body-parser';
import express from 'express';
import cookieParser from 'cookie-parser';
import routes from './routes';
import Router from '@core/router';

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

const router = new Router(app, routes);
router.init();

export default app;
