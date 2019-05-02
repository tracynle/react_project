var db = require("../models");

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

  // app.get("/api/entries/journals/body", function(req, res) {
  //   db.JournalEntries.findAll({
  //     where: {
  //       UserId: req.query.UserId
  //     }
  //   }).then(function(dbJournalEntriesStuff) {

  //   });
  // });
  // ===== End of Matt & Tracy's Stuff =====

  // Create new entry (CREATE) for specific user
//   app.post("/api/entries/", function(req, res) {
//     //db.tableName.create(req.body).then(function(dbName) {});
//     db.JournalEntries.create(req.body).then(function(dbJournalEntries) {
//       // console.log(res.body);
//       console.log(dbJournalEntries);
//       // console.log(res);
//       res.json(dbJournalEntries);
//     });
//   });
};

// RESTful: POST GET PUT DELETE
// DB: CRUD --> create read update delete
