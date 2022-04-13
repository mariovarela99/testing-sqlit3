var sqlite3 = require("sqlite3").verbose();
const path = require("path");
const fs = require("fs");
const { Users } = require("./dados");
const filePath = path.resolve(__dirname, "databases", "database.sqlite");

if (!fs.existsSync(filePath))
  fs.writeFile(filePath, "", (error) => {
    if (error) console.log("Error => ", error);
  });

var db = new sqlite3.Database(filePath, (err) => {
  if (err) console.log(err);
});

db.serialize(function () {
  db.run(
    "CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY, name VARCHAR(50) NOT NULL, email VARCHAR(35) NOT NULL)"
  );

  let sql = db.prepare("INSERT INTO User values (?, ?, ?)");
  Users.map((item) => {
    sql.run(Math.round() * 100, item.name, item.email);
  });
  sql.finalize();

  db.each("select * from User", function (err, row) {
    if (err) {
      console.error("Error => ", err);
    } else {
      console.log(row.id + " | " + row.name + " | " + row.email + " | ");
    }
  });
});

db.get("select * from User where id = 15", (err, row) => {
  if (err) {
    console.error("Error => ", err);
  } else {
    if (row)
      console.log(
        "Id => " + row.id + " - Name => " + row.name + " - Email => ",
        row.email
      );
    else {
      console.log("User com ID 15 not found");
    }
  }
});

let sqlDelete = db.prepare("delete from User where id < 4");
sqlDelete.run((err) => {
  if (err) {
    console.error("Error => ", err);
  } else console.log("Campos com id menor que 4 Eliminados com sucesso.!");
});
sqlDelete.finalize();

db.close();
