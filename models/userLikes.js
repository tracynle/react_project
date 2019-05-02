module.exports = function(sequelize, DataTypes) {
    let userLikes = sequelize.define("userLikes", {
      category: DataTypes.TEXT,
      currency: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      title: DataTypes.TEXT
    });
  
    userLikes.associate = function(models) {
      userLikes.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return userLikes;
};
  