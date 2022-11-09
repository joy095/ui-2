const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./image");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
app.get("/fetch", (req, res) => {
  con.query("SELECT * FROM `ui-5`", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/post", upload.single("image"), (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const details = req.body.details;
  const image = req.body.image;

  con.query(
    "INSERT INTO `ui-5`(image,price, p_name, details) VALUES (?,?,?,?)",
    [image, price, name, details],

    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Value Inserted");
      }
    }
  );
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`running on port on ${port}`);
  }
});
