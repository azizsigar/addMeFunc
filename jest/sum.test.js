const sum = require('./sum');

// 1
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
// 2
test('2 + 2 does not equal 5', () => {
  expect(2 + 2).not.toBe(5);
});
// 3
test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
// 4
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});
// 5
test('the list contains oranges', () => {
  const shoppingList = ['apples', 'bananas', 'oranges'];
  expect(shoppingList).toContain('oranges');
});
