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
 * [asyncawait v1.0.8](https://www.npmjs.com/package/asyncawait) - Avoid Callbacks hell
 * [body-parser v1.17.0](https://www.npmjs.com/package/body-parser) - Parse incoming request bodies in a middleware
 * [express v4.15.0](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node
 * [helmet v3.18.0](https://www.npmjs.com/package/helmet) - Secure your Express apps by setting various HTTP headers
 * [promise-mysql v3.3.1](https://www.npmjs.com/package/promise-mysql) - Wrapper for mysqljs/mysql that wraps function calls with [Bluebird](https://github.com/petkaantonov/bluebird/) promises
 * [xss v1.0.6](https://www.npmjs.com/package/xss) -  Used tofilter input from users to prevent XSS attacks
 * [nodemon v1.19.1](https://www.npmjs.com/package/nodemon) - restarting the node application when file changes in the directory are detected.

## Install

### NPM
 NPM packages install by the following command

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
* Empty content are avoided in store process.

## Run Application
### DB Script
  First, we run the query in [starter_script.sql](https://github.com/rajaabinesh/Node-Javasctipt-IDE-Backend-/blob/master/DB%20Script/starter_script.sql)

### Start Server
  Start the Server by using the following command
  ```bash
npm start
```
### List of API
Sharing postman collection : https://www.getpostman.com/collections/ad1b13b0c38bf9a1a409
We are using two api
1. For getting the data 
    Method   : GET
    URL      : http://localhost:8085/api/file
    Response : {
                  "code": 200,
                  "status": "success",
                  "message": "File Sent Successfully",
                  "data": {
                            "code": 200,
                            "status": "success",
                            "message": "File Sent Successfully",
                            "data": {
                            "id": 1,
                            "text_code": "function myFunction() {\n  var str = \"How are you doing today?\";\n  var res =                                             str.split(\" \");\n\tconsole.log(res)\n}"
                                }
                            }
           
 2. For Storing the data 
    Method   : POST
    URL      : http://localhost:8085/api/file
    Request  : key = code
               value = function myFunction() {
                        var str = "How are you doing today?";
                        var res = str.split(" ");
	                      console.log(res)
                       }
    Response : {
                "code": 200,
                "status": "success",
                "message": "File saved Successfully",
                "data": {
                    "code": "function myFunction() {\n  var str = \"How are you doing today?\";\n  var res = str.split(\"                                   \");\n\tconsole.log(res)\n}"
                  }
                }
    
    
