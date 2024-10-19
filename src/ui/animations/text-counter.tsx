import { useEffect, useState } from "react";

type TextCounterProps = {
  maxValue: number;
  minValue: number;
  text: string;
  isView?: boolean;
};

export const TextCounter = ({ minValue, maxValue, text }: TextCounterProps) => {
  const [counter, setCounter] = useState<number>(minValue);
  const [maxCounterValue, setMaxCounterValue] = useState<number>(maxValue);

  useEffect(() => {
    setMaxCounterValue(maxValue);
  }, [maxValue]);

  useEffect(() => {
    const addMore = setInterval(() => {
      setCounter((prev) => {
        if (prev < maxCounterValue) {
          return prev + 1; // Incrementa el valor
        } else {
          clearInterval(addMore); // Detiene el contador al alcanzar el maxValue
          return prev;
        }
      });
    }, 0o100);

    return () => clearInterval(addMore);
  }, [maxValue]);

  return (
    <div className="font-medium text-center text-5xl mb-4">
      {text.slice(0, 1)} {counter} {text.slice(2, text.length)}
    </div>
  );
};
