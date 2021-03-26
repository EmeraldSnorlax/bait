import express from 'express';
import allowList from '../../allowList';

const allowedSites = express.Router();
export default allowedSites;

allowedSites.get('/', (req, res) => {
  res.status(200).send(allowList);
});
