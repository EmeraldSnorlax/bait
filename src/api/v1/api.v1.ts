import express from 'express';
import create from './link/create';

const apiV1 = express.Router();
export default apiV1;

apiV1.use('/create', create);
