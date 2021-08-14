/**
 * Http Errors
 */
const createError = require('http-errors');

/**
 * Json Web Token 
 */
const jwt = require('jsonwebtoken');

/**
 * User Model
 */
const User = require('../models/user');

/**
 * LoggedIn
 * @param req
 * @param res
 * @param next
 */
exports.authenticated  = (req, res, next) => {
    let token = req.headers['authorization'];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) throw createError(401);
        req.user = {id: decoded.id, name: decoded.name, email: decoded.email};
        next();
    });
};

/**
 * Guest
 * @param req
 * @param res
 * @param next
 */
exports.guest  = (req, res, next) => {
    let token = req.headers['authorization'];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return next();
        throw createError(403);
    });
};
