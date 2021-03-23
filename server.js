const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);

//Direct to Home Page
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, './client/index.html'));
});

//Redirect all pages not found to Home Page
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Using Updated MongoDB Options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}

//MongoDB database connection
mongoose.connect("mongodb+srv://adrianb13:Mongo4me@freegeneral-aws-east.vmh3y.mongodb.net/lakers?retryWrites=true&w=majority", options);


//Server Connection
app.listen(PORT, function () {
  console.log("Listening on port:" + PORT);
});