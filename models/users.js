module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.STRING
  });

  Users.associate = function(models) {
    Users.hasMany(models.UserLikes,  {
      onDelete: "cascade"
    });
    Users.belongsToMany(Users, { as: 'friend1', through: 'friends', foreignKey: 'UserId1', onDelete: 'CASCADE'});
    Users.belongsToMany(Users, { as: 'friend2', through: 'friends', foreignKey: 'UserId2', onDelete: 'CASCADE'});

  };

  return Users;
};


