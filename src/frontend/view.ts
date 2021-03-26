import express from 'express';
import db from '../db';

const view = express.Router();

export default view;

view.get('/:id', (req, res) => {
  db.all(
    'SELECT * FROM links WHERE id IS (?)', req.params.id,
    (err, rows) => {
      if (err) {
        res.status(500).send('something went wrong looking up the link!');
        console.log(err);
      } else {
        res.render('redirect.ejs', { link: rows[0] });
      }
    },
  );
});
