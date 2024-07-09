"use client";
import twoSum from "./twoSum";

const inputs = [
  {
    target: 9,
    numbers: [2, 7, 11, 15],
  },
  {
    target: 6,
    numbers: [2, 3, 4],
  },
  {
    target: -1,
    numbers: [-1, 0],
  },
  {
    target: 21,
    numbers: [4, 11, 17, 25],
  },
  {
    target: 4,
    numbers: [0, 1, 2, 2, 3, 5],
  },
];

const View = () => {
  return (
    <div>
      {inputs.map((input, i) => {
        const result = twoSum(input.numbers, input.target);

        console.log(result);

        return (
          <div key={i}>
            <p>{`Input: numbers = [${input.numbers}], target = ${input.target}`}</p>
            <p>{`Output: [${result}]`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default View;
