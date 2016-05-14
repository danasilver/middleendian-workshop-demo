## Middle Endian Web Demo

Code from the workshop on May 11, 2016.

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

Start the server:

```sh
$ node .
```

Visit **localhost:3000** in your web browser.

### Deploy to Heroku

#### Get setup with Heroku

* Create a [Heroku account](https://signup.heroku.com/).
* Download and install the [Heroku Toolbelt](https://toolbelt.heroku.com/).
* [Check for an existing SSH key](https://help.github.com/articles/checking-for-existing-ssh-keys/).
* If you don't have one [generate an SSH key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/).
* [Add your SSH key to Heroku](https://devcenter.heroku.com/articles/keys).

#### Push your code

##### Make sure the latest changes are committed

```sh
$ git add .
$ git commit -m "Commit message."
```

##### Create an app on Heroku

```sh
$ heroku create
```

You can run this command with a custom name if you want:

```sh
$ heroku create custom-name
```

The `heroku create` command will add a Git remote named `heroku` to your Git config.

##### Create the [database](https://elements.heroku.com/addons/heroku-postgresql) on Heroku:

```sh
$ heroku addons:create heroku-postgresql:hobby-dev
```

##### Push to Heroku

```sh
git push heroku master
```

##### Migrate the database on Heroku

This runs the `migrate:latest` script we added to the
[package.json](https://github.com/danasilver/middleendian-workshop-demo/blob/a0d253d1ba152549df01cbe3c4e0a92079e58e06/package.json#L8).

```sh
heroku run npm run migrate:latest
```
