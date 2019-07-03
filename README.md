# Node-JavaScript-IDE(Backend)

### Given Assignment Task:

* Create an API to accept incoming request from front end containing code
* Handle XSS attacks
* Validate the incoming request

## Description 
  Developing Node application for storing the data by an incoming request from front end containing code. 
    MySQL database using for storing the data.

## Prerequisite :
### NPM
     npm v5.5.1
    node v8.9.1
### Database
    MySQL server v( 5.7.26-ndb-7.6.10)
  
### Packages :
    asyncawait v1.0.8
    body-parser v1.17.0
    express v4.15.0
    helmet v3.18.0
    promise-mysql v3.3.1
    xss v1.0.6
    babel-cli v6.26.0
    babel-core v6.26.0
    babel-preset-env v1.6.1
    babel-preset-es2015 v6.24.1
    nodemon v1.19.1
    
 
## Install

### NPM
 NPM package  install by the following command

```bash
npm install
```
## Database Config
  Database configuration are set in config.js file
  ```javascript
  let config = {
    app_port:0000,          // Application runs on that port
    mysql: {                // MySQL database configuration for connect database
        host: "127.0.0.1",
        username: "",
        password: "",
        database:''
    }
  };
  ```
## Validations Done

* xss attacks to be avoided using [helmet](https://www.npmjs.com/package/helmet)  
* xss content filter using npm pacage [xss](https://www.npmjs.com/package/xss)

## Run Application
### DB Script
  First, we run the query in starter_script.sql (./DB Script/starter_script.sql)

### Start Server
  Start the Server by using the following command
  ```bash
npm start
```
