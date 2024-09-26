const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const connection = require("../server/src/dataBase/database");
const signup = require("./src/routes/signupRoutes");

const cors = require("cors");



app.use(cors({
  origin:["http://localhost:3000", "http://localhost:3007" ],
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: "Content-Type,Authorization",
}))

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", signup);
// app.use("/auth", signin);

if (process.env.ENVIRONMENT_VARIABLE == "Development") {
  console.log("Development condition");
}

const port = process.env.PORT; // Use an environment variable for the port

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
