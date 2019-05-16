module.exports = function(sequelize, DataTypes) {
    var friends = sequelize.define("friends", {
      userName: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      birthday: DataTypes.STRING
    });
  
    friends.associate = function(models) {
      friends.hasMany(models.Users, {
        onDelete: "cascade"
      });
    };
  
    return friends;
  };
  
  