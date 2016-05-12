### Install

Install the requirements:

```sh
$ npm install
```

Make sure you have PostgreSQL (Postgres.app) installed and open `psql` from the Elephant logo in the toolbar.

From `psql` run:

```
username# create database middleendian;
```

### Migrate the database

```sh
$ npm install -g knex
$ knex migrate:latest
```

### Develop

```sh
$ node .
```
