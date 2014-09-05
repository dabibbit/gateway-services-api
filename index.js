const express = require('express');
const BridgesController = require(__dirname+'/lib/bridges_controller.js');

function Plugin(options) {

  var router = new express.Router();
  var bridgesController = new BridgesController({
    gatewayd: options.gatewayd
  });

  router.get('/bridge', bridgesController.info.bind(bridgesController));
  router.post('/bridge/quotes', bridgesController.getQuote.bind(bridgesController));
  router.post('/bridge/payments', bridgesController.submitPayment.bind(bridgesController));
  router.get('/bridge/payments', bridgesController.paymentsHistory.bind(bridgesController));
  router.get('/bridge/payments/:id', bridgesController.paymentStatus.bind(bridgesController));


  this.router = router;
}

module.exports = Plugin;

