# Teach Me Product

This repository contains the source code of Teach Me Product: a free resource to teach people the fundamentals of software product management.

[The website](https://teachmeproduct.herokuapp.com) is still under construction, so chill out for now.

## Running Locally

First, install git (or Github app) and [NodeJS/npm](http://nodejs.org). You can check that NodeJS and npm are installed by running the following lines in your terminal:

```
node -v
npm -v
```

Then:

```
git clone git@github.com:tilomitra/teach-me-product.git
cd teach-me-product/
npm install
node ./bin/www
```
Then go to [http://localhost:3000](http://localhost:3000).

### Updating Markdown Files

To update markdown files, just edit the file inside the `markdown/` folder. You don't need to restart the server. The change should be viewable if you refresh the page.

## Deploying to Heroku
If you are approved to deploy to Heroku, you should run the following:

First, make sure you add the heroku remote:

```
git remote add heroku https://git.heroku.com/teachmeproduct.git
```

Then, commit your changes and push to the remote:

```
git commit -am 'here are my changes'
git push heroku master
```
