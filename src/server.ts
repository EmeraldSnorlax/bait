import app from './app';
import db from './db';

db.run('CREATE TABLE IF NOT EXISTS links (id INTEGER PRIMARY KEY AUTOINCREMENT, title STRING, description STRING, image STRING, color STRING, destination STRING);');

const PORT = 5500;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
