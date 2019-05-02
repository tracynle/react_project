"use strict";

// not sure what fs does
const fs = require("fs");
//not sure what path does
const path = require("path");
const Sequelize = require("sequelize");
// not sure what basename does
// pretty sure basename === 'index' or 'index.js'
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
let db = {};

// not sure what this does 
// either use env or config file to configure Sequelize
var sequelize;
// config.use_env_variable ---> Finds the "DATABASE_URL" from the key: use_env_variable in the config file

  // process.env
    
  // var sequelize = new Sequelize(process.env[config.use_env_variable]);
  // var sequelize = new Sequelize(process.env["DATABASE_URL"]);
  // var sequelize = new Sequelize({...}["DATABASE_URL"]);
  // translates to:
  // var sequelize = new Sequelize("mysql://user:pass@example.com:9821/db_name");
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// iterates through each file of /models
fs
    .readdirSync(__dirname)
    // This filter checks returns an array of all filenames that are not basename ('index' or 'index.js') and ends with .js
    // So basically it should be every other model file and these should correspond to db tables
    // User.js, Item.js, etc.
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
    })
    // Then runs sequelize.import for each file and assigns results to db object accordingly
    .forEach(function(file) {
        var model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
    });
// If associations are defined, calls associate function
Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.Sequelize = sequelize;

module.exports = db;