"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var custom_error_1 = require("../errors/custom-error");
exports.errorHandler = function (err, req, res, next) {
    if (err instanceof custom_error_1.CustomError) {
        res.status(err.statusCode).send(err.serializeErrors());
    }
    else
        res.status(400).send({
            errors: [{ message: "Something went wrong", err: err }],
        });
};
