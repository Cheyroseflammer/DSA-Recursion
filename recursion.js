// 1. COUTNING SHEEP //
const countSheep = (num) => {
  if (num === 0) {
    return;
  }
  console.log(`${num}: Another sheep jumps over the fence`);
  countSheep(num - 1);
};
countSheep(3);

// 2. POWER CALCULATOR //
const powerCalc = (num, exp) => {
  if (exp === 0) {
    return 1;
  }
  let result = num ** exp;
  // logging result to check //
  console.log(result);
  powerCalc(num, exp - 1);
};
powerCalc(10, 2);

// 3. REVERSE STRING //
const reverseString = (str) => {
  if (str.length === 0) {
    return "";
  }
  return reverseString(str.substr(1)) + str.charAt(0);
};
console.log(reverseString("Hello"));

// 4. NTH TRIANGULAR NUMBER //

const triNum = (tNum) => {
  if (tNum === 0) {
    return tNum;
  }
  return tNum + triNum(tNum - 1);
};
console.log(triNum(3));

// 5. STRING SPLITTER //

const strSplit = (str, sep) => {
  let idx = str.indexOf(sep);
  if (idx === -1) return [str];
  return [str.slice(0, idx)].concat(strSplit(str.slice(idx + sep.length), sep));
};
console.log(strSplit("02/20/2020", "/"));

// 6. FIBONACCI //

const fibonacci = (num) => {
  if (num === 1) {
    return [0, 1];
  }
  let result = fibonacci(num - 1);
  result.push(result[result.length - 1] + result[result.length - 2]);
  return result;
};
console.log(fibonacci(13));

// 7. FACTORIAL //

const factorial = (num) => {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
};
console.log(factorial(5));

// 8. FIND A WAY OUT OF THE MAZE //

let mySmallMaze = [
  [" ", " ", " "],
  [" ", "*", " "],
  [" ", " ", "e"],
];

let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"],
];

const exitMaze = (arr) => {
  if (arr.length === 0) {
    return arr;
  }
};
exitMaze(mySmallMaze);
