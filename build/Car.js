'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Wheel = require('./Wheel');

var _Wheel2 = _interopRequireDefault(_Wheel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function () {
  function Car(color) {
    _classCallCheck(this, Car);

    this.wheel = new _Wheel2.default();
    console.log(color + ' car built!');
  }

  _createClass(Car, [{
    key: 'drive',
    value: function drive() {
      console.log('driving');
    }
  }]);

  return Car;
}();

module.exports = Car;