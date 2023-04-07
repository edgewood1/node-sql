const express = require("express");
const cors = require("cors");
const routes = require("./app/routes/routes.js");

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// call sync() 
const db = require("./app/models");

db.sequelize.sync({force:true})
  .then(() => {
    console.log("drop and re-sync db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// add routes
app.use("/", routes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});