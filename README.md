# Project: Portfolio Website

### Install

This project requires **Python 2.7** and the following libraries installed:

- [Nodejs](https://nodejs.org/en/) for frontend development and package management

In a terminal or command window, navigate to the top-level project directory(that contains this README) and run the following commands:

```bash
pip install -r requirements
npm install
```  
### Data

The data for the canvas:
- [NIST Special Database 19 Handprinted Forms and Characters](https://www.nist.gov/srd/nist-special-database-19)

### Build 

Build the static assets with gulp:

```bash
gulp
```  

Rerun gulp when you change the frontend code. Make sure to clear the browser cache.

### Run

Run locally with :

```bash
python app.py
``` 

### Deploy:

Instructions to deploy using git. For example, Heroku:

```bash
git remote add heroku <your_herkoku_app_url>
git remote add heroku-staging <your_staging_app_url>
``` 

Push the app to the Heroku remote:

```bash
git push heroku master:master
``` 

If you have a staging branch you can push the staging branch to your staging 
app with the following:

```bash
git push heroku-staging staging:master
``` 
