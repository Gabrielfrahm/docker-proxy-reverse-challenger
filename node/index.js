const express = require("express");
const app = express();
const port = 3333;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);
const dropTable = `DROP TABLE IF EXISTS people`;
const createTable = `CREATE TABLE  people (id int not null auto_increment, name varchar(20) not null, primary key (id))`;
const sql = `INSERT INTO people(name) VALUES('Gabriel')`;
const sql2 = `INSERT INTO people(name) VALUES('Wesley')`;
const selectPeopleQuery = `SELECT * FROM people`;

connection.connect();
connection.query(dropTable);
connection.query(createTable);
connection.query(sql);
connection.query(sql2);

app.get("/", (req, res) => {
  try {
    let resultPeople = [];
    connection.query(selectPeopleQuery, function (err, result, fields) {
      if (err) throw err;
      Object.keys(result).forEach(function (key) {
        var row = result[key];
        resultPeople.push(row.name);
      });

      res.send(`
        <body>
            <h1>Full Cycle Rocks!</h1>
            <h3>Lista de usuários</h3>
            <p>- ${resultPeople}</p>
        </body>
    `);
    });
  } catch (err) {
    console.log(err);
  }
});

// connection.end();

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
