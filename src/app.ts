import express from 'express';
import frontend from './frontend/frontend';
import api from './api/api';

const app = express();
export default app;

app.use('/', frontend);
app.use('/api', api);
