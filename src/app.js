import express from "express";
const APP = express();
APP.get("/api/users", function (req, res) {
  res.send(["Anant", "Yugal", "Neha"]);
});

APP.post("/api/users/add", function (req, res) {
  res.send({ msg: "User Added" });
});

APP.put("/api/users/update", function (req, res) {
  res.send({ msg: "User Updated in DB" });
});

APP.delete("/api/users/delete", function (req, res) {
  res.send({ msg: "User delete" });
});

APP.listen(3002, function () {
  console.log("Application Started");
});
