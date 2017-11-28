import test from 'ava';
import {formatTime} from './time'

test('125 » 2 min. 5 sek', t => {
	t.is(formatTime(125), '2 min 5 sec')
});

test('3700 » 1 hour 1 min 40 sec', t => {
	t.is(formatTime(3700), '1 hour 1 min 40 sec')
});