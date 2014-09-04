const Plugin = require('gateway-services-api');

process.env.GATEWAYD_PATH = '/path/to/gatewayd';

module.exports = function(gatewayd) {
  var plugin = new Plugin();

  gatewayd.server.use('/', plugin.router);
}

