import { forwardRef } from "react";
import StyledSelectInput from "./selectInput.js";

const SelectInput = ({ id, labelText, options, labelSize, ...rest }, ref) => {
  return (
    <StyledSelectInput key={id} $labelSize={labelSize && labelSize}>
      <label htmlFor={id}>{labelText}</label>
      <select
        key={id}
        name={id}
        id={id}
        ref={ref}
        {...rest}
        onChange={(e) => console.log(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </StyledSelectInput>
  );
};

export default forwardRef(SelectInput);
