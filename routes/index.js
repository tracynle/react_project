var db = require("../models");
const path = require("path");
const router = require("express").Router();

module.exports = function(app) {
  // --------------- User Routes ----------------------------
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

  // -------------- userLikes Routes --------------------
  // Get all likes from the user
  app.get("/api/likes/", function(req, res) {
    db.userLikes.findAll({}).then(function(dbUserLikes) {
      res.json(dbUserLikes);
    });
  });
  
  // -------------- user info with likes --------------------
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

  router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
  


};
module.exports = router;
