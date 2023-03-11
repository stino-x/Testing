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
describe('stringLength', () => {
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
})
function reverseString(string) {
  return string.split('').reverse().join('');
}

describe('reverseString', () => {
  test('reverses a string', () => {
    expect(reverseString('boob')).toBe('boob');
    expect(reverseString('world')).toBe('dlrow');
  });
});


// CALCULATOR
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    if (a === 0) {
      throw new Error("Cannot divide zero");
    }
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("add", () => {
    test("adds two positive numbers", () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test("adds a positive and negative number", () => {
      expect(calculator.add(2, -3)).toBe(-1);
    });

    test("adds two negative numbers", () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });
  });

  describe("subtract", () => {
    test("subtracts two positive numbers", () => {
      expect(calculator.subtract(3, 2)).toBe(1);
    });

    test("subtracts a positive and negative number", () => {
      expect(calculator.subtract(2, -3)).toBe(5);
    });

    test("subtracts two negative numbers", () => {
      expect(calculator.subtract(-2, -3)).toBe(1);
    });
  });

  describe("divide", () => {
    test("divides two positive numbers", () => {
      expect(calculator.divide(6, 3)).toBe(2);
    });

    test("divides a positive and negative number", () => {
      expect(calculator.divide(6, -3)).toBe(-2);
    });

    test("throws an error when dividing by zero", () => {
      expect(() => calculator.divide(6, 0)).toThrowError(
        "Cannot divide by zero"
      );
    });
  });

  describe("multiply", () => {
    test("multiplies two positive numbers", () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test("multiplies a positive and negative number", () => {
      expect(calculator.multiply(2, -3)).toBe(-6);
    });

    test("multiplies two negative numbers", () => {
      expect(calculator.multiply(-2, -3)).toBe(6);
    });
  });
});

//CAPITALIZE
describe('capitalize function', () => {
  it('should capitalize the first letter of a string', () => {
    const result = capitalize('hello world');
    expect(result).toBe('Hello world');
  });
});
function capitalize(string) {
  for (var i = 0; i < string.length; i++) {
  if (string[0].toLowerCase() === string[0]) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    return string;
  }
}
}





// function reverseString(string) {
//   let reversed = '';
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversed += string[i];
//   }
//   return reversed;
// }
// describe('reverseString', () => {
//   test('reverseString function should throw an error if the string is not reversed', () => {
//   expect(() => {
//     reverseString('boob');
//   }).toThrow('boob');
// });
// test('reverseString function should throw an error if the string is empty', () => {
//   expect(() => {
//     reverseString('');
//   }).toThrow('String must be at least 1 character long');
// });
// })

