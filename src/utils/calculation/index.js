/**
 * object keys and types:
 * label : String
 * key: String
 * isNumber: Boolean (true for numbers false for operators)
 * value: Any (Number for numbers and function for operators)
 */
export const calculator = class {
  static buttonArray = [
    // 1st row from left to right
    { label: "AC", key: "allClear", value: "", isNumber: false },
    {
      label: "C",
      key: "clear",
      value: "",
      isNumber: false,
    },
    { label: "%", key: "residual", value: "%", isNumber: false },
    { label: "/", key: "devide", value: "/", isNumber: false },
    // 2nd row from left to right
    {
      label: "7",
      key: "seven",
      value: 7,
      isNumber: true,
    },
    {
      label: "8",
      key: "eight",
      value: 8,
      isNumber: true,
    },
    {
      label: "9",
      key: "nine",
      value: 9,
      isNumber: true,
    },
    { label: "*", key: "multiply", value: "*", isNumber: false },
    // 3rd row from left to right
    {
      label: "4",
      key: "four",
      value: 4,
      isNumber: true,
    },
    {
      label: "5",
      key: "five",
      value: 5,
      isNumber: true,
    },
    {
      label: "6",
      key: "six",
      value: 6,
      isNumber: true,
    },
    { label: "-", key: "minus", value: "-", isNumber: false },
    // 4th row from left to right
    {
      label: "1",
      key: "one",
      value: 1,
      isNumber: true,
    },
    {
      label: "2",
      key: "two",
      value: 2,
      isNumber: true,
    },
    {
      label: "3",
      key: "three",
      value: 3,
      isNumber: true,
    },
    { label: "+", key: "plus", value: "+", isNumber: false },
    // 5th row from left to right
    { label: "!", key: "factorial", value: "!", isNumber: false },
    {
      label: "0",
      key: "zero",
      value: 0,
      isNumber: true,
    },
    {
      label: ".",
      key: "decimal",
      value: ".",
      isNumber: true,
    },
    { label: "=", key: "equal", value: "", isNumber: false },
  ];
  static plus = (num1, num2) => (num1 + num2).toFixed(2);
  static minus = (num1, num2) => (num1 - num2).toFixed(2);
  static multiply = (num1, num2) => (num1 * num2).toFixed(2);
  static devide = (num1, num2) => (num1 / num2).toFixed(2);
  static residual = (num1, num2) => (num1 % num2).toFixed(2);
  static factorial = (num1) => {
    let res = 1;
    if (num1 % 1 === 0 && num1 >= 0) {
      for (let i = num1; i >= 1; i--) {
        res *= i;
      }
    } else {
      res = "NaN";
    }
    return res;
  };
  static commafy(num) {
    let str = num.split(".");
    if (str[0].length >= 5) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(".");
  }
};
