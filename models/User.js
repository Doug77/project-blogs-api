const { DataTypes } = require('sequelize');

const atributte = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  displayName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const Users = sequelize.define('Users', atributte, {
    underscored: false,
    timestamps: false,
    tableName: 'Users',
  });
  
  Users.associate = (model) => {
    Users.hasMany(model.BlogPosts, {
      foreingKey: 'userId',
      as: 'Users',
    });
  };

  return Users;
};
