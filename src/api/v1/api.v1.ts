import express from 'express';
import allowedSites from './allowedSites';
import create from './link/create';

const apiV1 = express.Router();
export default apiV1;

apiV1.use('/create', create);
apiV1.use('/allowedSites', allowedSites);
