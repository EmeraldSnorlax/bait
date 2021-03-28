import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import db from '../../../db';
import Link from './link';
import { domains } from '../../../allowList';
import { decode } from 'node:punycode';

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
    link.destination = decodeURI(link.destination);

    // Reject not allowed sites, and redirect links. We also only allow images for Imgur.
    const imgur = link.content.image?.startsWith('https://i.imgur.com/');
    if (link.destination !== undefined && link.content.title !== undefined) {
      if (
        !domains.includes(domain)
        || link.destination.toLowerCase().includes('redirect')
        || (!imgur && link.content.image)
      ) {
        res.status(403).send('this link is not allowed! check the allowed sites list + we only allow images from i.imgur.com!');
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
