angular.module('stockMarketApp', [])
  .controller('MainCtrl', [function() {
    var self = this;
    self.stocks = [
      {name: 'Facebook', price: 100, previous: 220},
      {name: 'IBM', price: 140, previous: 120},
      {name: 'Oracle', price: 110, previous: 110},
      {name: 'Apple', price: 140, previous: 120},
      {name: 'MongoDB', price: 110, previous: 110},
      {name: 'Flipkart', price: 400, previous: 420}
    ];
  }]);
