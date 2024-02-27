import { FC } from "react";
import { counterProperty } from "../../commons/property/counterProperty";

interface CounterProps extends counterProperty {
  onButtonClick: (value: number) => void;
}

const CounterPresentation: FC<CounterProps> = ({ counter, click, onButtonClick }) => {
  return (
    <>
      <h1>Counter: {counter}</h1>
      <h1>Click: {click}</h1>
      <button onClick={() => onButtonClick(1)}>Increment 1</button>
      <button onClick={() => onButtonClick(5)}>Increment 5</button>
    </>
  );
};

export { CounterPresentation };
