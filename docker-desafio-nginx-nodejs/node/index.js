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
    const result = await doMysqlQuery(`SELECT name FROM aluno`);
    const names = result ? (result || []).map(({ name }) => `<li>${name}</li>`).join('') : null;
    res.send(`<h1>Full Cycle Rocks!</h1>${
        `<h2>Alunos</h2><ul>${names}</ul>` || ''
    }`);
});

app.listen(port, () => {
    console.log(`server listening on port ${port}...`);
});