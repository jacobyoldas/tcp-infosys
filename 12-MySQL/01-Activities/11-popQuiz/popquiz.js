var mysql = require("mysql");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Thalife30!",
  database: "popquiz_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryRows();
    connection.end();
  });

  function queryRows() {
    connection.query("SELECT * FROM popquiz_tbl", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < 3; i++) {
        console.log(res[i].id + " | " + res[i].random_text);
      }
      console.log("-----------------------------------");
    });
  }