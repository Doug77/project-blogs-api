const { DataTypes } = require('sequelize');

const atributte = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  published: {
    type: DataTypes.DATE,
  },
  updated: {
    type: DataTypes.DATE,
  },
};

module.exports = (sequelize) => {
  const BlogPosts = sequelize.define('BlogPosts', atributte, {
    underscored: false,
    timestamps: false,
    tableName: 'BlogPosts',
  });

  BlogPosts.associate = (model) => {
    BlogPosts.belongsTo(model.Users, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return BlogPosts;
};
