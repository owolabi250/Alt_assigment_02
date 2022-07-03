// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {}
// ========================

/**
 * Challenge - 1*/
const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
/** Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 *
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
function sumOfNumbers(arrayOfNumbers) {
  let sum = 0
  for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
    sum += i
    console.log(sum)
  }
  return arrayOfNumbers.length
}
sumOfNumbers(numberArray)

/**
 * Challenge - 2
 *
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 *
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers(arrayOfNumbers) {
  const evenNumbers = arrayOfNumbers.filter((even) => {
    if (even % 2 === 0) {
      return even
    } else {
      return
    }
  })
  console.log(evenNumbers.length)
  return evenNumbers.length
}
countEvenNumbers(numberArray)

/**
 * Challenge - 3
 *
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 *
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 *
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
  const fahArray = arrayOfNumbers.map((cel) => {
    const fah = cel * (9 / 5) + 32
    // console.log(fah)
    return Math.trunc(fah)
  })
  console.log(fahArray)

  return fahArray
}
celsiusToFahrenheit(numberArray)

// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment
// ========================

