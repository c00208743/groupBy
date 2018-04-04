const groupBy = require('./group');

test('adds 1 + 2 to equal 3', () => {
  expect(groupBy(1, 2)).toBe(3);
});
