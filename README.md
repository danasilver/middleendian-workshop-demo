## Middle Endian Web Demo

Code from the workshop on May 11, 2016.

### Installation

#### Install Node.js

Install from the [Node.js](https://nodejs.org/) website.

If you're on OS X, I recommend installing with
[n](https://github.com/tj/n) or [nvm](https://github.com/creationix/nvm).

If you use [Homebrew](http://brew.sh), you can

```sh
$ brew install n
$ n 4
```

to install [n](https://github.com/tj/n) and Node.js version 4.

#### Install PostgreSQL

* [Windows](http://www.postgresql.org/download/windows/)
* [OS X](http://postgresapp.com/)

#### Install the project requirements

```sh
$ npm install
```

If you're starting the project from scratch (i.e. you don't have a **package.json**), run

```sh
$ npm init
```

and answer the interactive questions.

You can install the
[dependencies](https://github.com/danasilver/middleendian-workshop-demo/blob/dfc856c2b6a32134bd280482525be9306c1622eb/package.json#L14-L20)
one at a time as you need them, or all at once with

```sh
$ npm install --save express body-parser knex pg pug
```

### Setup the Local Development Database

Make sure your Postgres installation is running.
On OS X you'll see the elephant logo in the toolbar.
Open the app (or click the elephant logo) and open `psql`.

From the `psql` console, run:

```
username# create database middleendian;
```

to create the database. The name of the database (`middleendian`)
can be whatever you like, but it'll need to match the database
in the development settings of your
[knexfile.js](https://github.com/danasilver/middleendian-workshop-demo/blob/cc3d996324643c5b8342715b87b09b78ab85c021/knexfile.js#L5).

Use the [Knex CLI](http://knexjs.org/#Migrations-CLI) to run the migrations:

```sh
$ npm install -g knex
$ knex migrate:latest
```

### Develop

Start the server:

```sh
$ node .
```

This is equivalent to `node index.js`.

Visit **localhost:3000** in your web browser to see the running site.

To stop the server (and get back to your terminal), use <kbd>Ctrl + c</kbd>.

### Deploy to Heroku

#### Get setup with Heroku

* Create a [Heroku account](https://signup.heroku.com/).
* Download and install the [Heroku Toolbelt](https://toolbelt.heroku.com/).
* [Check for an existing SSH key](https://help.github.com/articles/checking-for-existing-ssh-keys/).
* If you don't have one, [generate an SSH key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/).
* [Add your SSH key to Heroku](https://devcenter.heroku.com/articles/keys).
* If you don't have Git installed, follow [the installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

#### Push your code to Heroku

##### Commit your changes with Git

We use Git to deploy code to Heroku.

If you haven't already initialized a Git repository, initialize one with

```sh
$ git init
```

You can run `git status` to check if you already initialized one.
If you didn't, you'll get

```
$ git status
fatal: Not a git repository (or any of the parent directories): .git
```

Commit the latest changes:

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
$ git push heroku master
```

##### Migrate the database on Heroku

This runs the `migrate:latest` script we added to the
[package.json](https://github.com/danasilver/middleendian-workshop-demo/blob/a0d253d1ba152549df01cbe3c4e0a92079e58e06/package.json#L8).

```sh
$ heroku run npm run migrate:latest
```

##### Open the live app

```sh
$ heroku open
```

The website will be **your-app-name.herokuapp.com**.

### Questions

If you have any questions or comments,
[open an issue](https://github.com/danasilver/middleendian-workshop-demo/issues/new) on this repo.
