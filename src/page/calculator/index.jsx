import React, { useState } from "react";
import PropTypes from "prop-types";
import { CalcButton, CalcMonitor } from "../../component";
import { calculator } from "../../utils";
function Calculator(props) {
  // states
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [operator, setOperator] = useState("");
  const [operatorFunc, setOperatorFunc] = useState("");
  const [result, setResult] = useState("");
  const calculatorButtonArrays = calculator.buttonArray;
  // function
  const primaryBtnFunc = (value, isNumber, key) => {
    if (
      (isNumber && !operator) ||
      (!firstNum && !operator && key === "minus")
    ) {
      setFirstNum((prev) => (prev ? `${prev}${value}` : `${value}`));
    }
    if (firstNum && !secondNum && !isNumber) {
      setOperator(value);
      setOperatorFunc(key);
    }
    if (result && !isNumber) {
      setFirstNum(result);
      setOperator(value);
      setOperatorFunc(key);
      setSecondNum("");
    }
    if (operator && operatorFunc !== "factorial" && isNumber) {
      setSecondNum((prev) => (prev ? `${prev}${value}` : `${value}`));
    }
  };
  const resultBtnFunc = () => {
    switch (operatorFunc === "factorial") {
      case true:
        setResult(() => `${calculator.factorial(firstNum)}`);
      default:
        if (firstNum && secondNum && operatorFunc) {
          setResult(
            () =>
              `${calculator[`${operatorFunc}`](
                parseFloat(firstNum),
                parseFloat(secondNum)
              )}`
          );
        }
    }
  };
  const clearBtnFunc = () => {
    if (secondNum) setSecondNum("");
    else if (operator) {
      setOperator("");
      setOperatorFunc("");
    } else if (firstNum) setFirstNum("");
  };
  const allClearBtnFunc = () => {
    setFirstNum("");
    setSecondNum("");
    setOperator("");
    setOperatorFunc("");
    setResult("");
  };
  // DOM
  return (
    <div className="w-100 vh-100 d-flex align-items-center justify-content-center">
      <main
        className="h-auto d-flex flex-column align-items-center justify-conten-center rounded-4 bg-dark p-4 border border-secondary border-2"
        style={{ width: "25rem", filter: "drop-shadow(2px 4px 6px black)" }}
      >
        <section
          id="calculator-monitor"
          className="w-100 bg-secondary rounded-4 mb-3"
          style={{ height: "9rem", boxShadow: "inset 0px 0px 5px 0px #000000" }}
        >
          <CalcMonitor
            firstNum={firstNum}
            secondNum={secondNum}
            operator={operator}
            result={result}
          />
        </section>
        <section
          id="calculator-keyboard"
          className="d-flex flex-wrap align-items-center justify-content-between gap-2"
          style={{ height: "27rem" }}
        >
          {calculatorButtonArrays.map((eachbtn) => (
            <CalcButton
              label={eachbtn?.label}
              key={eachbtn?.key}
              isNumber={eachbtn?.isNumber}
              onClick={() =>
                eachbtn.key === "equal"
                  ? resultBtnFunc()
                  : eachbtn.key === "clear"
                  ? clearBtnFunc()
                  : eachbtn.key === "allClear"
                  ? allClearBtnFunc()
                  : primaryBtnFunc(
                      eachbtn?.value,
                      eachbtn?.isNumber,
                      eachbtn?.key
                    )
              }
            />
          ))}
        </section>
      </main>
    </div>
  );
}

Calculator.propTypes = {};

export default Calculator;
