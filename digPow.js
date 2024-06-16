// digPow.js

// Strategy Stages:
// n = 46288; p = 3 => Input
// [ 4, 6, 2, 8, 8 ] => Split digits
// [ 64, 1296, 32, 262144, 2097152 ] => Increase in successive powers
// 2360688 => Sum array
// 51 => Output

const digPow = (n, p) => {
  if (!isPositiveWholeNumber(n) || !isPositiveWholeNumber(p)) {
    return -1;
  }

  const digits = n.toString().split("").map(Number);
  console.log(digits);
  let powArr = digits.map((base, index) => calcPower(base, p + index));
  console.log(powArr);
  let sum = powArr.reduce((acc, cur) => acc + cur, 0);
  console.log(sum);

  return sum % n === 0 ? sum / n : -1;
};

const isPositiveWholeNumber = (num) => {
  return Number.isInteger(num) && num > 0;
};

const calcPower = (base, exponent) => {
  return Math.pow(base, exponent);
};

console.log(digPow(89, 1)); // => 1 ---> since 8¹ + 9² = 89 = 89 * 1
console.log(digPow(92, 1)); // => -1 ---> since there is no sum such, return -1.
console.log(digPow(695, 2)); // => 2 ---> since 6² + 9³ + 5⁴= 1390 = 695 * 2
console.log(digPow(46288, 3)); // => 51 ---> since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
