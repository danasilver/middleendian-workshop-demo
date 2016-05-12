
exports.up = function(knex, Promise) {
  return knex.schema.createTable('course', function(table) {
    table.increments('id').primary();
    table.string('name');
    table.string('code');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('course');
};
