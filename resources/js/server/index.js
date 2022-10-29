const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "task_ui",
});

con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    // console.log("Connected");
  }
});

app.get("/fetch", (rq, res) => {
  con.query("SELECT * FROM ui_5", function (err, result, fields) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      // console.log(JSON.parse(JSON.stringify(result)));
    }
  });
});

app.post("/post", (rq, res) => {
  con.query(
    "INSERT INTO `ui-5`(`price`, `p_name`, `details`) VALUES ('price','p_name','details')",
    function (err, result, fields) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(JSON.parse(JSON.stringify(result)));
      }
    }
  );
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("port 5000");
  }
});
