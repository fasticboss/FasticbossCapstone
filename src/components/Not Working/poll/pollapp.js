const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const pollapp = express();

// Set public folder
pollapp.use(express.static(path.join(__dirname, "public")));

// Body parser middleware
pollapp.use(bodyParser.json());
pollapp.use(bodyParser.urlencoded({ extended: false }));

// Enable CORS
pollapp.use(cors());

const port = 5000;

// start server
pollapp.listen(port, () => console.log(`server started on port ${port}`));
