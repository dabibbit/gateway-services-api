const Promise = require('bluebird');

function BridgeManager(options) {
  this.gatewayd = options.gatewayd;
}

BridgeManager.prototype = {
  constructor: BridgeManager,
  test: function() {
    console.log('test');
  },
  getQuote: function(options) {
    var _this = this;
    var RippleAddress = _this.gatewayd.data.models.rippleAddresses;
    var Policy = _this.gatewayd.data.models.policies;
    return new Promise(function(resolve, reject) {
      if (!options) {
        return reject(new Error('invalid parameters'));
      }
      if (!_this.gatewayd.validator.isRippleAddress(options.address)) {
        return reject(new Error('invalid ripple address'));
      }
      if (!options.amount) {
        return reject(new Error('invalid amount'));
      }
      if (!_this.gatewayd.validator.isFloat(options.amount)) {
        return reject(new Error('invalid amount'));
      }
      if (!options.currency) {
        return reject(new Error('invalid currency'));
      }

      return RippleAddress.findOrCreate({
        address: options.address,
        tag: options.destinationTag
      })
      .then(function(rippleAddress){
        console.log('rippleAddy', rippleAddress.id);
        return Policy.find({
          where: {
            ripple_address_id: rippleAddress.id
          }
        })
        .then(function(policy) {
          if (policy) {
            resolve({
              external_account_id: policy.external_account_id,
              amount: options.amount / (1 - policy.fee),
              currency: options.currency
            });
          } else {
            reject(new Error('ripple address not registered'));
          }
        })
        .error(reject);
      })
      .error(reject);
    });
  },

  submitPayment: function() {
    return new Promise(function(resolve, reject) {

    });
  },

  getPaymentStatus: function() {
    return new Promise(function(resolve, reject) {

    });
  },

  getPaymentsHistory: function() {
    return new Promise(function(resolve, reject) {

    });
  }
};

module.exports = BridgeManager;

