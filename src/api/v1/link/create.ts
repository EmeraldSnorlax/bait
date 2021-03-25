import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import db from '../../../db';
import Link from './link';

const create = express.Router();
export default create;

create.use(express.json());

create.post('/', (req, res) => {
  const link: Link = req.body;
  if (link.destination !== undefined && link.content.title !== undefined) {
    // Make the fields blank if they don't exist
    link.content.description = link.content.description || '';
    link.content.color = link.content.color || '';
    link.content.image = link.content.image || '';
    const id = uuidv4();
    db.run(
      'INSERT INTO links(id, title, description, image, color, destination) VALUES(?, ?, ?, ?, ?, ?)',
      [id, link.content.title, link.content.description, link.content.image, link.content.color,
        link.destination],
      (err) => {
        if (err) {
          res.status(500).send('something went wrong saving this link!');
          console.log(err);
        } else {
          res.status(201).send({ id });
        }
      },
    );
  } else {
    res.status(400).send('check your post body?');
  }
});
