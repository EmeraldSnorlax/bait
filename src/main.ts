import express from 'express';
import frontend from './frontend/frontend';
import api from './api/api';

const PORT = 5500;
const app = express();

app.use('/', frontend);
app.use('/api', api);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
