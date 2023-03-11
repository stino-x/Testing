function stringLength(string) {
  if (string.length < 1) {
    throw new Error('String must be at least 1 character long');
  }
  if (string.length > 10) {
    throw new Error('String cannot be longer than 10 characters');
  }
  let count = 0;
  for (let i = 0; i < string.length; i += 1) {
    count += 1;
  }
  return count;
}
test('stringLength function should return the correct length of a string', () => {
  expect(stringLength('password')).toBe(8);
});

test('stringLength function should throw an error if the string is empty', () => {
  expect(() => {
    stringLength('');
  }).toThrow('String must be at least 1 character long');
});

test('stringLength function should throw an error if the string is too long', () => {
  expect(() => {
    stringLength('thisisaverylongstring');
  }).toThrow('String cannot be longer than 10 characters');
});

test('stringLength function should not throw an error if the string is exactly 1 character long', () => {
  expect(() => {
    stringLength('a');
  }).not.toThrow();
});

test('stringLength function should not throw an error if the string is exactly 10 characters long', () => {
  expect(() => {
    stringLength('abcdefghij');
  }).not.toThrow();
});
function reverseString(string) {
  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}
test('reverseString function should throw an error if the string is not reversed', () => {
  expect(() => {
    reverseString('boob');
  }).toThrow('boob');
});
test('reverseString function should throw an error if the string is empty', () => {
  expect(() => {
    reverseString('');
  }).toThrow('String must be at least 1 character long');
});