import sqlite3 from 'sqlite3';

const s = sqlite3.verbose();
const db = new s.Database('./links.db');
export default db;
