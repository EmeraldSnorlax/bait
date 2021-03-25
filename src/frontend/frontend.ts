import express from 'express';

const frontend = express.Router();
export default frontend;

frontend.get('/', (req, res) => {
  res.send('Hello world');
});
