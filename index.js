'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var dateformat = _interopDefault(require('dateformat'));
var moment = _interopDefault(require('moment'));
var luxon = require('luxon');



exports.bespokeTimeFormat = dateformat;
exports.bespokeTime = moment;
Object.defineProperty(exports, 'DateTime', {
	enumerable: true,
	get: function () {
		return luxon.DateTime;
	}
});
Object.defineProperty(exports, 'Duration', {
	enumerable: true,
	get: function () {
		return luxon.Duration;
	}
});
Object.defineProperty(exports, 'Interval', {
	enumerable: true,
	get: function () {
		return luxon.Interval;
	}
});
