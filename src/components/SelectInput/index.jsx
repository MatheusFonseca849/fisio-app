import { forwardRef } from "react";
import StyledSelectInput from "./selectInput.js";

const SelectInput = (
  { id,
    labelText,
    options,
    labelSize,
    optionSize,
    errorMessage,
     ...rest
     },
    ref
) => {
  return (
    <StyledSelectInput
      key={id}
      $labelSize={labelSize && labelSize}
      $optionSize={optionSize && optionSize}
      $error={errorMessage ? true : false}
    >
      <label htmlFor={id}>{labelText}</label>
      <div>
      <select
        key={id}
        name={id}
        id={id}
        ref={ref}
        {...rest}
        onChange={(e) => console.log(e.target.value)}
      >
        <option value="">Selecione um...</option>
        {options.map((option) => (
          <option key={option.index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <span>{errorMessage}</span>
      </div>
    </StyledSelectInput>
  );
};

export default forwardRef(SelectInput);
