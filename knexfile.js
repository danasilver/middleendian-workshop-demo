// Settings Knex uses to connect to the database.
// We use PostgreSQL in both development and production.
// A template for a Knexfile can be generated with
// $ knex init

// See: http://knexjs.org/#knexfile

// process.env.NODE_ENV || 'development'
// is used to select the correct settings for
// development or production.
// See index.js for more details.

// process.env.DATABASE_URL is used in production
// on Heroku to get the database connection.
// When we create a database, Heroku will automatically
// set the DATABASE_URL variable. Knex knows how to read
// this as a proper database connection.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'middleendian'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
