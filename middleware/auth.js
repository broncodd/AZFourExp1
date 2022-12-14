/**
 * @description Middleware function which authenticates user
 * @param {Request} req Request Object from express framework
 * @param {Response} res Response Object from express framework
 * @param {Function} next Next function to call next middleware
 * @returns {void | any}
 */
// play one game to get to survey for development
// set maximum games

const config = require('../config.json')

function auth(req, res, next) {
    if (req.session.userId && req.session.gamePlayed>=config.maxGame ) {
      return res.redirect('/')
    } 
       next()
  }
module.exports = auth;

