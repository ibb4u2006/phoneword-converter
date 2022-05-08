import { Heading, InputField } from "@kiwicom/orbit-components";
import * as React from "react";

interface ITextInputProps {
  handleChange: (e: any) => Promise<void>;
}

const TextInput: React.FunctionComponent<ITextInputProps> = ({
  handleChange,
}) => {
  return (
    <div>
      <Heading as="h2">Numeric Text Input</Heading>
      <InputField
        label="Numberic Input field"
        placeholder="Insert numeric string between 2 and 9"
        minValue={2}
        maxLength={8}
        type="number"
        inputMode="numeric"
        help="Insert numeric string only"
        onChange={handleChange}
      />
    </div>
  );
};

export default TextInput;
