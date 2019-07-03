/*
Author  : C.RAJA ABINESH
Company : GSM PLUS INFOTECH
*/

import fileService from './service' 
var xss = require("xss");

const fileController = {

    createCode: async (req, res) => {      
        try {
            let code = req.body.code||'';
            var changeCode = xss(code);
            if (code ==='') {              // Validation for data is empty or not
                return res.status(400).send({
                    code: 400,
                    status: "Error",
                    message: "Please Enter the Code",
                    data: ''
                });
            }
            const saveCode = await fileService.createCode(changeCode); //save data to db
            return res.status(200).send({
                code: 200,
                status: "success",
                message: "File saved Successfully",
                data: req.body
            });
        } catch (error) {
            return res.status(400).send({
                code: 400,
                status: "error",
                message: "Error in File Save",
                data: ''
            });
        }
    },
    getCode: async (req, res) => { 
        try {
            const code = await fileService.getCode(); //  get data from db  
            return res.send({
                code: 200,
                status: "success",
                message: "File Sent Successfully",
                data: code
            });
        } catch (error) {
            return res.status(400).send({
                code: 400,
                status: "error",
                message: "Error in File Save",
                data: ''
            });
        }
    }
};

export default fileController;