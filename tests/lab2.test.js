const {
  gretter,
  capitalize,
  capitalizeArray,
  filterLessthanTwenty,
  calcSum,
  calcProduct,
  Car,
  Sedan
} = require('../lab2/src/index')

// 1
test('Test greeter called 3 times with proper arguments.', () => {
  const consoleSpy = jest.spyOn(console, 'log')

  gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'])

  expect(consoleSpy).toHaveBeenCalledTimes(3)
  expect(consoleSpy).toHaveBeenCalledWith('Hello Randy Savage')
  expect(consoleSpy).toHaveBeenCalledWith('Hello Ric Flair')
  expect(consoleSpy).toHaveBeenCalledWith('Hello Hulk Hogan')
})

// 2
test('Test capitalization fooBar', () => {
  expect(capitalize('fooBar')).toBe('FooBar')
})

test('Test capitalization nodeJs', () => {
  expect(capitalize('nodeJs')).toBe('NodeJs')
})

// 3
test('Test capitalization for array', () => {
  expect(capitalizeArray(['red', 'green', 'blue'])).toStrictEqual(['Red', 'Green', 'Blue'])
})

// 4
test('Test array filter > 20', () => {
  expect(filterLessthanTwenty([1, 60, 34, 30, 20, 5])).toStrictEqual([1, 5])
})

// 5
test('Test array reduction sum', () => {
  expect(calcSum([1,2,3,4])).toBe(10)
})

test('Test array reduction product', () => {
  expect(calcProduct([1,2,3,4])).toBe(24)
})

// 6
test('Test details method of Car', () => {
  const car = new Car('Pontiac Firebird', 1976)
  expect(car.details()).toBe('Model: Pontiac Firebird Engine 1976')
})

test('Test info method of Sedan', () => {
  const sedan = new Sedan('Volvo SD', 2018, 30000)
  expect(sedan.info()).toBe('Volvo SD has a balance of $30000.00')
})
