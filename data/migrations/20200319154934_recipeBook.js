
exports.up = function(knex) {
  return knex.schema.createTable('recipeBook', table => {
      table.increments('id')
      table.text('recipeID').unique().notNullable()
      table.text('recipeName').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes')
};
