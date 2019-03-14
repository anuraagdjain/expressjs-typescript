import express from 'express';
import appRouter from './routes';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import path from 'path';

const app: express.Application = express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
app.use('/hello', appRouter.worldRoute);

export default app;
