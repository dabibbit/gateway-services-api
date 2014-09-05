const BridgeManager = require(__dirname+'/bridge_manager.js');

function BridgesController(options) {
  this.bridgeManager = new BridgeManager(options);
}

BridgesController.prototype = {
  constructor: BridgesController,
  info: function(request, response) {
    response
      .status(200)
      .send({
        success: true,
        plugin: 'gateway-services-api',
        version: '0.1.0',
        documentation: 'https://github.com/gatewayd/gateway-services-api'
      });
  },
  getQuote: function(request, response) {
    this.bridgeManager.getQuote(request.body)
    .then(function(quote) {
      response
        .status(200)
        .send({
          success: true,
          quote: quote
        });
    })
    .error(function(error) {
      response
        .status(500)
        .send({
          success: false,
          error: error
        });
    });
  },

  submitPayment: function(request, response) {
    this.bridgeManager.submitPayment()
    .then(function(payment) {
      response
        .status(200)
        .send({
          success: true,
          payment: payment
        });
    })
    .error(function(error) {
      response
        .status(500)
        .send({
          success: false,
          error: error
        });
    });
  },

  paymentsHistory: function(request, response) {
    this.bridgeManager.getPaymentsHistory()
    .then(function(payments) {
      response
        .status(200)
        .send({
          success: true,
          payments: payments
        });
    })
    .error(function(error) {
      response
        .status(500)
        .send({
          success: false,
          error: error
        });
    });
  },

  paymentStatus: function(request, response) {
    this.bridgeManager.getPaymentStatus()
    .then(function(payment) {
      response
        .status(200)
        .send({
          success: true,
          payment: payment
        });
    })
    .error(function(error) {
      response
        .status(500)
        .send({
          success: false,
          error: error
        });
    });
  }
};

module.exports = BridgesController;

