const express = require('express');

function Plugin(options) {

  var router = new express.Router();
  var bridgesController = new BridgesController(options);

  router.post('/bridge/quotes', bridgesController.getQuote);
  router.post('/bridge/payments', bridgesController.submitPayment);
  router.get('/bridge/payments', bridgesController.paymentsHistory);
  router.get('/bridge/payments/:id', bridgesController.paymentStatus);

  this.router = router;
}

module.exports = Plugin;

