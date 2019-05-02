require("dotenv").config();

module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "react_project_db",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "Ngoc513*",
    "database": "database_test",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql",
    "use_env_variable": "JAWSDB_URL",

  }
};