// Migrations define the database schema so you can easily
// create tables and modify the schema of your database.
// See: http://knexjs.org/#Migrations

// You can create a migration file template (like this one) with:
// $ knex migrate:make migration_name

// The up function migrates the database forward,
// applying our change to the database schema.
// In this migration, we create a table named 'course' with
// the columns 'id', 'name', and 'code'. 'id' is an
// autoincrementing column, so it will get filled in
// automatically whenever a new row is created.
exports.up = function(knex, Promise) {
  return knex.schema.createTable('course', function(table) {
    table.increments('id').primary();
    table.string('name');
    table.string('code');
  });
};

// The down function specifies the steps to roll back the migration.
// In the up function, we created the 'course' table, so in
// the down function, we drop the 'course' table.
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('course');
};
