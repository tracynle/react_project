module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.STRING
  });

  User.associate = function(models) {
    User.hasMany(models.userLikes, {
      onDelete: "cascade"
    });
  };

  return User;
};


