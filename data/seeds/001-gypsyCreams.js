
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipebook').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipebook').insert([
        {id: 1, recipeID: '1', recipeName: 'Gypsy Creams'},
      ]);
    });
};
