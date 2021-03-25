import express from 'express';

const view = express.Router();
export default view;

// TODO: This. Also, I'm not sure if this passes the test?
view.get('/:id', (req, res) => {
  res.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});
