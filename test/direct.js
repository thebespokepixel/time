import test from 'ava'
import {DateTime, Interval, dateformat, moment} from '../index.js'

test('Basic DateTime -> dateformat as Friday, February 15th, 2019, 2:06:30 PM', t => {
	const pointInSpaceAndTime = DateTime.fromISO('2019-02-15T14:06:30Z')
	t.is(dateformat(pointInSpaceAndTime, 'dddd, mmmm dS, yyyy, h:MM:ss TT'), 'Friday, February 15th, 2019, 2:06:30 PM')
})

test('Basic Interval -> Duration', t => {
	const IntervalSince = Interval.fromDateTimes(DateTime.fromISO('2019-02-15T14:06:30Z'), DateTime.fromISO('2021-11-02T22:22:00Z'))
	t.deepEqual(IntervalSince.toDuration(['days', 'hours', 'minutes', 'seconds']).toObject(), {days: 991, hours: 8, minutes: 15, seconds: 30})
})

test('Basic moment -> dateformat as Friday, February 15th, 2019, 2:06:30 PM', t => {
	const pointInSpaceAndTime = moment.utc('2019-02-15 14:06:30')
	t.is(dateformat(pointInSpaceAndTime, 'dddd, mmmm dS, yyyy, h:MM:ss TT'), 'Friday, February 15th, 2019, 2:06:30 PM')
})
