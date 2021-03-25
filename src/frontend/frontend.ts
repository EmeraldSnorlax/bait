import express from 'express';
import view from './view';

const frontend = express.Router();
export default frontend;

frontend.use('/view', view);

frontend.get('/', (req, res) => {
  res.send('Hello world');
});
