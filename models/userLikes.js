module.exports = function(sequelize, DataTypes) {
    let UserLikes = sequelize.define("UserLikes", {
      category: DataTypes.TEXT,
      currency: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      title: DataTypes.TEXT
    });
  
    UserLikes.associate = function(models) {
      UserLikes.belongsTo(models.Users, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return UserLikes;
};
  