const winston = require('winston');
winston.add(winston.transports.File, { filename: 'routes.log' });

exports.log = function(type, message) {
  winston.log(type, message);
}