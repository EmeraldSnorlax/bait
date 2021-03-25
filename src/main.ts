import express from 'express';
import frontend from './frontend/frontend';

const PORT = 5500;
const app = express();

app.use('/', frontend);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
