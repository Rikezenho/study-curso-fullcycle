const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
};
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people (name) VALUES ('Kuwai')`;
connection.query(sql);
connection.end();

app.get('/', (req, res) => {
    res.send('<h1>Full cycle</h1>');
});

app.listen(port, () => {
    console.log(`server listening on port ${port}...`);
});