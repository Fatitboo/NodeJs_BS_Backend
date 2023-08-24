const messages = require('../messages/messages');
const errorTemplate = require('../templates/errorTemplate')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const auth = async (req, res, next) =>{
    try {
        const [, token] = req.headers?.authorization?.split(" ");
        jwt.verify(token, process.env.jwt_secret)
        next()
    } catch (error) {
        errorTemplate(res, error, messages.auth_failed, 500)
    }
}
module.exports = auth