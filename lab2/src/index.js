// 1
const gretter = (myArray) => {
  for (const name of myArray) {
    console.log(`Hello ${name}`)
  }
}

// 2
const capitalize = (capitalizeStr) => {
  const [firstLetter, ...theRest] = Array.from(capitalizeStr)

  return `${firstLetter.toUpperCase()}${theRest.join('')}`
}

// 3
const capitalizeArray = (array) => {
  return array.map((x) => capitalize(x))
}

// 4
const filterLessthanTwenty = (array) => {
  return array.filter((x) => x < 20)
}

// 5.a
/**
 *
 * @param {int[]} array Array to calculate the sum of
 */
const calcSum = (array) => {
  return array.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  )
}

// 5.b
const calcProduct = (array) => {
  return array.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  )
}

// 6
class Car {
  constructor (model, year) {
    this.model = model
    this.year = year
  }

  details () {
    return `Model: ${this.model} Engine ${this.year}`
  }
}

class Sedan extends Car {
  constructor (model, year, balance) {
    super(model, year)
    // Since balance is a dollar amount, we should always represent this as a fixed w/ two decimal places.
    this.balance = balance.toFixed(2)
  }

  info () {
    return `${this.model} has a balance of $${this.balance}`
  }
}

module.exports = {
  gretter,
  capitalize,
  capitalizeArray,
  filterLessthanTwenty,
  calcSum,
  calcProduct,
  Car,
  Sedan
}
