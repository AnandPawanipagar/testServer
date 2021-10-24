const express = require("express");
const connection = require("./db");
const app = express();
app.use(express.json());
const cors=require("cors");
app.use(cors());

app.get("/", (req, res) => {
  connection.query("select * from family", (err, data) => {
    if (err) {
      res.send({
        error: true,
        message: "failed",
        errorObj: err,
      });
    } else {
      res.send({
        error: false,
        message: "success!",
        data,
      });
    }
  });
});
app.put("/", (req, res) => {
    const {id,name}=req.body;
    connection.query(`update family set name='${name}' where id='${id}'`, (err, data) => {
      if (err) {
        res.send({
          error: true,
          message: "failed",
          errorObj: err,
        });
      } else {
        res.send({
          error: false,
          message: "success!",
          data,
        });
      }
    });
  });

app.listen(9000, () => {
  console.log("server running on 9000");
});
