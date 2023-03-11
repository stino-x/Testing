// test
function stringLength(string) {
  let count = 0;
  for (let i = 0; i < string.length; i += 1) {
    count += 1;
  };
  return count;
}
function stringLengthTest(string) {
  const characters = string.length;
  return characters;
}
try {
  const expected = stringLengthTest('password');
  const result = stringLength('password');

  if (expected !== result) {
    throw new Error(`${result} is not equal to ${expected}`);
  } else if(stringLength('') === 0){
    throw new Error(`no characters detected`);
  } else {
    return `${result} is equal to ${expected}`;
  }
} catch (error) {
  return (error.message);
}