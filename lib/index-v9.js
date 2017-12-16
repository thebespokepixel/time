'use strict'

Object.defineProperty(exports, '__esModule', {
	value: true
})

function _interopDefault(ex) {
	return (ex && (typeof ex === 'object') && 'default' in ex) ? ex.default : ex
}

const dateformat = _interopDefault(require('dateformat'))
const microtime = _interopDefault(require('microtime'))
const moment = _interopDefault(require('moment'))

exports.bespokeTimeFormat = dateformat
exports.bespokeMicrotime = microtime
exports.bespokeTime = moment

