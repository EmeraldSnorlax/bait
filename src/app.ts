import express from 'express';
import path from 'path';
import frontend from './frontend/frontend';
import api from './api/api';

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend', 'views'));
export default app;

app.use('/', frontend);
app.use('/api', api);
