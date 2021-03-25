import express from 'express';
import apiV1 from './v1/api.v1';

const api = express.Router();
export default api;

api.use('/v1', apiV1);
