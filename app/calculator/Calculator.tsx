"use client";

import { FormEvent, useState } from "react";

import Button from "@/components/Button";
import Input from "@/components/Form/Input";
import Stack from "@/components/Stack";
import { strEmptyOrInvalidNum } from "@/utils/string";

// Uses stateless input fields
const Calculator = () => {
  const [result, setResult] = useState<undefined | number>();
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { num1, num2 } = Object.fromEntries(new FormData(e.currentTarget));

    if (strEmptyOrInvalidNum(num1 as string)) setError("num1 is invalid");
    else if (strEmptyOrInvalidNum(num2 as string)) setError("num2 is invalid");
    else {
      setError("");
      setResult((+num1 as number) + (+num2 as number));
    }
  };

  return (
    <Stack>
      <form onSubmit={handleSubmit} className="flex flex-col p-2 gap-3">
        <Input name="num1" type="number" />
        <Input name="num2" type="number" />
        <Button type="submit">Add Two Numbers</Button>
      </form>

      {error ? <p>Error: {error}</p> : <p>Total: {result}</p>}
    </Stack>
  );
};

export default Calculator;
