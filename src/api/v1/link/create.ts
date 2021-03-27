import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import db from '../../../db';
import Link from './link';
import { domains } from '../../../allowList';

const create = express.Router();
export default create;

create.use(express.json());

create.post('/', (req, res) => {
  const link: Link = req.body;
  try {
  // Isolate just the domain
    let domain = req.body.destination.split('/').slice(0, 3);
    domain[1] = '//';
    domain = domain.join('');
    domain += '/';
    if (link.destination !== undefined && link.content.title !== undefined) {
      // Reject not allowed sites, and redirect links.
      if (!domains.includes(domain) || req.body.destination.toLowerCase().includes('redirect')) {
        res.status(403).send('this link is not allowed!');
      } else {
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
      }
    }
  } catch {
    res.status(400).send('check your post body?');
  }
});
