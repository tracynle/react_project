module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.STRING
  });

  Users.associate = function(models) {
    Users.hasMany(models.UserLikes, {
      onDelete: "cascade"
    });
  };

  return Users;
};


