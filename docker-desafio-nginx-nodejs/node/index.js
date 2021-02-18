const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const doMysqlQuery = (sql) => new Promise((resolve, reject) => {
    const config = {
        host: 'desafio_db',
        user: 'root',
        password: 'root',
        database: 'nodedb',
    };

    const connection = mysql.createConnection(config);
    connection.query(sql, (error, results, fields) => {
        if (error) {
            return reject(error);
        }
        resolve(results);
    });
    connection.end();
});

app.get('/', async (req, res) => {
    const [aluno] = await doMysqlQuery(`SELECT name FROM aluno`);
    res.send(`<h1>Full cycle</h1><p>Nome do aluno: ${aluno.name}</p>`);
});

app.listen(port, () => {
    console.log(`server listening on port ${port}...`);
});