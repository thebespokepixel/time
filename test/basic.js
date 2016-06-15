import test from 'ava'
import {bespokeTimeFormat, bespokeTime} from '..'

test(`Basic Formatting as Wednesday, June 15th, 2016, 3:30:26 PM`, t => {
	const pointInSpaceAndTime = bespokeTime('2016-06-15 15:30:26')
	t.is(bespokeTimeFormat(pointInSpaceAndTime, 'dddd, mmmm dS, yyyy, h:MM:ss TT'), 'Wednesday, June 15th, 2016, 3:30:26 PM')
})
