let db = require("../models");
const path = require("path");
let etsyApi = require("../utils/etsyApi");

module.exports = function(app) {
  // --------------- DB User Routes ----------------------------
  // Get all users (READ)
  app.get("/api/user", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  // Create new user > Add to db (CREATE)
  app.post("/api/user", function(req, res) {
    //db.tableName.create(req.body).then(function(dbName) {});
    db.User.create(req.body).then(function(dbUser) {
      // console.log(res.body);
      console.log(dbUser);
      // console.log(res);
      res.json(dbUser);
    });
  });

  // -------------- DB userLikes Routes --------------------
  // Get all likes from the user
  app.get("/api/likes/", function(req, res) {
    db.userLikes.findAll({}).then(function(dbUserLikes) {
      res.json(dbUserLikes);
    });
  });
  
  // -------------- DB user info with likes --------------------
  app.get("/api/user/likes", function(req, res) {
    console.log("PRINT TEST");
    console.log(req.query.UserId);
    db.userLikes.findAll({
      where: {
        UserId: req.query.UserId // where the foreign key is
      }
    }).then(function(dbUserLikes) {
      res.json(dbUserLikes);
    });
  });

  // ------ Etsy Api Results route -------
  app.get("/api/search/", function(req, res){
    console.log("Search results:");
    etsyApi.search(req.query.item).then(function(response) {
      // Make an API call to Etsy's api to do search and return user's search
      res.json(response.data);
    })
    .catch(function(error){
      console.log(error);
    })
  });

  // ------ Etsy Api Images route -------
  app.get("/api/images/", function(req, res){
    console.log("====== Image results:");
    etsyApi.images(req.query.item).then(function(response) {
      // Make an API call to Etsy's api to do search and return user's search
      res.json(response.data);
    })
    .catch(function(error){
      console.log("====== Image error =====", error);
    })
  });
};
