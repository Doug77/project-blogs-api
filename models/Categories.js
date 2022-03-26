const { DataTypes } = require('sequelize');

const atributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const Categories = sequelize.define('Categories', atributes, {
    underscored: false,
    timestamps: false,
    tableName: 'Categories',
  });
  
  return Categories;
};
