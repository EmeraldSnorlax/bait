import express from 'express';
import Link from './link';

const create = express.Router();
export default create;

create.use(express.json());

create.post('/', (req, res) => {
  const link: Link = req.body;
  if (
    !!link.content.title
    && !!link.destination
  ) {
    
  } else {

  }
});
