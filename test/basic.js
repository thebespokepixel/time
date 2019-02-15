import test from 'ava'
import {bespokeTimeFormat, bespokeTime} from '..'

test('Basic Formatting as Friday, February 15th, 2019, 2:06:30 PM', t => {
	const pointInSpaceAndTime = bespokeTime('2019-02-15 14:06:30')
	t.is(bespokeTimeFormat(pointInSpaceAndTime, 'dddd, mmmm dS, yyyy, h:MM:ss TT'), 'Friday, February 15th, 2019, 2:06:30 PM')
})
