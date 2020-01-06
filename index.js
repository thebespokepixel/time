'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var dateformat = _interopDefault(require('dateformat'));
var moment = _interopDefault(require('moment'));
var luxon = require('luxon');

const SECOND_SECONDS = 1;
const SECOND_MILLIS = 1000;
const MINUTE_MINUTES = 1;
const MINUTE_SECONDS = 60;
const MINUTE_MILLIS = SECOND_MILLIS * MINUTE_SECONDS;
const HOUR_HOURS = 1;
const HOUR_MINUTES = 60;
const HOUR_SECONDS = MINUTE_SECONDS * HOUR_MINUTES;
const HOUR_MILLIS = MINUTE_MILLIS * HOUR_MINUTES;
const DAY_DAYS = 1;
const DAY_HOURS = 24;
const DAY_MINUTES = HOUR_MINUTES * DAY_HOURS;
const DAY_SECONDS = HOUR_SECONDS * DAY_HOURS;
const DAY_MILLIS = HOUR_MILLIS * DAY_HOURS;
const WEEK_WEEKS = 1;
const WEEK_DAYS = 7;
const WEEK_HOURS = DAY_HOURS * WEEK_DAYS;
const WEEK_MINUTES = DAY_MINUTES * WEEK_DAYS;
const WEEK_SECONDS = DAY_SECONDS * WEEK_DAYS;
const WEEK_MILLIS = DAY_MILLIS * WEEK_DAYS;
const STANDARD_MONTH_DAYS = 30;
const STANDARD_MONTH_HOURS = DAY_HOURS * STANDARD_MONTH_DAYS;
const STANDARD_MONTH_MINUTES = DAY_MINUTES * STANDARD_MONTH_DAYS;
const STANDARD_MONTH_SECONDS = DAY_SECONDS * STANDARD_MONTH_DAYS;
const STANDARD_MONTH_MILLIS = DAY_MILLIS * STANDARD_MONTH_DAYS;
const MONTH_MONTHS = 1;
const MONTH_WEEKS = 5;
const MONTH_DAYS = 35;
const MONTH_HOURS = DAY_HOURS * MONTH_DAYS;
const MONTH_MINUTES = DAY_MINUTES * MONTH_DAYS;
const MONTH_SECONDS = DAY_SECONDS * MONTH_DAYS;
const MONTH_MILLIS = DAY_MILLIS * MONTH_DAYS;
const QUARTER_QUARTERS = 1;
const QUARTER_MONTHS = 3;
const QUARTER_WEEKS = 12;
const QUARTER_DAYS = 84;
const QUARTER_HOURS = DAY_HOURS * QUARTER_DAYS;
const QUARTER_MINUTES = DAY_MINUTES * QUARTER_DAYS;
const QUARTER_SECONDS = DAY_SECONDS * QUARTER_DAYS;
const QUARTER_MILLIS = DAY_MILLIS * QUARTER_DAYS;
const YEAR_YEARS = 1;
const YEAR_QUARTERS = 4;
const YEAR_MONTHS = 12;
const YEAR_WEEKS = 52;
const YEAR_DAYS = 364;
const YEAR_HOURS = DAY_HOURS * YEAR_DAYS;
const YEAR_MINUTES = DAY_MINUTES * YEAR_DAYS;
const YEAR_SECONDS = DAY_SECONDS * YEAR_DAYS;
const YEAR_MILLIS = DAY_MILLIS * YEAR_DAYS;
const HOUR_DAYS = DAY_DAYS / DAY_HOURS;
const MINUTE_DAYS = DAY_DAYS / DAY_MINUTES;
const bespokeTime = moment;
const bespokeTimeFormat = dateformat;

exports.dateformat = dateformat;
exports.moment = moment;
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
exports.DAY_DAYS = DAY_DAYS;
exports.DAY_HOURS = DAY_HOURS;
exports.DAY_MILLIS = DAY_MILLIS;
exports.DAY_MINUTES = DAY_MINUTES;
exports.DAY_SECONDS = DAY_SECONDS;
exports.HOUR_DAYS = HOUR_DAYS;
exports.HOUR_HOURS = HOUR_HOURS;
exports.HOUR_MILLIS = HOUR_MILLIS;
exports.HOUR_MINUTES = HOUR_MINUTES;
exports.HOUR_SECONDS = HOUR_SECONDS;
exports.MINUTE_DAYS = MINUTE_DAYS;
exports.MINUTE_MILLIS = MINUTE_MILLIS;
exports.MINUTE_MINUTES = MINUTE_MINUTES;
exports.MINUTE_SECONDS = MINUTE_SECONDS;
exports.MONTH_DAYS = MONTH_DAYS;
exports.MONTH_HOURS = MONTH_HOURS;
exports.MONTH_MILLIS = MONTH_MILLIS;
exports.MONTH_MINUTES = MONTH_MINUTES;
exports.MONTH_MONTHS = MONTH_MONTHS;
exports.MONTH_SECONDS = MONTH_SECONDS;
exports.MONTH_WEEKS = MONTH_WEEKS;
exports.QUARTER_DAYS = QUARTER_DAYS;
exports.QUARTER_HOURS = QUARTER_HOURS;
exports.QUARTER_MILLIS = QUARTER_MILLIS;
exports.QUARTER_MINUTES = QUARTER_MINUTES;
exports.QUARTER_MONTHS = QUARTER_MONTHS;
exports.QUARTER_QUARTERS = QUARTER_QUARTERS;
exports.QUARTER_SECONDS = QUARTER_SECONDS;
exports.QUARTER_WEEKS = QUARTER_WEEKS;
exports.SECOND_MILLIS = SECOND_MILLIS;
exports.SECOND_SECONDS = SECOND_SECONDS;
exports.STANDARD_MONTH_DAYS = STANDARD_MONTH_DAYS;
exports.STANDARD_MONTH_HOURS = STANDARD_MONTH_HOURS;
exports.STANDARD_MONTH_MILLIS = STANDARD_MONTH_MILLIS;
exports.STANDARD_MONTH_MINUTES = STANDARD_MONTH_MINUTES;
exports.STANDARD_MONTH_SECONDS = STANDARD_MONTH_SECONDS;
exports.WEEK_DAYS = WEEK_DAYS;
exports.WEEK_HOURS = WEEK_HOURS;
exports.WEEK_MILLIS = WEEK_MILLIS;
exports.WEEK_MINUTES = WEEK_MINUTES;
exports.WEEK_SECONDS = WEEK_SECONDS;
exports.WEEK_WEEKS = WEEK_WEEKS;
exports.YEAR_DAYS = YEAR_DAYS;
exports.YEAR_HOURS = YEAR_HOURS;
exports.YEAR_MILLIS = YEAR_MILLIS;
exports.YEAR_MINUTES = YEAR_MINUTES;
exports.YEAR_MONTHS = YEAR_MONTHS;
exports.YEAR_QUARTERS = YEAR_QUARTERS;
exports.YEAR_SECONDS = YEAR_SECONDS;
exports.YEAR_WEEKS = YEAR_WEEKS;
exports.YEAR_YEARS = YEAR_YEARS;
exports.bespokeTime = bespokeTime;
exports.bespokeTimeFormat = bespokeTimeFormat;
