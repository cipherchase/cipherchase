const add = (a, b) => a + b;
test('adds fn to equal to 5', () => {
  expect(add(2, 3)).toBe(5);
});