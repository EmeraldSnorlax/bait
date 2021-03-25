import express from 'express';

const create = express.Router();
export default create;

create.use(express.json());

create.post('/', (req, res) => {
  console.log(req.body);
  res.end();
});
