import Validator from '../validator';

test('testing class Validator', () => {
	const result = new Validator('Anna');
	expect(result).toEqual({"name": "Anna"});
});

test.each([
	['Anna', 'Anna', true],
	['anna', 'anna', true],
	['1anna', '1anna', false],
	['anna1', 'anna1', false],
	['_anna', '_anna', false],
	['anna_', 'anna_', false],
	['-anna', '-anna', false],
	['anna-', 'anna-', false],
	['&anna', '&anna', false],
	['an&na', 'an&na', false],
	['anna&', 'anna&', false],
	['an-na', 'an-na', true],
	['a2n-na', 'a2n-na', true],
	['an-n2a', 'an-n2a', true],
	['a12n-na', 'a12n-na', true],
	['an-123na', 'an-123na', true],
	['an-123_na', 'an-123_na', true],
	['a12n-n123a', 'a12n-n123a', true],
	['a12n-n123a1', 'a12n-n123a1', false],
	['a12n-n1234a', 'a12n-n1234a', false],
	['a12n-N51234a', 'a12n-N51234a', false],
	['an_nA', 'annA', true],
	['a5n_na', 'anna', true],
	['an_n@a', 'Anna', false],
])('testing class Validator for %s name', (_, name, expected) => {
	const user = new Validator(name);
	const result = user.validateUsername();
	expect(result).toBe(expected);
});