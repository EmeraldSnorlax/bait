import express from 'express';
import view from './view';
import allowedSites from '../allowList';

const frontend = express.Router();
export default frontend;

frontend.use('/view', view);

let siteNames = '';
allowedSites.forEach((site) => {
  siteNames += `${site.name}, `;
});

frontend.get('/', (req, res) => {
  res.render('index.ejs', { siteNames });
});
