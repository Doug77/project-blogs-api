const preferenciesObj = {
  underscored: false,
  timestamps: false,
  tableName: 'PostsCategories',
};

module.exports = (sequelize) => {
  const PostsCategories = sequelize.define('PostsCategories', {}, preferenciesObj);

  PostsCategories.associate = (model) => {
    model.BlogPosts.belongsToMany(
      model.Categories,
      { 
        foreignKey: 'postId', ortherKey: 'categoryId', through: PostsCategories, as: 'categories',
      },
    );

    model.Categories.belongsToMany(
      model.BlogPosts,
      { 
        foreignKey: 'categoryId', ortherKey: 'postId', through: PostsCategories, as: 'Posts',
      },
    );
  };

  return PostsCategories;
};
