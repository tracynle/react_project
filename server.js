require("dotenv").config();
// using express to get our own api routes
const express = require("express");
// use the routes folder
const routes = require("./routes");
// initialize express object
const app = express();
// whatever is in the environment variable PORT, or 9001 if there's nothing there
const PORT = process.env.PORT || 9001;
// use the modals folder
const db = require("./models");


// Defined middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//serve up static assests on heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// add routes, both API and View
// app.use(routes);

// Gotta connect to mySql ** I think this is correct? **

app.listen(PORT, function() {
    console.log(`🌎 API Server Listening on Port ${PORT}!`)
});