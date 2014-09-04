const BridgeManager = require(__dirname+'/bridge_manager.js');

function BridgesController(options) {
  this.bridgeManager = new BridgeManager(options);
}

BridgesController.prototype = {
  constructor: BridgesController,
  
  getQuote: function(request, response) {
    bridgeManager.getQuote(request.body)
    .then(function(quote) {
      response
        .status(200)
        .send({
          quote: quote
        });
    })
    .error(function(error) {
      response
        .status(500)
        .send({
          error: error
        });
    });
  },

  submitPayment: function(request, response) {
    bridgeManager.submitPayment()
    .then(function(payment) {
      response
        .status(200)
        .send({
          payment: payment
        });
    })
    .error(function(error) {
      response
        .status(500)
        .send({
          error: error
        });
    });
  },

  paymentsHistory: function(request, response) {
    bridgeManager.getPaymentsHistory()
    .then(function(payments) {
      response
        .status(200)
        .send({
          payments: payments
        });
    })
    .error(function(error) {
      response
        .status(500)
        .send({
          error: error
        });
    });
  },

  paymentStatus: function(request, response) {
    bridgeManager.getPaymentStatus()
    .then(function(payment) {
      response
        .status(200)
        .send({
          payment: payment
        });
    })
    .error(function(error) {
      response
        .status(500)
        .send({
          error: error
        });
    });
  }
}

module.exports = BridgesController;

