// Create express app
var express = require("express");
var app = express();
var db = require("./database.js");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Server port
var HTTP_PORT = 8080;
// Start server
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});
// Root endpoint
app.get("/", (req, res, next) => {
  res.json({ message: "Ok" });
});

// /api/cars - Returns all cars
// /api/cars?time_in_garage=xxx - returns all cars that have been in garage within time xxx
// /api/cars/<license plate> - returns the single car

// Insert here other API endpoints
app.get("/api/time", (req, res, next) => {
  var sql = "select timestamp from events";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// This gets all cars
app.get("/api/cars", (req, res, next) => {
  var sql = "select * from events";
  var params = [];

  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// gets cars by license
// here, get the license from the events WHERE the license matches the license desired (similar to getting anything by ID)

app.get("/api/cars/:license", (req, res, next) => {
  var sql = "select * from events where license_plate_number = ?";
  var params = [req.params.license];

  db.all(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (row === undefined) {
      res.json({
        message: "does not exist",
      });
    } else {
      res.json({
        message: "success",
        data: row,
        exit_time: row[1].timestamp,
        enter_time: row[0].timestamp,
        total_time: Math.abs(row[1].timestamp - row[0].timestamp),
      });
    }
  });
});

// /api/cars?time_in_garage=xxx - returns all cars that have been in garage within time xxx
// create that here:
// app.get("/api/cars/:id", (req, res, next) => {
//   var sql = "select * from user where id = ?";
//   var params = [req.params.id];
//   db.get(sql, params, (err, row) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: row,
//     });
//   });
// });

// // Default response for any other request
// app.use(function (req, res) {
//   res.status(404);
// });
