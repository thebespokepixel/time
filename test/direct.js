import test from 'ava'
import {dateformat, moment} from '..'

test('Basic moment -> dateformat as Friday, February 15th, 2019, 2:06:30 PM', t => {
	const pointInSpaceAndTime = moment('2019-02-15 14:06:30')
	t.is(dateformat(pointInSpaceAndTime, 'dddd, mmmm dS, yyyy, h:MM:ss TT'), 'Friday, February 15th, 2019, 2:06:30 PM')
})
