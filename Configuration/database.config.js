/*
Author  : C.RAJA ABINESH
Company : GSM PLUS INFOTECH
*/

// Mysql Connection 

import config from './config'

var mysql = require('promise-mysql');
let host = config.mysql.host;
let username = config.mysql.username;
let password = config.mysql.password;
let database_name = config.mysql.database;

const connectToMysqlDb = function () {
    mysql.createConnection({
        host: host,
        user: username,
        password: password,
        database: database_name
    }).then(function () {
        console.log("Mysql DB Connected");
    }).catch(function (error) {
        console.log(error)
        console.log("Error Mysql DB Connection");
    });
};

const pool = mysql.createPool({
    host: host,
    user: username,
    password: password,
    database: database_name,
    connectionLimit: 10,
    typeCast: function castField(field, useDefaultTypeCasting) {

        // We only want to cast bit fields that have a single-bit in them. If the field
        // has more than one bit, then we cannot assume it is supposed to be a Boolean.
        if ((field.type === "BIT") && (field.length === 1)) {
            var bytes = field.buffer();

            // A Buffer in Node represents a collection of 8-bit unsigned integers.
            // Therefore, our single "bit field" comes back as the bits '0000 0001',
            // which is equivalent to the number 1.
            return (bytes && bytes[0] === 1);
        }
        return (useDefaultTypeCasting());
    }
});

const exportData = {
    connectToMysqlDb: connectToMysqlDb,
    pool: pool
};

export default exportData;