/*
Author  : C.RAJA ABINESH
Company : GSM PLUS INFOTECH
*/


import database from "../Configuration/database.config"; // Database Connection

const fileService = {};
fileService.getCode= async () => {
    try {
        let query = "SELECT * FROM file_code"; 
        let iData = await database.pool.query(query);
        return (iData && iData.length) ? iData[0] : [];
    } catch (error) {
        throw error;
    }
}
fileService.createCode = async (data) => {
    try {
        let queryData = [];
        let query = 'UPDATE stebr.file_code SET ';
        query += 'text_code = ? ';
        query += 'WHERE id = ? ';
        queryData.push(data);
        queryData.push('1');
        let iData = await database.pool.query(query,queryData);
        return iData;
    } catch (error) {
        throw error;
    }
}

export default fileService;