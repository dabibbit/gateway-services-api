const Plugin = require('gateway-services-api');

module.exports = function(gatewayd) {
  var plugin = new Plugin({
    gatewayd: gatewayd
  });

  gatewayd.server.use('/', plugin.router);
}

